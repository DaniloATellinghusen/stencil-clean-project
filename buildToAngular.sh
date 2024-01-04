# Remove previous package archive if exists
echo "cleanup previous package archive...";
prevPkgV=$(npm version | grep "'@group-ui/group-ui': " | cut -d "'" -f 4);
{ rm "./angular/group-ui-group-ui-$prevPkgV.tgz" || true; } >/dev/null 2>&1;
printf "done!\n"

# Backup app.component.html
if [ -e "./angular/testApp/src/app/app.component.html" ]; then
    testingIndexContent=$(cat ./angular/testApp/src/app/app.component.html);
else
    testingIndexContent='';
fi

# Remove previous angular test project if exists
echo "cleanup existing angular testApp...";
{ rm -rf "./angular/testApp" || true; } >/dev/null 2>&1;
printf "done!\n"

# Create local package
npm run build.local;

# Move local package to angular directory
pkgV=$(npm version | grep "'@group-ui/group-ui': " | cut -d "'" -f 4);
mv "group-ui-group-ui-$pkgV.tgz" angular;

# Build angular wrappers with new version numbers etc
cd angular || return;
npm version prerelease --git-tag-version false
npm pkg set dependencies."@group-ui/group-ui"="./group-ui-group-ui-$pkgV.tgz"
npm run build.local;
