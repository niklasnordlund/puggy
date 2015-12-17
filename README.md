# Puggy

A slot machine on the web! Whoa. The app is two parts – the lever (preferably used on a handheld device) and the slot machine itself with its reels.

See it in action: 

<a href="http://www.youtube.com/watch?feature=player_embedded&v=ogBGjS3RgKk" target="_blank"><img src="http://img.youtube.com/vi/ogBGjS3RgKk/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="440" height="320" border="10" /></a>

Uses device orientation to detect when lever is pulled and sockets for communication between the apps.

## Install

Clone git repo, npm install, build the bundle and start server:
```
> git clone git@github.com:niklasnordlund/puggy.git
> cd puggy
> npm install
> grunt browserify
> node server
```

Hit ```localhost:3000/slot``` for the slot machine and ```localhost:3000/lever``` for the lever.

## Notes

I'm using [sockets.io](http://socket.io/), [ki](http://www.javascriptoo.com/ki-js/readme), [es6-promise polyfill](https://github.com/jakearchibald/es6-promise).
