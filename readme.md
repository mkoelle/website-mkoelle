# Personal Site - mkoelle.com

This project is holds the infrastructure and content to host my personal site via AWS S3 and Cloudfront.

## Layout

Folders:

- `infra` contains the cloudformation templates used for deploying the infrastructure
- `src` root directory for the dynamic website content
- `static` root directory for the static website content
- `dist` transpiled webpage assets
  - created when `npm start` or `npm run build` execute
- `scripts` locally and ci executable scripts for deployment and validation

## Technologies / Resources used

### Infrastructure

- AWS
  - AWS CLI
  - Cloudformation

### Website

- npm/node
- [11ty (Eleventy)](https://www.11ty.dev/docs/)
- [Bulma](https://bulma.io/)
  - [bulmaswatch - darkly](https://jenil.github.io/bulmaswatch/darkly/)

## Development

Getting set up

``` bash
npm install
```

Local live testing

``` bash
# launches browserstack @ http://localhost:3001
# launches local copy @ http://localhost:8080
npm run start
```

Build

``` bash
# clears the dist folder and re-creates the assets
npm run build
```

Deploy

``` bash
# Requires active AWS session
# Requires that a specific hosted zone already be created with specific stack outputs
# Hardcoded to look for an CFN export value to get hosted zone
# Uses aws cli to deploy the bucket, bucket policy, cloudfront, OAI, certificate, & associated DNS entry
./infra/deploy-infra.sh
```

``` bash
# Requires active AWS session
# Requires deploy-infra already ran
# Hardcoded to look for an CFN export value to get bucket arn
# Runs npm ci and build
# Uses aws s3 sync to deploy
./scripts/deploy-site.sh
```

Creating QR Codes

``` bash
npx qrcode --output static/img/qr_resume_01.png  https://shadow.mkoelle.com/resume/01
```

### TODO

- Data Completion (enough for single page)
- Data Completion (enough for CV)
- Single Page Resume Template
- Automated Visual Regression Testing
- Applicant Tracking System (ATS) Scan
- Cloudfront Pretty URLS
- Github Actions
  - Quality Checks
  - Deployment

## Additional Documentation

All about that style

- [Fonts; Georgia is better than Garamond](https://designforhackers.com/blog/garamond/)

Get it in print

- [Cascading Style Sheets @page](https://developer.mozilla.org/en-US/docs/Web/CSS/@page)
- [CSS Paged Media Module](https://www.w3.org/TR/css-page-3/#cascading-and-page-context)
- [How to create a printer-friendly website using print stylesheets](https://blog.tbhcreative.com/2019/06/website-print-friendly-styling.html)
- [How to Create Printer-friendly Pages with CSS](https://www.sitepoint.com/css-printer-friendly-pages/)
- [Print CSS basics in 10 minutes](https://www.paperplane.app/blog/print-css-basics/)
