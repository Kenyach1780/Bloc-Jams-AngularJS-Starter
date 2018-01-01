---
layout: post
title: Bloc Jams AngularJS
thumbnail-path: "assets/images/bloc_jams_logo.png"
short-description: Bloc Jams is a music player similar to Spotify that allows you to play your favorite music wherever you go.
---

![Bloc Jams Logo](https://github.com/Kenyach1780/bloc-jams/blob/master/assets/images/bloc_jams_logo.png)

# Bloc Jams Angular Case Study

### Summary
The goal of this project was to refactor the Bloc Jams application using the AngularJS framework.  Version 1.6.4 was used in this refactor.

### Explanation
In starting the Bloc Jams Angular refactor, I installed NodeJS to run the application locally. Bloc provided a Bloc Jams AngularJS starter project on GitHub which was forked, renamed and pushed back up to my account.

Next I added the global file along with templates for the landing, collection and album pages. To make sure the templates are accessible in the view, I added UI-Router to my `index.html` file and injected the UI-Router module into the application. After configuring the states, I was able to begin building the application.

A player bar needed to be created in order to allow the user to control the music player. This template was created with simple HTML. Volume control and playback position (seek bar) elements were also added for additional functionality of the player bar.  

Controllers for the landing, collection and album views were then created. I updated the respective templates in order to be able to access the information to display those views. In the album template, static album information was replaced with markup so the information will update when a new album in the collection is selected.

Next, the controller for the player bar was created. The song player and fixtures services were injected into this controller so they are easily accessible on the player bar. Within the song player service that was created, the `play`, `pause` and `previous` methods were written with the purpose of being able to operate the music player when those specific buttons are clicked.

The seek bar needed its own directive. I removed the seek bar element from the player bar template and moved it to its own template. I then added logic to the seek bar directive that will make sure the seek bar updates when playback position is changed and wrote a method to update the seek bar thumb. Attributes were added to the seek bar directive to allow the playback position of the song to be changed.

The purpose of Bloc Jams is for users to be able to hear their music selections. Volume controls were then added to the song player service using `value` and `max` attributes to set a minimum and maximum volume.

Lastly, I created a timecode filter. The song duration was previously shown in seconds format.  This `timecode` filter allowed the time to be shown in a more traditional minutes, seconds format (M:SS).

### Conclusion
Using Angular to refactor Bloc Jams was daunting at times, but it gave me new insights into how other frameworks can give an “old” application new life and make it more user-friendly.