# MIT Real time train (bus) tracker

This is a variation on the MIT xPro challenge called "Real Time Bus Tracker" I've updated my code to work on a Train system in Chicago (one I personally use). It uses MapBox and JavaScript to point the marker at all the train stops along the route.

**Note:** this demo requires a Mapbox API key which has been omited for security purposes. I've included a video of it working!

[Here is a link to the video](https://youtu.be/jYVeE6ZKAQs)

## Requirements

- Node JS

## How to run

- git clone this repository
- in the root of this project run `npx live-server`

## Improvements

- Add an alert to ask the user to put in a MapBox API code to see it working. 
- Store the user added API key in localstorage so they don't get asked on each page refresh

### MIT License

Copyright 2023 Erik Slagter

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
