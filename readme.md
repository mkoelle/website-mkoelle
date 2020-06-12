# Personal Site - mkoelle.com

This project is holds the infrastructure and content to host my personal site via AWS S3 and Cloudfront.

## Layout

Folders:

- `infra` contains the cloudformation templates used for deploying the infrastructure
- `src` root directory for the dynamic website content
- `static` root directory for the static website content
- `dist` transpiled webpage assets, ready for hosting, created when `npm start` or `npm run build` execute
- `scripts` locally and ci executable scripts for deployment and validation

## Resources

- [How to Create Printer-friendly Pages with CSS](https://www.sitepoint.com/css-printer-friendly-pages/)
- [Print CSS basics in 10 minutes](https://www.paperplane.app/blog/print-css-basics/)
- [How to create a printer-friendly website using print stylesheets](https://blog.tbhcreative.com/2019/06/website-print-friendly-styling.html)
