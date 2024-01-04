import { setMode } from '@stencil/core';

// Used by Stencil to identify the brand attribute
export default () => {
  const brandResolver = (elm: HTMLElement) => {
    if (isDatePickerInput(elm)) {
      // The groupui-input in the date picker does not seem to receive the correct brand property before the brand resolver is called.
      // To work around this, we look for the .flatpickr.input-wrapper instance that belongs to the groupui-input and return the brand from that element.
      const flatpickrBrand = getBrandFromFlatpickrInputWrapper(elm);
      if (flatpickrBrand) return flatpickrBrand;
    }

    const brand = (elm as any).brand || elm.getAttribute('brand');
    if (brand) {
      return brand;
    } else if (!elm.parentElement) {
      return 'vwgroup';
    } else {
      return brandResolver(elm.parentElement);
    }
  };

  setMode((elm) => {
    return brandResolver(elm);
  });
};

const isDatePickerInput = (elm: HTMLElement) =>
  elm.tagName === 'GROUPUI-INPUT' && elm.className.includes('date-picker-input');

const getBrandFromFlatpickrInputWrapper = (elm: HTMLElement) => {
  let brand: string;

  // get all date pickers in the document and find the one that belongs to the groupui-input
  const datePickers = document.querySelectorAll('groupui-date-picker');
  datePickers.forEach((datePicker) => {
    const flatpickr = datePicker.shadowRoot.querySelector('.flatpickr.input-wrapper');
    // flatpickr places the groupui-input next to the input wrapper
    if (flatpickr?.nextElementSibling === elm) {
      brand = flatpickr.attributes?.getNamedItem('brand')?.value;
    }
  });
  return brand;
};
