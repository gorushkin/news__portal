// Add this script before other scripts in HTML file
(function () {
  window.__listeners__ = {
    listenersCount: 0
  };


  Element.prototype.addEventListener = new Proxy(Element.prototype.addEventListener, {
    apply: function (target, thisArg, argumentsList) {
      let type = argumentsList[0];
      let fn = argumentsList[1];

      if (!window.__listeners__[type]) {
        window.__listeners__[type] = [];
      }

      console.log(`%cADD: event ${type} to`, 'color: blue; border: 1px solid blue; padding: 10px;', thisArg, fn);
      window.__listeners__[type].push({
        type: type,
        fn: fn,
        element: thisArg
      });
      window.__listeners__.listenersCount++;

      return target.apply(thisArg, argumentsList);
    }
  });

  Element.prototype.removeEventListener = new Proxy(Element.prototype.removeEventListener, {
    apply: function (target, thisArg, argumentsList) {
      let type = argumentsList[0];
      let fn = argumentsList[1];

      console.log(`%cATTEMPT TO REMOVE: event ${type} from`, 'color: green; border: 1px solid green; padding: 10px;', thisArg, fn);

      if (!window.__listeners__[type]) {
        return;
      }


      window.__listeners__[type].forEach(function (item) {
        if (!item.fn === fn && item.element === thisArg && item.type === type) {
          return;
        }
        let index = window.__listeners__[type].indexOf(item);

        window.__listeners__[type] = [
          ...window.__listeners__[type].slice(0, index),
          ...window.__listeners__[type].slice(index + 1)
        ];
        console.log(`%cREMOVE: event ${type} from`, 'color: orange; border: 1px solid orange; padding: 10px;', thisArg, fn);
        window.__listeners__.listenersCount--;
      });
    }
  });
});
