import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

const AppViewModel = AppMap.extend({
  define: {
    message: {
      value: 'Hello World!',
      serialize: false
    },
    title: {
      value: 'donejs-chat',
      serialize: false
    }
  }
});


route('/:page', { page: 'home' });

export default AppViewModel;
