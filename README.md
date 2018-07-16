# Restaurant Reviews App

### Description

>This is the 6th project for the Udacity [Front-End Web Dev Nanodegree](https://udacity.com/course/front-end-web-developer-nanodegree--nd001/ "Font-End Web Developer Nanodegree"). The goal was to convert a static webpage to a mobile-ready web application. More specifically, to take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. Also, a service worker was implemented for creating a seamless offline experience.

### Specification

We have been provided the code for a restaurant reviews website. The code had a lot of issues. It was barely usable on a desktop browser, much less a mobile device. It also didn’t include any standard accessibility features, and it didn’t work offline at all. Our job was to update the code to resolve these issues while still maintaining the included functionality. 

## Instructions

#### Installation:

Copy/clone repository from Github using Git:
```sh
$ git clone git@github.com:nyafologus//mws-restaurant-stage-1.git
```
Open ```index.html``` in your browser. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to [Python's website](https://www.python.org/) to download and install the software.

With your server running, visit the site: `http://localhost:8000`

 Once a page has been visited, it should be able to be revisited even in offline mode.

## Dependencies:

The app was built with the following code dependencies:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 