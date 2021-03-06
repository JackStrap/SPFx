# fluent-tag-picker

## Summary

A simple demo of Fluent Tag Picker
1. Default tag picker
2. Tag picker with some sort of default value

![fluentTagPicker](./fluentTagPicker.png)

## Features

Description of the extension that expands upon high-level summary above.

This extension illustrates the following concepts:

- items for the tag picker are stored in the property pane.
- set default value on load with *componentRef*.
- using onBlur to clear state if nothing is selected

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.11-green.svg)

## Applies to 

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> office-ui-fabric-react: 6.214.0

## Solution

Solution|Author(s)
--------|---------
fluentTagPicker | [Jack.Strap](https://github.com/JackStrap)

## Version history

Version|Date|Comments
-------|----|--------
1.0|January 07, 2021|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp packprod** packing for production `gulpSequence(clean, bundle, package-solution --dist)`
  - **gulp packdev** package for development `gulpSequence(clean, bundle, package-solution)`
  - **gulp dev** start server with `--nobrowser` argument
  - **gulp serve**

> Include any additional steps as needed.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
