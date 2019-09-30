import Vue from 'vue';
import content from '~/content.js';

// Inject the content object into the Vue instance so that it is globally available
Vue.prototype.$content = content;
