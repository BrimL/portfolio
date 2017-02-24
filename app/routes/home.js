import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'portfolio',
      project: 'Portfolio',
      language: 'Javascript - Ember.js',
      repo: 'http://www.URLplaceholder.com',
      host: 'http://www.URLplaceholder.com',
      image: 'http://placehold.it/1000',
      description: 'This placeholder text for the portfolio web-app project.'
    }, {
      id:'rpg-character-gen',
      project:'Tabletop RPG Character Generator',
      language: 'Javascript - Ember.js',
      repo:'http://www.URLplaceholder.com',
      host:'http://www.URLplaceholder.com',
      image:'http://placehold.it/1000',
      description: 'This is placeholder text for the RPG Character Generator project.'
    }, {
      id:'slack-bot',
      project:'Slack Bot Application',
      language:'Javascript - Electron.js, Node.js',
      repo:'http://www.URLplaceholder.com',
      host:'http://www.URLplaceholder.com',
      image:'http://placehold.it/1000',
      description: 'This is placeholder text for the Slack Bot Electron app project.'
    }];
  }
});
