this["rl_components"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "output";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(4);
	__webpack_require__(6);
	__webpack_require__(13);
	var behaviors = __webpack_require__(14);
	exports.behaviors = behaviors;
	var components = __webpack_require__(18);
	exports.components = components;
	var services = __webpack_require__(146);
	exports.services = services;
	var types = __webpack_require__(160);
	exports.types = types;
	exports.moduleName = 'rl.ui';
	angular.module(exports.moduleName, [
	    'ui.bootstrap',
	    'ui.bootstrap-slider',
	    'ngSanitize',
	    behaviors.moduleName,
	    components.moduleName,
	    services.moduleName,
	]);


/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() { module.exports = this["angular"]; }());

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	module.exports = 'ui.bootstrap';


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
	 * angular-ui-bootstrap
	 * http://angular-ui.github.io/bootstrap/
	
	 * Version: 0.13.4 - 2015-09-03
	 * License: MIT
	 */
	angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]);
	angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html","template/accordion/accordion.html","template/alert/alert.html","template/carousel/carousel.html","template/carousel/slide.html","template/datepicker/datepicker.html","template/datepicker/day.html","template/datepicker/month.html","template/datepicker/popup.html","template/datepicker/year.html","template/modal/backdrop.html","template/modal/window.html","template/pagination/pager.html","template/pagination/pagination.html","template/tooltip/tooltip-html-popup.html","template/tooltip/tooltip-html-unsafe-popup.html","template/tooltip/tooltip-popup.html","template/tooltip/tooltip-template-popup.html","template/popover/popover-html.html","template/popover/popover-template.html","template/popover/popover.html","template/progressbar/bar.html","template/progressbar/progress.html","template/progressbar/progressbar.html","template/rating/rating.html","template/tabs/tab.html","template/tabs/tabset.html","template/timepicker/timepicker.html","template/typeahead/typeahead-match.html","template/typeahead/typeahead-popup.html"]);
	angular.module('ui.bootstrap.collapse', [])
	
	  .directive('collapse', ['$animate', function($animate) {
	    return {
	      link: function(scope, element, attrs) {
	        function expand() {
	          element.removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', true)
	            .attr('aria-hidden', false);
	
	          $animate.addClass(element, 'in', {
	            to: { height: element[0].scrollHeight + 'px' }
	          }).then(expandDone);
	        }
	
	        function expandDone() {
	          element.removeClass('collapsing');
	          element.css({height: 'auto'});
	        }
	
	        function collapse() {
	          if (!element.hasClass('collapse') && !element.hasClass('in')) {
	            return collapseDone();
	          }
	
	          element
	            // IMPORTANT: The height must be set before adding "collapsing" class.
	            // Otherwise, the browser attempts to animate from height 0 (in
	            // collapsing class) to the given height here.
	            .css({height: element[0].scrollHeight + 'px'})
	            // initially all panel collapse have the collapse class, this removal
	            // prevents the animation from jumping to collapsed state
	            .removeClass('collapse')
	            .addClass('collapsing')
	            .attr('aria-expanded', false)
	            .attr('aria-hidden', true);
	
	          $animate.removeClass(element, 'in', {
	            to: {height: '0'}
	          }).then(collapseDone);
	        }
	
	        function collapseDone() {
	          element.css({height: '0'}); // Required so that collapse works when animation is disabled
	          element.removeClass('collapsing');
	          element.addClass('collapse');
	        }
	
	        scope.$watch(attrs.collapse, function(shouldCollapse) {
	          if (shouldCollapse) {
	            collapse();
	          } else {
	            expand();
	          }
	        });
	      }
	    };
	  }]);
	
	angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])
	
	.constant('accordionConfig', {
	  closeOthers: true
	})
	
	.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function($scope, $attrs, accordionConfig) {
	  // This array keeps track of the accordion groups
	  this.groups = [];
	
	  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
	  this.closeOthers = function(openGroup) {
	    var closeOthers = angular.isDefined($attrs.closeOthers) ?
	      $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
	    if (closeOthers) {
	      angular.forEach(this.groups, function(group) {
	        if (group !== openGroup) {
	          group.isOpen = false;
	        }
	      });
	    }
	  };
	
	  // This is called from the accordion-group directive to add itself to the accordion
	  this.addGroup = function(groupScope) {
	    var that = this;
	    this.groups.push(groupScope);
	
	    groupScope.$on('$destroy', function(event) {
	      that.removeGroup(groupScope);
	    });
	  };
	
	  // This is called from the accordion-group directive when to remove itself
	  this.removeGroup = function(group) {
	    var index = this.groups.indexOf(group);
	    if (index !== -1) {
	      this.groups.splice(index, 1);
	    }
	  };
	
	}])
	
	// The accordion directive simply sets up the directive controller
	// and adds an accordion CSS class to itself element.
	.directive('accordion', function() {
	  return {
	    restrict: 'EA',
	    controller: 'AccordionController',
	    controllerAs: 'accordion',
	    transclude: true,
	    replace: false,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/accordion/accordion.html';
	    }
	  };
	})
	
	// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
	.directive('accordionGroup', function() {
	  return {
	    require: '^accordion',         // We need this directive to be inside an accordion
	    restrict: 'EA',
	    transclude: true,              // It transcludes the contents of the directive into the template
	    replace: true,                // The element containing the directive will be replaced with the template
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/accordion/accordion-group.html';
	    },
	    scope: {
	      heading: '@',               // Interpolate the heading attribute onto this scope
	      isOpen: '=?',
	      isDisabled: '=?'
	    },
	    controller: function() {
	      this.setHeading = function(element) {
	        this.heading = element;
	      };
	    },
	    link: function(scope, element, attrs, accordionCtrl) {
	      accordionCtrl.addGroup(scope);
	
	      scope.openClass = attrs.openClass || 'panel-open';
	      scope.panelClass = attrs.panelClass;
	      scope.$watch('isOpen', function(value) {
	        element.toggleClass(scope.openClass, value);
	        if (value) {
	          accordionCtrl.closeOthers(scope);
	        }
	      });
	
	      scope.toggleOpen = function($event) {
	        if (!scope.isDisabled) {
	          if (!$event || $event.which === 32) {
	            scope.isOpen = !scope.isOpen;
	          }
	        }
	      };
	    }
	  };
	})
	
	// Use accordion-heading below an accordion-group to provide a heading containing HTML
	// <accordion-group>
	//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
	// </accordion-group>
	.directive('accordionHeading', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,   // Grab the contents to be used as the heading
	    template: '',       // In effect remove this element!
	    replace: true,
	    require: '^accordionGroup',
	    link: function(scope, element, attr, accordionGroupCtrl, transclude) {
	      // Pass the heading to the accordion-group controller
	      // so that it can be transcluded into the right place in the template
	      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
	      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
	    }
	  };
	})
	
	// Use in the accordion-group template to indicate where you want the heading to be transcluded
	// You must provide the property on the accordion-group controller that will hold the transcluded element
	// <div class="accordion-group">
	//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
	//   ...
	// </div>
	.directive('accordionTransclude', function() {
	  return {
	    require: '^accordionGroup',
	    link: function(scope, element, attr, controller) {
	      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
	        if (heading) {
	          element.find('span').html('');
	          element.find('span').append(heading);
	        }
	      });
	    }
	  };
	})
	
	;
	
	angular.module('ui.bootstrap.alert', [])
	
	.controller('AlertController', ['$scope', '$attrs', function($scope, $attrs) {
	  $scope.closeable = !!$attrs.close;
	  this.close = $scope.close;
	}])
	
	.directive('alert', function() {
	  return {
	    controller: 'AlertController',
	    controllerAs: 'alert',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/alert/alert.html';
	    },
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@',
	      close: '&'
	    }
	  };
	})
	
	.directive('dismissOnTimeout', ['$timeout', function($timeout) {
	  return {
	    require: 'alert',
	    link: function(scope, element, attrs, alertCtrl) {
	      $timeout(function() {
	        alertCtrl.close();
	      }, parseInt(attrs.dismissOnTimeout, 10));
	    }
	  };
	}]);
	
	angular.module('ui.bootstrap.bindHtml', [])
	
	  .value('$bindHtmlUnsafeSuppressDeprecated', false)
	
	  .directive('bindHtmlUnsafe', ['$log', '$bindHtmlUnsafeSuppressDeprecated', function ($log, $bindHtmlUnsafeSuppressDeprecated) {
	    return function (scope, element, attr) {
	      if (!$bindHtmlUnsafeSuppressDeprecated) {
	        $log.warn('bindHtmlUnsafe is now deprecated. Use ngBindHtml instead');
	      }
	      element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
	      scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
	        element.html(value || '');
	      });
	    };
	  }]);
	angular.module('ui.bootstrap.buttons', [])
	
	.constant('buttonConfig', {
	  activeClass: 'active',
	  toggleEvent: 'click'
	})
	
	.controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
	  this.activeClass = buttonConfig.activeClass || 'active';
	  this.toggleEvent = buttonConfig.toggleEvent || 'click';
	}])
	
	.directive('btnRadio', function() {
	  return {
	    require: ['btnRadio', 'ngModel'],
	    controller: 'ButtonsController',
	    controllerAs: 'buttons',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      element.find('input').css({display: 'none'});
	
	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
	      };
	
	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }
	
	        var isActive = element.hasClass(buttonsCtrl.activeClass);
	
	        if (!isActive || angular.isDefined(attrs.uncheckable)) {
	          scope.$apply(function() {
	            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
	            ngModelCtrl.$render();
	          });
	        }
	      });
	    }
	  };
	})
	
	.directive('btnCheckbox', ['$document', function($document) {
	  return {
	    require: ['btnCheckbox', 'ngModel'],
	    controller: 'ButtonsController',
	    controllerAs: 'button',
	    link: function(scope, element, attrs, ctrls) {
	      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      element.find('input').css({display: 'none'});
	
	      function getTrueValue() {
	        return getCheckboxValue(attrs.btnCheckboxTrue, true);
	      }
	
	      function getFalseValue() {
	        return getCheckboxValue(attrs.btnCheckboxFalse, false);
	      }
	
	      function getCheckboxValue(attributeValue, defaultValue) {
	        var val = scope.$eval(attributeValue);
	        return angular.isDefined(val) ? val : defaultValue;
	      }
	
	      //model -> UI
	      ngModelCtrl.$render = function() {
	        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
	      };
	
	      //ui->model
	      element.bind(buttonsCtrl.toggleEvent, function() {
	        if (attrs.disabled) {
	          return;
	        }
	
	        scope.$apply(function() {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	
	      //accessibility
	      element.on('keypress', function(e) {
	        if (attrs.disabled || e.which !== 32 || $document[0].activeElement !== element[0]) {
	          return;
	        }
	
	        scope.$apply(function() {
	          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
	          ngModelCtrl.$render();
	        });
	      });
	    }
	  };
	}]);
	
	/**
	* @ngdoc overview
	* @name ui.bootstrap.carousel
	*
	* @description
	* AngularJS version of an image carousel.
	*
	*/
	angular.module('ui.bootstrap.carousel', [])
	.controller('CarouselController', ['$scope', '$element', '$interval', '$animate', function ($scope, $element, $interval, $animate) {
	  var self = this,
	    slides = self.slides = $scope.slides = [],
	    NEW_ANIMATE = angular.version.minor >= 4,
	    NO_TRANSITION = 'uib-noTransition',
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    currentIndex = -1,
	    currentInterval, isPlaying;
	  self.currentSlide = null;
	
	  var destroyed = false;
	  /* direction: "prev" or "next" */
	  self.select = $scope.select = function(nextSlide, direction) {
	    var nextIndex = $scope.indexOfSlide(nextSlide);
	    //Decide direction if it's not given
	    if (direction === undefined) {
	      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
	    }
	    //Prevent this user-triggered transition from occurring if there is already one in progress
	    if (nextSlide && nextSlide !== self.currentSlide && !$scope.$currentTransition) {
	      goNext(nextSlide, nextIndex, direction);
	    }
	  };
	
	  function goNext(slide, index, direction) {
	    // Scope has been destroyed, stop here.
	    if (destroyed) { return; }
	
	    angular.extend(slide, {direction: direction, active: true});
	    angular.extend(self.currentSlide || {}, {direction: direction, active: false});
	    if ($animate.enabled() && !$scope.noTransition && !$scope.$currentTransition &&
	      slide.$element && self.slides.length > 1) {
	      slide.$element.data(SLIDE_DIRECTION, slide.direction);
	      if (self.currentSlide && self.currentSlide.$element) {
	        self.currentSlide.$element.data(SLIDE_DIRECTION, slide.direction);
	      }
	
	      $scope.$currentTransition = true;
	      if (NEW_ANIMATE) {
	        $animate.on('addClass', slide.$element, function (element, phase) {
	          if (phase === 'close') {
	            $scope.$currentTransition = null;
	            $animate.off('addClass', element);
	          }
	        });
	      } else {
	        slide.$element.one('$animate:close', function closeFn() {
	          $scope.$currentTransition = null;
	        });
	      }
	    }
	
	    self.currentSlide = slide;
	    currentIndex = index;
	
	    //every time you change slides, reset the timer
	    restartTimer();
	  }
	
	  $scope.$on('$destroy', function () {
	    destroyed = true;
	  });
	
	  function getSlideByIndex(index) {
	    if (angular.isUndefined(slides[index].index)) {
	      return slides[index];
	    }
	    var i, len = slides.length;
	    for (i = 0; i < slides.length; ++i) {
	      if (slides[i].index == index) {
	        return slides[i];
	      }
	    }
	  }
	
	  self.getCurrentIndex = function() {
	    if (self.currentSlide && angular.isDefined(self.currentSlide.index)) {
	      return +self.currentSlide.index;
	    }
	    return currentIndex;
	  };
	
	  /* Allow outside people to call indexOf on slides array */
	  $scope.indexOfSlide = function(slide) {
	    return angular.isDefined(slide.index) ? +slide.index : slides.indexOf(slide);
	  };
	
	  $scope.next = function() {
	    var newIndex = (self.getCurrentIndex() + 1) % slides.length;
	
	    if (newIndex === 0 && $scope.noWrap()) {
	      $scope.pause();
	      return;
	    }
	
	    return self.select(getSlideByIndex(newIndex), 'next');
	  };
	
	  $scope.prev = function() {
	    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;
	
	    if ($scope.noWrap() && newIndex === slides.length - 1){
	      $scope.pause();
	      return;
	    }
	
	    return self.select(getSlideByIndex(newIndex), 'prev');
	  };
	
	  $scope.isActive = function(slide) {
	     return self.currentSlide === slide;
	  };
	
	  $scope.$watch('interval', restartTimer);
	  $scope.$on('$destroy', resetTimer);
	
	  function restartTimer() {
	    resetTimer();
	    var interval = +$scope.interval;
	    if (!isNaN(interval) && interval > 0) {
	      currentInterval = $interval(timerFn, interval);
	    }
	  }
	
	  function resetTimer() {
	    if (currentInterval) {
	      $interval.cancel(currentInterval);
	      currentInterval = null;
	    }
	  }
	
	  function timerFn() {
	    var interval = +$scope.interval;
	    if (isPlaying && !isNaN(interval) && interval > 0 && slides.length) {
	      $scope.next();
	    } else {
	      $scope.pause();
	    }
	  }
	
	  $scope.play = function() {
	    if (!isPlaying) {
	      isPlaying = true;
	      restartTimer();
	    }
	  };
	  $scope.pause = function() {
	    if (!$scope.noPause) {
	      isPlaying = false;
	      resetTimer();
	    }
	  };
	
	  self.addSlide = function(slide, element) {
	    slide.$element = element;
	    slides.push(slide);
	    //if this is the first slide or the slide is set to active, select it
	    if(slides.length === 1 || slide.active) {
	      self.select(slides[slides.length-1]);
	      if (slides.length == 1) {
	        $scope.play();
	      }
	    } else {
	      slide.active = false;
	    }
	  };
	
	  self.removeSlide = function(slide) {
	    if (angular.isDefined(slide.index)) {
	      slides.sort(function(a, b) {
	        return +a.index > +b.index;
	      });
	    }
	    //get the index of the slide inside the carousel
	    var index = slides.indexOf(slide);
	    slides.splice(index, 1);
	    if (slides.length > 0 && slide.active) {
	      if (index >= slides.length) {
	        self.select(slides[index-1]);
	      } else {
	        self.select(slides[index]);
	      }
	    } else if (currentIndex > index) {
	      currentIndex--;
	    }
	    
	    //clean the currentSlide when no more slide
	    if (slides.length === 0) {
	      self.currentSlide = null;
	    }
	  };
	
	  $scope.$watch('noTransition', function(noTransition) {
	    $element.data(NO_TRANSITION, noTransition);
	  });
	
	}])
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.carousel.directive:carousel
	 * @restrict EA
	 *
	 * @description
	 * Carousel is the outer container for a set of image 'slides' to showcase.
	 *
	 * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
	 * @param {boolean=} noTransition Whether to disable transitions on the carousel.
	 * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <carousel>
	      <slide>
	        <img src="http://placekitten.com/150/150" style="margin:auto;">
	        <div class="carousel-caption">
	          <p>Beautiful!</p>
	        </div>
	      </slide>
	      <slide>
	        <img src="http://placekitten.com/100/150" style="margin:auto;">
	        <div class="carousel-caption">
	          <p>D'aww!</p>
	        </div>
	      </slide>
	    </carousel>
	  </file>
	  <file name="demo.css">
	    .carousel-indicators {
	      top: auto;
	      bottom: 15px;
	    }
	  </file>
	</example>
	 */
	.directive('carousel', [function() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    controller: 'CarouselController',
	    controllerAs: 'carousel',
	    require: 'carousel',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/carousel.html';
	    },
	    scope: {
	      interval: '=',
	      noTransition: '=',
	      noPause: '=',
	      noWrap: '&'
	    }
	  };
	}])
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.carousel.directive:slide
	 * @restrict EA
	 *
	 * @description
	 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
	 *
	 * @param {boolean=} active Model binding, whether or not this slide is currently active.
	 * @param {number=} index The index of the slide. The slides will be sorted by this parameter.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	<div ng-controller="CarouselDemoCtrl">
	  <carousel>
	    <slide ng-repeat="slide in slides" active="slide.active" index="$index">
	      <img ng-src="{{slide.image}}" style="margin:auto;">
	      <div class="carousel-caption">
	        <h4>Slide {{$index}}</h4>
	        <p>{{slide.text}}</p>
	      </div>
	    </slide>
	  </carousel>
	  Interval, in milliseconds: <input type="number" ng-model="myInterval">
	  <br />Enter a negative number to stop the interval.
	</div>
	  </file>
	  <file name="script.js">
	function CarouselDemoCtrl($scope) {
	  $scope.myInterval = 5000;
	}
	  </file>
	  <file name="demo.css">
	    .carousel-indicators {
	      top: auto;
	      bottom: 15px;
	    }
	  </file>
	</example>
	*/
	
	.directive('slide', function() {
	  return {
	    require: '^carousel',
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/carousel/slide.html';
	    },
	    scope: {
	      active: '=?',
	      actual: '=?',
	      index: '=?'
	    },
	    link: function (scope, element, attrs, carouselCtrl) {
	      carouselCtrl.addSlide(scope, element);
	      //when the scope is destroyed then remove the slide from the current slides array
	      scope.$on('$destroy', function() {
	        carouselCtrl.removeSlide(scope);
	      });
	
	      scope.$watch('active', function(active) {
	        if (active) {
	          carouselCtrl.select(scope);
	        }
	      });
	    }
	  };
	})
	
	.animation('.item', [
	         '$injector', '$animate',
	function ($injector, $animate) {
	  var NO_TRANSITION = 'uib-noTransition',
	    SLIDE_DIRECTION = 'uib-slideDirection',
	    $animateCss = null;
	
	  if ($injector.has('$animateCss')) {
	    $animateCss = $injector.get('$animateCss');
	  }
	
	  function removeClass(element, className, callback) {
	    element.removeClass(className);
	    if (callback) {
	      callback();
	    }
	  }
	
	  return {
	    beforeAddClass: function (element, className, done) {
	      // Due to transclusion, noTransition property is on parent's scope
	      if (className == 'active' && element.parent() &&
	          !element.parent().data(NO_TRANSITION)) {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction == 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element,
	          directionClass + ' ' + direction, done);
	        element.addClass(direction);
	
	        if ($animateCss) {
	          $animateCss(element, {addClass: directionClass})
	            .start()
	            .done(removeClassFn);
	        } else {
	          $animate.addClass(element, directionClass).then(function () {
	            if (!stopped) {
	              removeClassFn();
	            }
	            done();
	          });
	        }
	
	        return function () {
	          stopped = true;
	        };
	      }
	      done();
	    },
	    beforeRemoveClass: function (element, className, done) {
	      // Due to transclusion, noTransition property is on parent's scope
	      if (className === 'active' && element.parent() &&
	          !element.parent().data(NO_TRANSITION)) {
	        var stopped = false;
	        var direction = element.data(SLIDE_DIRECTION);
	        var directionClass = direction == 'next' ? 'left' : 'right';
	        var removeClassFn = removeClass.bind(this, element, directionClass, done);
	
	        if ($animateCss) {
	          $animateCss(element, {addClass: directionClass})
	            .start()
	            .done(removeClassFn);
	        } else {
	          $animate.addClass(element, directionClass).then(function () {
	            if (!stopped) {
	              removeClassFn();
	            }
	            done();
	          });
	        }
	        return function () {
	          stopped = true;
	        };
	      }
	      done();
	    }
	  };
	
	}])
	
	
	;
	
	angular.module('ui.bootstrap.dateparser', [])
	
	.service('dateParser', ['$log', '$locale', 'orderByFilter', function($log, $locale, orderByFilter) {
	  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
	  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	
	  this.parsers = {};
	
	  var formatCodeToRegex = {
	    'yyyy': {
	      regex: '\\d{4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'yy': {
	      regex: '\\d{2}',
	      apply: function(value) { this.year = +value + 2000; }
	    },
	    'y': {
	      regex: '\\d{1,4}',
	      apply: function(value) { this.year = +value; }
	    },
	    'MMMM': {
	      regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
	    },
	    'MMM': {
	      regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
	      apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
	    },
	    'MM': {
	      regex: '0[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'M': {
	      regex: '[1-9]|1[0-2]',
	      apply: function(value) { this.month = value - 1; }
	    },
	    'dd': {
	      regex: '[0-2][0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'd': {
	      regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
	      apply: function(value) { this.date = +value; }
	    },
	    'EEEE': {
	      regex: $locale.DATETIME_FORMATS.DAY.join('|')
	    },
	    'EEE': {
	      regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
	    },
	    'HH': {
	      regex: '(?:0|1)[0-9]|2[0-3]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'hh': {
	      regex: '0[0-9]|1[0-2]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'H': {
	      regex: '1?[0-9]|2[0-3]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'h': {
	      regex: '[0-9]|1[0-2]',
	      apply: function(value) { this.hours = +value; }
	    },
	    'mm': {
	      regex: '[0-5][0-9]',
	      apply: function(value) { this.minutes = +value; }
	    },
	    'm': {
	      regex: '[0-9]|[1-5][0-9]',
	      apply: function(value) { this.minutes = +value; }
	    },
	    'sss': {
	      regex: '[0-9][0-9][0-9]',
	      apply: function(value) { this.milliseconds = +value; }
	    },
	    'ss': {
	      regex: '[0-5][0-9]',
	      apply: function(value) { this.seconds = +value; }
	    },
	    's': {
	      regex: '[0-9]|[1-5][0-9]',
	      apply: function(value) { this.seconds = +value; }
	    },
	    'a': {
	      regex: $locale.DATETIME_FORMATS.AMPMS.join('|'),
	      apply: function(value) {
	        if (this.hours === 12) {
	          this.hours = 0;
	        }
	
	        if (value === 'PM') {
	          this.hours += 12;
	        }
	      }
	    }
	  };
	
	  function createParser(format) {
	    var map = [], regex = format.split('');
	
	    angular.forEach(formatCodeToRegex, function(data, code) {
	      var index = format.indexOf(code);
	
	      if (index > -1) {
	        format = format.split('');
	
	        regex[index] = '(' + data.regex + ')';
	        format[index] = '$'; // Custom symbol to define consumed part of format
	        for (var i = index + 1, n = index + code.length; i < n; i++) {
	          regex[i] = '';
	          format[i] = '$';
	        }
	        format = format.join('');
	
	        map.push({ index: index, apply: data.apply });
	      }
	    });
	
	    return {
	      regex: new RegExp('^' + regex.join('') + '$'),
	      map: orderByFilter(map, 'index')
	    };
	  }
	
	  this.parse = function(input, format, baseDate) {
	    if (!angular.isString(input) || !format) {
	      return input;
	    }
	
	    format = $locale.DATETIME_FORMATS[format] || format;
	    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');
	
	    if (!this.parsers[format]) {
	      this.parsers[format] = createParser(format);
	    }
	
	    var parser = this.parsers[format],
	        regex = parser.regex,
	        map = parser.map,
	        results = input.match(regex);
	
	    if (results && results.length) {
	      var fields, dt;
	      if (angular.isDate(baseDate) && !isNaN(baseDate.getTime())) {
	        fields = {
	          year: baseDate.getFullYear(),
	          month: baseDate.getMonth(),
	          date: baseDate.getDate(),
	          hours: baseDate.getHours(),
	          minutes: baseDate.getMinutes(),
	          seconds: baseDate.getSeconds(),
	          milliseconds: baseDate.getMilliseconds()
	        };
	      } else {
	        if (baseDate) {
	          $log.warn('dateparser:', 'baseDate is not a valid date');
	        }
	        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
	      }
	
	      for (var i = 1, n = results.length; i < n; i++) {
	        var mapper = map[i-1];
	        if (mapper.apply) {
	          mapper.apply.call(fields, results[i]);
	        }
	      }
	
	      if (isValid(fields.year, fields.month, fields.date)) {
	        dt = new Date(fields.year, fields.month, fields.date,
	          fields.hours, fields.minutes, fields.seconds,
	          fields.milliseconds || 0);
	      }
	
	      return dt;
	    }
	  };
	
	  // Check if date is valid for specific month (and year for February).
	  // Month: 0 = Jan, 1 = Feb, etc
	  function isValid(year, month, date) {
	    if (date < 1) {
	      return false;
	    }
	
	    if (month === 1 && date > 28) {
	      return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	    }
	
	    if (month === 3 || month === 5 || month === 8 || month === 10) {
	      return date < 31;
	    }
	
	    return true;
	  }
	}]);
	
	angular.module('ui.bootstrap.position', [])
	
	/**
	 * A set of utility methods that can be use to retrieve position of DOM elements.
	 * It is meant to be used where we need to absolute-position DOM elements in
	 * relation to other, existing elements (this is the case for tooltips, popovers,
	 * typeahead suggestions etc.).
	 */
	  .factory('$position', ['$document', '$window', function($document, $window) {
	    function getStyle(el, cssprop) {
	      if (el.currentStyle) { //IE
	        return el.currentStyle[cssprop];
	      } else if ($window.getComputedStyle) {
	        return $window.getComputedStyle(el)[cssprop];
	      }
	      // finally try and get inline style
	      return el.style[cssprop];
	    }
	
	    /**
	     * Checks if a given element is statically positioned
	     * @param element - raw DOM element
	     */
	    function isStaticPositioned(element) {
	      return (getStyle(element, 'position') || 'static' ) === 'static';
	    }
	
	    /**
	     * returns the closest, non-statically positioned parentOffset of a given element
	     * @param element
	     */
	    var parentOffsetEl = function(element) {
	      var docDomEl = $document[0];
	      var offsetParent = element.offsetParent || docDomEl;
	      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
	        offsetParent = offsetParent.offsetParent;
	      }
	      return offsetParent || docDomEl;
	    };
	
	    return {
	      /**
	       * Provides read-only equivalent of jQuery's position function:
	       * http://api.jquery.com/position/
	       */
	      position: function(element) {
	        var elBCR = this.offset(element);
	        var offsetParentBCR = { top: 0, left: 0 };
	        var offsetParentEl = parentOffsetEl(element[0]);
	        if (offsetParentEl != $document[0]) {
	          offsetParentBCR = this.offset(angular.element(offsetParentEl));
	          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
	          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
	        }
	
	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: elBCR.top - offsetParentBCR.top,
	          left: elBCR.left - offsetParentBCR.left
	        };
	      },
	
	      /**
	       * Provides read-only equivalent of jQuery's offset function:
	       * http://api.jquery.com/offset/
	       */
	      offset: function(element) {
	        var boundingClientRect = element[0].getBoundingClientRect();
	        return {
	          width: boundingClientRect.width || element.prop('offsetWidth'),
	          height: boundingClientRect.height || element.prop('offsetHeight'),
	          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
	          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
	        };
	      },
	
	      /**
	       * Provides coordinates for the targetEl in relation to hostEl
	       */
	      positionElements: function(hostEl, targetEl, positionStr, appendToBody) {
	        var positionStrParts = positionStr.split('-');
	        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';
	
	        var hostElPos,
	          targetElWidth,
	          targetElHeight,
	          targetElPos;
	
	        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
	
	        targetElWidth = targetEl.prop('offsetWidth');
	        targetElHeight = targetEl.prop('offsetHeight');
	
	        var shiftWidth = {
	          center: function() {
	            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
	          },
	          left: function() {
	            return hostElPos.left;
	          },
	          right: function() {
	            return hostElPos.left + hostElPos.width;
	          }
	        };
	
	        var shiftHeight = {
	          center: function() {
	            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
	          },
	          top: function() {
	            return hostElPos.top;
	          },
	          bottom: function() {
	            return hostElPos.top + hostElPos.height;
	          }
	        };
	
	        switch (pos0) {
	          case 'right':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: shiftWidth[pos0]()
	            };
	            break;
	          case 'left':
	            targetElPos = {
	              top: shiftHeight[pos1](),
	              left: hostElPos.left - targetElWidth
	            };
	            break;
	          case 'bottom':
	            targetElPos = {
	              top: shiftHeight[pos0](),
	              left: shiftWidth[pos1]()
	            };
	            break;
	          default:
	            targetElPos = {
	              top: hostElPos.top - targetElHeight,
	              left: shiftWidth[pos1]()
	            };
	            break;
	        }
	
	        return targetElPos;
	      }
	    };
	  }]);
	
	angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])
	
	.value('$datepickerSuppressError', false)
	
	.constant('datepickerConfig', {
	  formatDay: 'dd',
	  formatMonth: 'MMMM',
	  formatYear: 'yyyy',
	  formatDayHeader: 'EEE',
	  formatDayTitle: 'MMMM yyyy',
	  formatMonthTitle: 'yyyy',
	  datepickerMode: 'day',
	  minMode: 'day',
	  maxMode: 'year',
	  showWeeks: true,
	  startingDay: 0,
	  yearRange: 20,
	  minDate: null,
	  maxDate: null,
	  shortcutPropagation: false
	})
	
	.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$log', 'dateFilter', 'datepickerConfig', '$datepickerSuppressError', function($scope, $attrs, $parse, $interpolate, $log, dateFilter, datepickerConfig, $datepickerSuppressError) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;
	
	  // Modes chain
	  this.modes = ['day', 'month', 'year'];
	
	  // Configuration attributes
	  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
	                   'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function(key, index) {
	    self[key] = angular.isDefined($attrs[key]) ? (index < 6 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
	  });
	
	  // Watchable date attributes
	  angular.forEach(['minDate', 'maxDate'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = value ? new Date(value) : null;
	        self.refreshView();
	      });
	    } else {
	      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
	    }
	  });
	
	  angular.forEach(['minMode', 'maxMode'], function(key) {
	    if ($attrs[key]) {
	      $scope.$parent.$watch($parse($attrs[key]), function(value) {
	        self[key] = angular.isDefined(value) ? value : $attrs[key];
	        $scope[key] = self[key];
	        if ((key == 'minMode' && self.modes.indexOf($scope.datepickerMode) < self.modes.indexOf(self[key])) || (key == 'maxMode' && self.modes.indexOf($scope.datepickerMode) > self.modes.indexOf(self[key]))) {
	          $scope.datepickerMode = self[key];
	        }
	      });
	    } else {
	      self[key] = datepickerConfig[key] || null;
	      $scope[key] = self[key];
	    }
	  });
	
	  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
	  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
	
	  if (angular.isDefined($attrs.initDate)) {
	    this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
	    $scope.$parent.$watch($attrs.initDate, function(initDate) {
	      if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
	        self.activeDate = initDate;
	        self.refreshView();
	      }
	    });
	  } else {
	    this.activeDate = new Date();
	  }
	
	  $scope.isActive = function(dateObject) {
	    if (self.compare(dateObject.date, self.activeDate) === 0) {
	      $scope.activeDateId = dateObject.uid;
	      return true;
	    }
	    return false;
	  };
	
	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	
	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	  };
	
	  this.render = function() {
	    if (ngModelCtrl.$viewValue) {
	      var date = new Date(ngModelCtrl.$viewValue),
	          isValid = !isNaN(date);
	
	      if (isValid) {
	        this.activeDate = date;
	      } else if (!$datepickerSuppressError) {
	        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	      }
	    }
	    this.refreshView();
	  };
	
	  this.refreshView = function() {
	    if (this.element) {
	      this._refreshView();
	
	      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	      ngModelCtrl.$setValidity('dateDisabled', !date || (this.element && !this.isDisabled(date)));
	    }
	  };
	
	  this.createDateObject = function(date, format) {
	    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
	    return {
	      date: date,
	      label: dateFilter(date, format),
	      selected: model && this.compare(date, model) === 0,
	      disabled: this.isDisabled(date),
	      current: this.compare(date, new Date()) === 0,
	      customClass: this.customClass(date)
	    };
	  };
	
	  this.isDisabled = function(date) {
	    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
	  };
	
	  this.customClass = function(date) {
	    return $scope.customClass({date: date, mode: $scope.datepickerMode});
	  };
	
	  // Split array into smaller arrays
	  this.split = function(arr, size) {
	    var arrays = [];
	    while (arr.length > 0) {
	      arrays.push(arr.splice(0, size));
	    }
	    return arrays;
	  };
	
	  // Fix a hard-reprodusible bug with timezones
	  // The bug depends on OS, browser, current timezone and current date
	  // i.e.
	  // var date = new Date(2014, 0, 1);
	  // console.log(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
	  // can result in "2013 11 31 23" because of the bug.
	  this.fixTimeZone = function(date) {
	    var hours = date.getHours();
	    date.setHours(hours === 23 ? hours + 2 : 0);
	  };
	
	  $scope.select = function(date) {
	    if ($scope.datepickerMode === self.minMode) {
	      var dt = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : new Date(0, 0, 0, 0, 0, 0, 0);
	      dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	      ngModelCtrl.$setViewValue(dt);
	      ngModelCtrl.$render();
	    } else {
	      self.activeDate = date;
	      $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
	    }
	  };
	
	  $scope.move = function(direction) {
	    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
	        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
	    self.activeDate.setFullYear(year, month, 1);
	    self.refreshView();
	  };
	
	  $scope.toggleMode = function(direction) {
	    direction = direction || 1;
	
	    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
	      return;
	    }
	
	    $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
	  };
	
	  // Key event mapper
	  $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };
	
	  var focusElement = function() {
	    self.element[0].focus();
	  };
	
	  // Listen for focus requests from popup directive
	  $scope.$on('datepicker.focus', focusElement);
	
	  $scope.keydown = function(evt) {
	    var key = $scope.keys[evt.which];
	
	    if (!key || evt.shiftKey || evt.altKey) {
	      return;
	    }
	
	    evt.preventDefault();
	    if (!self.shortcutPropagation) {
	      evt.stopPropagation();
	    }
	
	    if (key === 'enter' || key === 'space') {
	      if (self.isDisabled(self.activeDate)) {
	        return; // do nothing
	      }
	      $scope.select(self.activeDate);
	      focusElement();
	    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
	      $scope.toggleMode(key === 'up' ? 1 : -1);
	      focusElement();
	    } else {
	      self.handleKeyDown(key, evt);
	      self.refreshView();
	    }
	  };
	}])
	
	.directive('datepicker', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/datepicker.html';
	    },
	    scope: {
	      datepickerMode: '=?',
	      dateDisabled: '&',
	      customClass: '&',
	      shortcutPropagation: '&?'
	    },
	    require: ['datepicker', '^ngModel'],
	    controller: 'DatepickerController',
	    controllerAs: 'datepicker',
	    link: function(scope, element, attrs, ctrls) {
	      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      datepickerCtrl.init(ngModelCtrl);
	    }
	  };
	})
	
	.directive('daypicker', ['dateFilter', function(dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/day.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      scope.showWeeks = ctrl.showWeeks;
	
	      ctrl.step = { months: 1 };
	      ctrl.element = element;
	
	      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      function getDaysInMonth(year, month) {
	        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
	      }
	
	      function getDates(startDate, n) {
	        var dates = new Array(n), current = new Date(startDate), i = 0, date;
	        while (i < n) {
	          date = new Date(current);
	          ctrl.fixTimeZone(date);
	          dates[i++] = date;
	          current.setDate(current.getDate() + 1);
	        }
	        return dates;
	      }
	
	      ctrl._refreshView = function() {
	        var year = ctrl.activeDate.getFullYear(),
	          month = ctrl.activeDate.getMonth(),
	          firstDayOfMonth = new Date(year, month, 1),
	          difference = ctrl.startingDay - firstDayOfMonth.getDay(),
	          numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
	          firstDate = new Date(firstDayOfMonth);
	
	        if (numDisplayedFromPreviousMonth > 0) {
	          firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
	        }
	
	        // 42 is the number of days on a six-month calendar
	        var days = getDates(firstDate, 42);
	        for (var i = 0; i < 42; i ++) {
	          days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
	            secondary: days[i].getMonth() !== month,
	            uid: scope.uniqueId + '-' + i
	          });
	        }
	
	        scope.labels = new Array(7);
	        for (var j = 0; j < 7; j++) {
	          scope.labels[j] = {
	            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
	            full: dateFilter(days[j].date, 'EEEE')
	          };
	        }
	
	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
	        scope.rows = ctrl.split(days, 7);
	
	        if (scope.showWeeks) {
	          scope.weekNumbers = [];
	          var thursdayIndex = (4 + 7 - ctrl.startingDay) % 7,
	              numWeeks = scope.rows.length;
	          for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
	            scope.weekNumbers.push(
	              getISO8601WeekNumber(scope.rows[curWeek][thursdayIndex].date));
	          }
	        }
	      };
	
	      ctrl.compare = function(date1, date2) {
	        return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
	      };
	
	      function getISO8601WeekNumber(date) {
	        var checkDate = new Date(date);
	        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
	        var time = checkDate.getTime();
	        checkDate.setMonth(0); // Compare with Jan 1
	        checkDate.setDate(1);
	        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	      }
	
	      ctrl.handleKeyDown = function(key, evt) {
	        var date = ctrl.activeDate.getDate();
	
	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 7;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 7;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setMonth(month, 1);
	          date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
	        } else if (key === 'home') {
	          date = 1;
	        } else if (key === 'end') {
	          date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
	        }
	        ctrl.activeDate.setDate(date);
	      };
	
	      ctrl.refreshView();
	    }
	  };
	}])
	
	.directive('monthpicker', ['dateFilter', function(dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/month.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      ctrl.step = { years: 1 };
	      ctrl.element = element;
	
	      ctrl._refreshView = function() {
	        var months = new Array(12),
	            year = ctrl.activeDate.getFullYear(),
	            date;
	
	        for (var i = 0; i < 12; i++) {
	          date = new Date(year, i, 1);
	          ctrl.fixTimeZone(date);
	          months[i] = angular.extend(ctrl.createDateObject(date, ctrl.formatMonth), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }
	
	        scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
	        scope.rows = ctrl.split(months, 3);
	      };
	
	      ctrl.compare = function(date1, date2) {
	        return new Date(date1.getFullYear(), date1.getMonth()) - new Date(date2.getFullYear(), date2.getMonth());
	      };
	
	      ctrl.handleKeyDown = function(key, evt) {
	        var date = ctrl.activeDate.getMonth();
	
	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 3;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 3;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
	          ctrl.activeDate.setFullYear(year);
	        } else if (key === 'home') {
	          date = 0;
	        } else if (key === 'end') {
	          date = 11;
	        }
	        ctrl.activeDate.setMonth(date);
	      };
	
	      ctrl.refreshView();
	    }
	  };
	}])
	
	.directive('yearpicker', ['dateFilter', function(dateFilter) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/datepicker/year.html',
	    require: '^datepicker',
	    link: function(scope, element, attrs, ctrl) {
	      var range = ctrl.yearRange;
	
	      ctrl.step = { years: range };
	      ctrl.element = element;
	
	      function getStartingYear( year ) {
	        return parseInt((year - 1) / range, 10) * range + 1;
	      }
	
	      ctrl._refreshView = function() {
	        var years = new Array(range), date;
	
	        for (var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++) {
	          date = new Date(start + i, 0, 1);
	          ctrl.fixTimeZone(date);
	          years[i] = angular.extend(ctrl.createDateObject(date, ctrl.formatYear), {
	            uid: scope.uniqueId + '-' + i
	          });
	        }
	
	        scope.title = [years[0].label, years[range - 1].label].join(' - ');
	        scope.rows = ctrl.split(years, 5);
	      };
	
	      ctrl.compare = function(date1, date2) {
	        return date1.getFullYear() - date2.getFullYear();
	      };
	
	      ctrl.handleKeyDown = function(key, evt) {
	        var date = ctrl.activeDate.getFullYear();
	
	        if (key === 'left') {
	          date = date - 1;   // up
	        } else if (key === 'up') {
	          date = date - 5;   // down
	        } else if (key === 'right') {
	          date = date + 1;   // down
	        } else if (key === 'down') {
	          date = date + 5;
	        } else if (key === 'pageup' || key === 'pagedown') {
	          date += (key === 'pageup' ? - 1 : 1) * ctrl.step.years;
	        } else if (key === 'home') {
	          date = getStartingYear(ctrl.activeDate.getFullYear());
	        } else if (key === 'end') {
	          date = getStartingYear(ctrl.activeDate.getFullYear()) + range - 1;
	        }
	        ctrl.activeDate.setFullYear(date);
	      };
	
	      ctrl.refreshView();
	    }
	  };
	}])
	
	.constant('datepickerPopupConfig', {
	  datepickerPopup: 'yyyy-MM-dd',
	  datepickerPopupTemplateUrl: 'template/datepicker/popup.html',
	  datepickerTemplateUrl: 'template/datepicker/datepicker.html',
	  html5Types: {
	    date: 'yyyy-MM-dd',
	    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
	    'month': 'yyyy-MM'
	  },
	  currentText: 'Today',
	  clearText: 'Clear',
	  closeText: 'Done',
	  closeOnDateSelection: true,
	  appendToBody: false,
	  showButtonBar: true,
	  onOpenFocus: true
	})
	
	.directive('datepickerPopup', ['$compile', '$parse', '$document', '$rootScope', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig', '$timeout',
	function($compile, $parse, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout) {
	  return {
	    restrict: 'EA',
	    require: 'ngModel',
	    scope: {
	      isOpen: '=?',
	      currentText: '@',
	      clearText: '@',
	      closeText: '@',
	      dateDisabled: '&',
	      customClass: '&'
	    },
	    link: function(scope, element, attrs, ngModel) {
	      var dateFormat,
	          closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
	          appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody,
	          onOpenFocus = angular.isDefined(attrs.onOpenFocus) ? scope.$parent.$eval(attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus,
	          datepickerPopupTemplateUrl = angular.isDefined(attrs.datepickerPopupTemplateUrl) ? attrs.datepickerPopupTemplateUrl : datepickerPopupConfig.datepickerPopupTemplateUrl,
	          datepickerTemplateUrl = angular.isDefined(attrs.datepickerTemplateUrl) ? attrs.datepickerTemplateUrl : datepickerPopupConfig.datepickerTemplateUrl,
	          cache = {};
	
	      scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
	
	      scope.getText = function(key) {
	        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
	      };
	
	      scope.isDisabled = function(date) {
	        if (date === 'today') {
	          date = new Date();
	        }
	
	        return ((scope.watchData.minDate && scope.compare(date, cache.minDate) < 0) ||
	          (scope.watchData.maxDate && scope.compare(date, cache.maxDate) > 0));
	      };
	
	      scope.compare = function(date1, date2) {
	        return (new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate()));
	      };
	
	      var isHtml5DateInput = false;
	      if (datepickerPopupConfig.html5Types[attrs.type]) {
	        dateFormat = datepickerPopupConfig.html5Types[attrs.type];
	        isHtml5DateInput = true;
	      } else {
	        dateFormat = attrs.datepickerPopup || datepickerPopupConfig.datepickerPopup;
	        attrs.$observe('datepickerPopup', function(value, oldValue) {
	            var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
	            // Invalidate the $modelValue to ensure that formatters re-run
	            // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
	            if (newDateFormat !== dateFormat) {
	              dateFormat = newDateFormat;
	              ngModel.$modelValue = null;
	
	              if (!dateFormat) {
	                throw new Error('datepickerPopup must have a date format specified.');
	              }
	            }
	        });
	      }
	
	      if (!dateFormat) {
	        throw new Error('datepickerPopup must have a date format specified.');
	      }
	
	      if (isHtml5DateInput && attrs.datepickerPopup) {
	        throw new Error('HTML5 date input types do not support custom formats.');
	      }
	
	      // popup element used to display calendar
	      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
	      popupEl.attr({
	        'ng-model': 'date',
	        'ng-change': 'dateSelection(date)',
	        'template-url': datepickerPopupTemplateUrl
	      });
	
	      function cameltoDash(string) {
	        return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
	      }
	
	      // datepicker element
	      var datepickerEl = angular.element(popupEl.children()[0]);
	      datepickerEl.attr('template-url', datepickerTemplateUrl);
	
	      if (isHtml5DateInput) {
	        if (attrs.type === 'month') {
	          datepickerEl.attr('datepicker-mode', '"month"');
	          datepickerEl.attr('min-mode', 'month');
	        }
	      }
	
	      if (attrs.datepickerOptions) {
	        var options = scope.$parent.$eval(attrs.datepickerOptions);
	        if (options && options.initDate) {
	          scope.initDate = options.initDate;
	          datepickerEl.attr('init-date', 'initDate');
	          delete options.initDate;
	        }
	        angular.forEach(options, function(value, option) {
	          datepickerEl.attr( cameltoDash(option), value );
	        });
	      }
	
	      scope.watchData = {};
	      angular.forEach(['minMode', 'maxMode', 'minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation'], function(key) {
	        if (attrs[key]) {
	          var getAttribute = $parse(attrs[key]);
	          scope.$parent.$watch(getAttribute, function(value) {
	            scope.watchData[key] = value;
	            if (key === 'minDate' || key === 'maxDate') {
	              cache[key] = new Date(value);
	            }
	          });
	          datepickerEl.attr(cameltoDash(key), 'watchData.' + key);
	
	          // Propagate changes from datepicker to outside
	          if (key === 'datepickerMode') {
	            var setAttribute = getAttribute.assign;
	            scope.$watch('watchData.' + key, function(value, oldvalue) {
	              if (angular.isFunction(setAttribute) && value !== oldvalue) {
	                setAttribute(scope.$parent, value);
	              }
	            });
	          }
	        }
	      });
	      if (attrs.dateDisabled) {
	        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
	      }
	
	      if (attrs.showWeeks) {
	        datepickerEl.attr('show-weeks', attrs.showWeeks);
	      }
	
	      if (attrs.customClass) {
	        datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
	      }
	
	      function parseDate(viewValue) {
	        if (angular.isNumber(viewValue)) {
	          // presumably timestamp to date object
	          viewValue = new Date(viewValue);
	        }
	
	        if (!viewValue) {
	          return null;
	        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
	          return viewValue;
	        } else if (angular.isString(viewValue)) {
	          var date = dateParser.parse(viewValue, dateFormat, scope.date);
	          if (isNaN(date)) {
	            return undefined;
	          } else {
	            return date;
	          }
	        } else {
	          return undefined;
	        }
	      }
	
	      function validator(modelValue, viewValue) {
	        var value = modelValue || viewValue;
	
	        if (!attrs.ngRequired && !value) {
	          return true;
	        }
	
	        if (angular.isNumber(value)) {
	          value = new Date(value);
	        }
	        if (!value) {
	          return true;
	        } else if (angular.isDate(value) && !isNaN(value)) {
	          return true;
	        } else if (angular.isString(value)) {
	          var date = dateParser.parse(value, dateFormat);
	          return !isNaN(date);
	        } else {
	          return false;
	        }
	      }
	
	      if (!isHtml5DateInput) {
	        // Internal API to maintain the correct ng-invalid-[key] class
	        ngModel.$$parserName = 'date';
	        ngModel.$validators.date = validator;
	        ngModel.$parsers.unshift(parseDate);
	        ngModel.$formatters.push(function(value) {
	          scope.date = value;
	          return ngModel.$isEmpty(value) ? value : dateFilter(value, dateFormat);
	        });
	      } else {
	        ngModel.$formatters.push(function(value) {
	          scope.date = value;
	          return value;
	        });
	      }
	
	      // Inner change
	      scope.dateSelection = function(dt) {
	        if (angular.isDefined(dt)) {
	          scope.date = dt;
	        }
	        var date = scope.date ? dateFilter(scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
	        element.val(date);
	        ngModel.$setViewValue(date);
	
	        if (closeOnDateSelection) {
	          scope.isOpen = false;
	          element[0].focus();
	        }
	      };
	
	      // Detect changes in the view from the text box
	      ngModel.$viewChangeListeners.push(function() {
	        scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date);
	      });
	
	      var documentClickBind = function(event) {
	        if (scope.isOpen && !(element[0].contains(event.target) || popupEl[0].contains(event.target))) {
	          scope.$apply(function() {
	            scope.isOpen = false;
	          });
	        }
	      };
	
	      var inputKeydownBind = function(evt) {
	        if (evt.which === 27 && scope.isOpen) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          scope.$apply(function() {
	            scope.isOpen = false;
	          });
	          element[0].focus();
	        } else if (evt.which === 40 && !scope.isOpen) {
	          evt.preventDefault();
	          evt.stopPropagation();
	          scope.$apply(function() {
	            scope.isOpen = true;
	          });
	        }
	      };
	      element.bind('keydown', inputKeydownBind);
	
	      scope.keydown = function(evt) {
	        if (evt.which === 27) {
	          scope.isOpen = false;
	          element[0].focus();
	        }
	      };
	
	      scope.$watch('isOpen', function(value) {
	        if (value) {
	          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	          scope.position.top = scope.position.top + element.prop('offsetHeight');
	
	          $timeout(function() {
	            if (onOpenFocus) {
	              scope.$broadcast('datepicker.focus');
	            }
	            $document.bind('click', documentClickBind);
	          }, 0, false);
	        } else {
	          $document.unbind('click', documentClickBind);
	        }
	      });
	
	      scope.select = function(date) {
	        if (date === 'today') {
	          var today = new Date();
	          if (angular.isDate(scope.date)) {
	            date = new Date(scope.date);
	            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
	          } else {
	            date = new Date(today.setHours(0, 0, 0, 0));
	          }
	        }
	        scope.dateSelection(date);
	      };
	
	      scope.close = function() {
	        scope.isOpen = false;
	        element[0].focus();
	      };
	
	      var $popup = $compile(popupEl)(scope);
	      // Prevent jQuery cache memory leak (template is now redundant after linking)
	      popupEl.remove();
	
	      if (appendToBody) {
	        $document.find('body').append($popup);
	      } else {
	        element.after($popup);
	      }
	
	      scope.$on('$destroy', function() {
	        if (scope.isOpen === true) {
	          if (!$rootScope.$$phase) {
	            scope.$apply(function() {
	              scope.isOpen = false;
	            });
	          }
	        }
	
	        $popup.remove();
	        element.unbind('keydown', inputKeydownBind);
	        $document.unbind('click', documentClickBind);
	      });
	    }
	  };
	}])
	
	.directive('datepickerPopupWrap', function() {
	  return {
	    restrict:'EA',
	    replace: true,
	    transclude: true,
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/datepicker/popup.html';
	    }
	  };
	});
	
	angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])
	
	.constant('dropdownConfig', {
	  openClass: 'open'
	})
	
	.service('dropdownService', ['$document', '$rootScope', function($document, $rootScope) {
	  var openScope = null;
	
	  this.open = function(dropdownScope) {
	    if (!openScope) {
	      $document.bind('click', closeDropdown);
	      $document.bind('keydown', keybindFilter);
	    }
	
	    if (openScope && openScope !== dropdownScope) {
	      openScope.isOpen = false;
	    }
	
	    openScope = dropdownScope;
	  };
	
	  this.close = function(dropdownScope) {
	    if (openScope === dropdownScope) {
	      openScope = null;
	      $document.unbind('click', closeDropdown);
	      $document.unbind('keydown', keybindFilter);
	    }
	  };
	
	  var closeDropdown = function(evt) {
	    // This method may still be called during the same mouse event that
	    // unbound this event handler. So check openScope before proceeding.
	    if (!openScope) { return; }
	
	    if (evt && openScope.getAutoClose() === 'disabled')  { return ; }
	
	    var toggleElement = openScope.getToggleElement();
	    if (evt && toggleElement && toggleElement[0].contains(evt.target)) {
	      return;
	    }
	
	    var dropdownElement = openScope.getDropdownElement();
	    if (evt && openScope.getAutoClose() === 'outsideClick' &&
	      dropdownElement && dropdownElement[0].contains(evt.target)) {
	      return;
	    }
	
	    openScope.isOpen = false;
	
	    if (!$rootScope.$$phase) {
	      openScope.$apply();
	    }
	  };
	
	  var keybindFilter = function(evt) {
	    if (evt.which === 27) {
	      openScope.focusToggleElement();
	      closeDropdown();
	    } else if (openScope.isKeynavEnabled() && /(38|40)/.test(evt.which) && openScope.isOpen) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      openScope.focusDropdownEntry(evt.which);
	    }
	  };
	}])
	
	.controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', '$position', '$document', '$compile', '$templateRequest', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate, $position, $document, $compile, $templateRequest) {
	  var self = this,
	    scope = $scope.$new(), // create a child scope so we are not polluting original one
	    templateScope,
	    openClass = dropdownConfig.openClass,
	    getIsOpen,
	    setIsOpen = angular.noop,
	    toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
	    appendToBody = false,
	    keynavEnabled = false,
	    selectedOption = null,
	    body = $document.find('body');
	
	  this.init = function(element) {
	    self.$element = element;
	
	    if ($attrs.isOpen) {
	      getIsOpen = $parse($attrs.isOpen);
	      setIsOpen = getIsOpen.assign;
	
	      $scope.$watch(getIsOpen, function(value) {
	        scope.isOpen = !!value;
	      });
	    }
	
	    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);
	    keynavEnabled = angular.isDefined($attrs.keyboardNav);
	
	    if (appendToBody && self.dropdownMenu) {
	      body.append(self.dropdownMenu);
	      body.addClass('dropdown');
	      element.on('$destroy', function handleDestroyEvent() {
	        self.dropdownMenu.remove();
	      });
	    }
	  };
	
	  this.toggle = function(open) {
	    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
	  };
	
	  // Allow other directives to watch status
	  this.isOpen = function() {
	    return scope.isOpen;
	  };
	
	  scope.getToggleElement = function() {
	    return self.toggleElement;
	  };
	
	  scope.getAutoClose = function() {
	    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
	  };
	
	  scope.getElement = function() {
	    return self.$element;
	  };
	
	  scope.isKeynavEnabled = function() {
	    return keynavEnabled;
	  };
	
	  scope.focusDropdownEntry = function(keyCode) {
	    var elems = self.dropdownMenu ? //If append to body is used.
	      (angular.element(self.dropdownMenu).find('a')) :
	      (angular.element(self.$element).find('ul').eq(0).find('a'));
	
	    switch (keyCode) {
	      case (40): {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = 0;
	        } else {
	          self.selectedOption = (self.selectedOption === elems.length -1 ?
	            self.selectedOption :
	            self.selectedOption + 1);
	        }
	        break;
	      }
	      case (38): {
	        if (!angular.isNumber(self.selectedOption)) {
	          self.selectedOption = elems.length - 1;
	        } else {
	          self.selectedOption = self.selectedOption === 0 ?
	            0 : self.selectedOption - 1;
	        }
	        break;
	      }
	    }
	    elems[self.selectedOption].focus();
	  };
	
	  scope.getDropdownElement = function() {
	    return self.dropdownMenu;
	  };
	
	  scope.focusToggleElement = function() {
	    if (self.toggleElement) {
	      self.toggleElement[0].focus();
	    }
	  };
	
	  scope.$watch('isOpen', function(isOpen, wasOpen) {
	    if (appendToBody && self.dropdownMenu) {
	      var pos = $position.positionElements(self.$element, self.dropdownMenu, 'bottom-left', true);
	      var css = {
	        top: pos.top + 'px',
	        display: isOpen ? 'block' : 'none'
	      };
	
	      var rightalign = self.dropdownMenu.hasClass('dropdown-menu-right');
	      if (!rightalign) {
	        css.left = pos.left + 'px';
	        css.right = 'auto';
	      } else {
	        css.left = 'auto';
	        css.right = (window.innerWidth - (pos.left + self.$element.prop('offsetWidth'))) + 'px';
	      }
	
	      self.dropdownMenu.css(css);
	    }
	
	    var openContainer = appendToBody ? body : self.$element;
	
	    $animate[isOpen ? 'addClass' : 'removeClass'](openContainer, openClass).then(function() {
	      if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
	        toggleInvoker($scope, { open: !!isOpen });
	      }
	    });
	
	    if (isOpen) {
	      if (self.dropdownMenuTemplateUrl) {
	        $templateRequest(self.dropdownMenuTemplateUrl).then(function(tplContent) {
	          templateScope = scope.$new();
	          $compile(tplContent.trim())(templateScope, function(dropdownElement) {
	            var newEl = dropdownElement;
	            self.dropdownMenu.replaceWith(newEl);
	            self.dropdownMenu = newEl;
	          });
	        });
	      }
	
	      scope.focusToggleElement();
	      dropdownService.open(scope);
	    } else {
	      if (self.dropdownMenuTemplateUrl) {
	        if (templateScope) {
	          templateScope.$destroy();
	        }
	        var newEl = angular.element('<ul class="dropdown-menu"></ul>');
	        self.dropdownMenu.replaceWith(newEl);
	        self.dropdownMenu = newEl;
	      }
	
	      dropdownService.close(scope);
	      self.selectedOption = null;
	    }
	
	    if (angular.isFunction(setIsOpen)) {
	      setIsOpen($scope, isOpen);
	    }
	  });
	
	  $scope.$on('$locationChangeSuccess', function() {
	    if (scope.getAutoClose() !== 'disabled') {
	      scope.isOpen = false;
	    }
	  });
	
	  var offDestroy = $scope.$on('$destroy', function() {
	    scope.$destroy();
	  });
	  scope.$on('$destroy', offDestroy);
	}])
	
	.directive('dropdown', function() {
	  return {
	    controller: 'DropdownController',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      dropdownCtrl.init( element );
	      element.addClass('dropdown');
	    }
	  };
	})
	
	.directive('dropdownMenu', function() {
	  return {
	    restrict: 'AC',
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }
	      var tplUrl = attrs.templateUrl;
	      if (tplUrl) {
	        dropdownCtrl.dropdownMenuTemplateUrl = tplUrl;
	      }
	      if (!dropdownCtrl.dropdownMenu) {
	        dropdownCtrl.dropdownMenu = element;
	      }
	    }
	  };
	})
	
	.directive('keyboardNav', function() {
	  return {
	    restrict: 'A',
	    require: '?^dropdown',
	    link: function (scope, element, attrs, dropdownCtrl) {
	
	      element.bind('keydown', function(e) {
	        if ([38, 40].indexOf(e.which) !== -1) {
	          e.preventDefault();
	          e.stopPropagation();
	
	          var elems = dropdownCtrl.dropdownMenu.find('a');
	
	          switch (e.which) {
	            case (40): { // Down
	              if (!angular.isNumber(dropdownCtrl.selectedOption)) {
	                dropdownCtrl.selectedOption = 0;
	              } else {
	                dropdownCtrl.selectedOption = dropdownCtrl.selectedOption === elems.length -1 ?
	                  dropdownCtrl.selectedOption : dropdownCtrl.selectedOption + 1;
	              }
	              break;
	            }
	            case (38): { // Up
	              if (!angular.isNumber(dropdownCtrl.selectedOption)) {
	                dropdownCtrl.selectedOption = elems.length - 1;
	              } else {
	                dropdownCtrl.selectedOption = dropdownCtrl.selectedOption === 0 ?
	                  0 : dropdownCtrl.selectedOption - 1;
	              }
	              break;
	            }
	          }
	          elems[dropdownCtrl.selectedOption].focus();
	        }
	      });
	    }
	  };
	})
	
	.directive('dropdownToggle', function() {
	  return {
	    require: '?^dropdown',
	    link: function(scope, element, attrs, dropdownCtrl) {
	      if (!dropdownCtrl) {
	        return;
	      }
	
	      element.addClass('dropdown-toggle');
	
	      dropdownCtrl.toggleElement = element;
	
	      var toggleDropdown = function(event) {
	        event.preventDefault();
	
	        if (!element.hasClass('disabled') && !attrs.disabled) {
	          scope.$apply(function() {
	            dropdownCtrl.toggle();
	          });
	        }
	      };
	
	      element.bind('click', toggleDropdown);
	
	      // WAI-ARIA
	      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
	      scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
	        element.attr('aria-expanded', !!isOpen);
	      });
	
	      scope.$on('$destroy', function() {
	        element.unbind('click', toggleDropdown);
	      });
	    }
	  };
	});
	
	angular.module('ui.bootstrap.modal', [])
	
	/**
	 * A helper, internal data structure that acts as a map but also allows getting / removing
	 * elements in the LIFO order
	 */
	  .factory('$$stackedMap', function() {
	    return {
	      createNew: function() {
	        var stack = [];
	
	        return {
	          add: function(key, value) {
	            stack.push({
	              key: key,
	              value: value
	            });
	          },
	          get: function(key) {
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                return stack[i];
	              }
	            }
	          },
	          keys: function() {
	            var keys = [];
	            for (var i = 0; i < stack.length; i++) {
	              keys.push(stack[i].key);
	            }
	            return keys;
	          },
	          top: function() {
	            return stack[stack.length - 1];
	          },
	          remove: function(key) {
	            var idx = -1;
	            for (var i = 0; i < stack.length; i++) {
	              if (key == stack[i].key) {
	                idx = i;
	                break;
	              }
	            }
	            return stack.splice(idx, 1)[0];
	          },
	          removeTop: function() {
	            return stack.splice(stack.length - 1, 1)[0];
	          },
	          length: function() {
	            return stack.length;
	          }
	        };
	      }
	    };
	  })
	
	/**
	 * A helper, internal data structure that stores all references attached to key
	 */
	  .factory('$$multiMap', function() {
	    return {
	      createNew: function() {
	        var map = {};
	
	        return {
	          entries: function() {
	            return Object.keys(map).map(function(key) {
	              return {
	                key: key,
	                value: map[key]
	              };
	            });
	          },
	          get: function(key) {
	            return map[key];
	          },
	          hasKey: function(key) {
	            return !!map[key];
	          },
	          keys: function() {
	            return Object.keys(map);
	          },
	          put: function(key, value) {
	            if (!map[key]) {
	              map[key] = [];
	            }
	
	            map[key].push(value);
	          },
	          remove: function(key, value) {
	            var values = map[key];
	
	            if (!values) {
	              return;
	            }
	
	            var idx = values.indexOf(value);
	
	            if (idx !== -1) {
	              values.splice(idx, 1);
	            }
	
	            if (!values.length) {
	              delete map[key];
	            }
	          }
	        };
	      }
	    };
	  })
	
	/**
	 * A helper directive for the $modal service. It creates a backdrop element.
	 */
	  .directive('modalBackdrop', [
	           '$animate', '$injector', '$modalStack',
	  function($animate ,  $injector,   $modalStack) {
	    var $animateCss = null;
	
	    if ($injector.has('$animateCss')) {
	      $animateCss = $injector.get('$animateCss');
	    }
	
	    return {
	      restrict: 'EA',
	      replace: true,
	      templateUrl: 'template/modal/backdrop.html',
	      compile: function(tElement, tAttrs) {
	        tElement.addClass(tAttrs.backdropClass);
	        return linkFn;
	      }
	    };
	
	    function linkFn(scope, element, attrs) {
	      if (attrs.modalInClass) {
	        if ($animateCss) {
	          $animateCss(element, {
	            addClass: attrs.modalInClass
	          }).start();
	        } else {
	          $animate.addClass(element, attrs.modalInClass);
	        }
	
	        scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	          var done = setIsAsync();
	          if ($animateCss) {
	            $animateCss(element, {
	              removeClass: attrs.modalInClass
	            }).start().then(done);
	          } else {
	            $animate.removeClass(element, attrs.modalInClass).then(done);
	          }
	        });
	      }
	    }
	  }])
	
	  .directive('modalWindow', [
	           '$modalStack', '$q', '$animate', '$injector',
	  function($modalStack ,  $q ,  $animate,   $injector) {
	    var $animateCss = null;
	
	    if ($injector.has('$animateCss')) {
	      $animateCss = $injector.get('$animateCss');
	    }
	
	    return {
	      restrict: 'EA',
	      scope: {
	        index: '@'
	      },
	      replace: true,
	      transclude: true,
	      templateUrl: function(tElement, tAttrs) {
	        return tAttrs.templateUrl || 'template/modal/window.html';
	      },
	      link: function(scope, element, attrs) {
	        element.addClass(attrs.windowClass || '');
	        scope.size = attrs.size;
	
	        scope.close = function(evt) {
	          var modal = $modalStack.getTop();
	          if (modal && modal.value.backdrop && modal.value.backdrop !== 'static' && (evt.target === evt.currentTarget)) {
	            evt.preventDefault();
	            evt.stopPropagation();
	            $modalStack.dismiss(modal.key, 'backdrop click');
	          }
	        };
	
	        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
	        // We can detect that by using this property in the template associated with this directive and then use
	        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
	        scope.$isRendered = true;
	
	        // Deferred object that will be resolved when this modal is render.
	        var modalRenderDeferObj = $q.defer();
	        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
	        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
	        attrs.$observe('modalRender', function(value) {
	          if (value == 'true') {
	            modalRenderDeferObj.resolve();
	          }
	        });
	
	        modalRenderDeferObj.promise.then(function() {
	          var animationPromise = null;
	
	          if (attrs.modalInClass) {
	            if ($animateCss) {
	              animationPromise = $animateCss(element, {
	                addClass: attrs.modalInClass
	              }).start();
	            } else {
	              animationPromise = $animate.addClass(element, attrs.modalInClass);
	            }
	
	            scope.$on($modalStack.NOW_CLOSING_EVENT, function(e, setIsAsync) {
	              var done = setIsAsync();
	              if ($animateCss) {
	                $animateCss(element, {
	                  removeClass: attrs.modalInClass
	                }).start().then(done);
	              } else {
	                $animate.removeClass(element, attrs.modalInClass).then(done);
	              }
	            });
	          }
	
	
	          $q.when(animationPromise).then(function() {
	            var inputsWithAutofocus = element[0].querySelectorAll('[autofocus]');
	            /**
	             * Auto-focusing of a freshly-opened modal element causes any child elements
	             * with the autofocus attribute to lose focus. This is an issue on touch
	             * based devices which will show and then hide the onscreen keyboard.
	             * Attempts to refocus the autofocus element via JavaScript will not reopen
	             * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
	             * the modal element if the modal does not contain an autofocus element.
	             */
	            if (inputsWithAutofocus.length) {
	              inputsWithAutofocus[0].focus();
	            } else {
	              element[0].focus();
	            }
	          });
	
	          // Notify {@link $modalStack} that modal is rendered.
	          var modal = $modalStack.getTop();
	          if (modal) {
	            $modalStack.modalRendered(modal.key);
	          }
	        });
	      }
	    };
	  }])
	
	  .directive('modalAnimationClass', [
	    function () {
	      return {
	        compile: function(tElement, tAttrs) {
	          if (tAttrs.modalAnimation) {
	            tElement.addClass(tAttrs.modalAnimationClass);
	          }
	        }
	      };
	    }])
	
	  .directive('modalTransclude', function() {
	    return {
	      link: function($scope, $element, $attrs, controller, $transclude) {
	        $transclude($scope.$parent, function(clone) {
	          $element.empty();
	          $element.append(clone);
	        });
	      }
	    };
	  })
	
	  .factory('$modalStack', [
	             '$animate', '$timeout', '$document', '$compile', '$rootScope',
	             '$q',
	             '$injector',
	             '$$multiMap',
	             '$$stackedMap',
	    function($animate ,  $timeout ,  $document ,  $compile ,  $rootScope ,
	              $q,
	              $injector,
	              $$multiMap,
	              $$stackedMap) {
	      var $animateCss = null;
	
	      if ($injector.has('$animateCss')) {
	        $animateCss = $injector.get('$animateCss');
	      }
	
	      var OPENED_MODAL_CLASS = 'modal-open';
	
	      var backdropDomEl, backdropScope;
	      var openedWindows = $$stackedMap.createNew();
	      var openedClasses = $$multiMap.createNew();
	      var $modalStack = {
	        NOW_CLOSING_EVENT: 'modal.stack.now-closing'
	      };
	
	      //Modal focus behavior
	      var focusableElementList;
	      var focusIndex = 0;
	      var tababbleSelector = 'a[href], area[href], input:not([disabled]), ' +
	        'button:not([disabled]),select:not([disabled]), textarea:not([disabled]), ' +
	        'iframe, object, embed, *[tabindex], *[contenteditable=true]';
	
	      function backdropIndex() {
	        var topBackdropIndex = -1;
	        var opened = openedWindows.keys();
	        for (var i = 0; i < opened.length; i++) {
	          if (openedWindows.get(opened[i]).value.backdrop) {
	            topBackdropIndex = i;
	          }
	        }
	        return topBackdropIndex;
	      }
	
	      $rootScope.$watch(backdropIndex, function(newBackdropIndex) {
	        if (backdropScope) {
	          backdropScope.index = newBackdropIndex;
	        }
	      });
	
	      function removeModalWindow(modalInstance, elementToReceiveFocus) {
	        var body = $document.find('body').eq(0);
	        var modalWindow = openedWindows.get(modalInstance).value;
	
	        //clean up the stack
	        openedWindows.remove(modalInstance);
	
	        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
	          var modalBodyClass = modalWindow.openedClass || OPENED_MODAL_CLASS;
	          openedClasses.remove(modalBodyClass, modalInstance);
	          body.toggleClass(modalBodyClass, openedClasses.hasKey(modalBodyClass));
	        });
	        checkRemoveBackdrop();
	
	        //move focus to specified element if available, or else to body
	        if (elementToReceiveFocus && elementToReceiveFocus.focus) {
	          elementToReceiveFocus.focus();
	        } else {
	          body.focus();
	        }
	      }
	
	      function checkRemoveBackdrop() {
	          //remove backdrop if no longer needed
	          if (backdropDomEl && backdropIndex() == -1) {
	            var backdropScopeRef = backdropScope;
	            removeAfterAnimate(backdropDomEl, backdropScope, function() {
	              backdropScopeRef = null;
	            });
	            backdropDomEl = undefined;
	            backdropScope = undefined;
	          }
	      }
	
	      function removeAfterAnimate(domEl, scope, done) {
	        var asyncDeferred;
	        var asyncPromise = null;
	        var setIsAsync = function() {
	          if (!asyncDeferred) {
	            asyncDeferred = $q.defer();
	            asyncPromise = asyncDeferred.promise;
	          }
	
	          return function asyncDone() {
	            asyncDeferred.resolve();
	          };
	        };
	        scope.$broadcast($modalStack.NOW_CLOSING_EVENT, setIsAsync);
	
	        // Note that it's intentional that asyncPromise might be null.
	        // That's when setIsAsync has not been called during the
	        // NOW_CLOSING_EVENT broadcast.
	        return $q.when(asyncPromise).then(afterAnimating);
	
	        function afterAnimating() {
	          if (afterAnimating.done) {
	            return;
	          }
	          afterAnimating.done = true;
	
	          if ($animateCss) {
	            $animateCss(domEl, {
	              event: 'leave'
	            }).start().then(function() {
	              domEl.remove();
	            });
	          } else {
	            $animate.leave(domEl);
	          }
	          scope.$destroy();
	          if (done) {
	            done();
	          }
	        }
	      }
	
	      $document.bind('keydown', function(evt) {
	        if (evt.isDefaultPrevented()) {
	          return evt;
	        }
	
	        var modal = openedWindows.top();
	        if (modal && modal.value.keyboard) {
	          switch (evt.which){
	            case 27: {
	              evt.preventDefault();
	              $rootScope.$apply(function() {
	                $modalStack.dismiss(modal.key, 'escape key press');
	              });
	              break;
	            }
	            case 9: {
	              $modalStack.loadFocusElementList(modal);
	              var focusChanged = false;
	              if (evt.shiftKey) {
	                if ($modalStack.isFocusInFirstItem(evt)) {
	                  focusChanged = $modalStack.focusLastFocusableElement();
	                }
	              } else {
	                if ($modalStack.isFocusInLastItem(evt)) {
	                  focusChanged = $modalStack.focusFirstFocusableElement();
	                }
	              }
	
	              if (focusChanged) {
	                evt.preventDefault();
	                evt.stopPropagation();
	              }
	              break;
	            }
	          }
	        }
	      });
	
	      $modalStack.open = function(modalInstance, modal) {
	        var modalOpener = $document[0].activeElement,
	          modalBodyClass = modal.openedClass || OPENED_MODAL_CLASS;
	
	        openedWindows.add(modalInstance, {
	          deferred: modal.deferred,
	          renderDeferred: modal.renderDeferred,
	          modalScope: modal.scope,
	          backdrop: modal.backdrop,
	          keyboard: modal.keyboard,
	          openedClass: modal.openedClass
	        });
	
	        openedClasses.put(modalBodyClass, modalInstance);
	
	        var body = $document.find('body').eq(0),
	            currBackdropIndex = backdropIndex();
	
	        if (currBackdropIndex >= 0 && !backdropDomEl) {
	          backdropScope = $rootScope.$new(true);
	          backdropScope.index = currBackdropIndex;
	          var angularBackgroundDomEl = angular.element('<div modal-backdrop="modal-backdrop"></div>');
	          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
	          if (modal.animation) {
	            angularBackgroundDomEl.attr('modal-animation', 'true');
	          }
	          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
	          body.append(backdropDomEl);
	        }
	
	        var angularDomEl = angular.element('<div modal-window="modal-window"></div>');
	        angularDomEl.attr({
	          'template-url': modal.windowTemplateUrl,
	          'window-class': modal.windowClass,
	          'size': modal.size,
	          'index': openedWindows.length() - 1,
	          'animate': 'animate'
	        }).html(modal.content);
	        if (modal.animation) {
	          angularDomEl.attr('modal-animation', 'true');
	        }
	
	        var modalDomEl = $compile(angularDomEl)(modal.scope);
	        openedWindows.top().value.modalDomEl = modalDomEl;
	        openedWindows.top().value.modalOpener = modalOpener;
	        body.append(modalDomEl);
	        body.addClass(modalBodyClass);
	
	        $modalStack.clearFocusListCache();
	      };
	
	      function broadcastClosing(modalWindow, resultOrReason, closing) {
	          return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
	      }
	
	      $modalStack.close = function(modalInstance, result) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.resolve(result);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };
	
	      $modalStack.dismiss = function(modalInstance, reason) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
	          modalWindow.value.modalScope.$$uibDestructionScheduled = true;
	          modalWindow.value.deferred.reject(reason);
	          removeModalWindow(modalInstance, modalWindow.value.modalOpener);
	          return true;
	        }
	        return !modalWindow;
	      };
	
	      $modalStack.dismissAll = function(reason) {
	        var topModal = this.getTop();
	        while (topModal && this.dismiss(topModal.key, reason)) {
	          topModal = this.getTop();
	        }
	      };
	
	      $modalStack.getTop = function() {
	        return openedWindows.top();
	      };
	
	      $modalStack.modalRendered = function(modalInstance) {
	        var modalWindow = openedWindows.get(modalInstance);
	        if (modalWindow) {
	          modalWindow.value.renderDeferred.resolve();
	        }
	      };
	
	      $modalStack.focusFirstFocusableElement = function() {
	        if (focusableElementList.length > 0) {
	          focusableElementList[0].focus();
	          return true;
	        }
	        return false;
	      };
	      $modalStack.focusLastFocusableElement = function() {
	        if (focusableElementList.length > 0) {
	          focusableElementList[focusableElementList.length - 1].focus();
	          return true;
	        }
	        return false;
	      };
	
	      $modalStack.isFocusInFirstItem = function(evt) {
	        if (focusableElementList.length > 0) {
	          return (evt.target || evt.srcElement) == focusableElementList[0];
	        }
	        return false;
	      };
	
	      $modalStack.isFocusInLastItem = function(evt) {
	        if (focusableElementList.length > 0) {
	          return (evt.target || evt.srcElement) == focusableElementList[focusableElementList.length - 1];
	        }
	        return false;
	      };
	
	      $modalStack.clearFocusListCache = function() {
	        focusableElementList = [];
	        focusIndex = 0;
	      };
	
	      $modalStack.loadFocusElementList = function(modalWindow) {
	        if (focusableElementList === undefined || !focusableElementList.length0) {
	          if (modalWindow) {
	            var modalDomE1 = modalWindow.value.modalDomEl;
	            if (modalDomE1 && modalDomE1.length) {
	              focusableElementList = modalDomE1[0].querySelectorAll(tababbleSelector);
	            }
	          }
	        }
	      };
	
	      return $modalStack;
	    }])
	
	  .provider('$modal', function() {
	    var $modalProvider = {
	      options: {
	        animation: true,
	        backdrop: true, //can also be false or 'static'
	        keyboard: true
	      },
	      $get: ['$injector', '$rootScope', '$q', '$templateRequest', '$controller', '$modalStack',
	        function ($injector, $rootScope, $q, $templateRequest, $controller, $modalStack) {
	          var $modal = {};
	
	          function getTemplatePromise(options) {
	            return options.template ? $q.when(options.template) :
	              $templateRequest(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl);
	          }
	
	          function getResolvePromises(resolves) {
	            var promisesArr = [];
	            angular.forEach(resolves, function(value) {
	              if (angular.isFunction(value) || angular.isArray(value)) {
	                promisesArr.push($q.when($injector.invoke(value)));
	              } else if (angular.isString(value)) {
	                promisesArr.push($q.when($injector.get(value)));
	              } else {
	                promisesArr.push($q.when(value));
	              }
	            });
	            return promisesArr;
	          }
	
	          var promiseChain = null;
	          $modal.getPromiseChain = function() {
	            return promiseChain;
	          };
	
	          $modal.open = function (modalOptions) {
	
	            var modalResultDeferred = $q.defer();
	            var modalOpenedDeferred = $q.defer();
	            var modalRenderDeferred = $q.defer();
	
	            //prepare an instance of a modal to be injected into controllers and returned to a caller
	            var modalInstance = {
	              result: modalResultDeferred.promise,
	              opened: modalOpenedDeferred.promise,
	              rendered: modalRenderDeferred.promise,
	              close: function (result) {
	                return $modalStack.close(modalInstance, result);
	              },
	              dismiss: function (reason) {
	                return $modalStack.dismiss(modalInstance, reason);
	              }
	            };
	
	            //merge and clean up options
	            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
	            modalOptions.resolve = modalOptions.resolve || {};
	
	            //verify options
	            if (!modalOptions.template && !modalOptions.templateUrl) {
	              throw new Error('One of template or templateUrl options is required.');
	            }
	
	            var templateAndResolvePromise =
	              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
	
	            // Wait for the resolution of the existing promise chain.
	            // Then switch to our own combined promise dependency (regardless of how the previous modal fared).
	            // Then add to $modalStack and resolve opened.
	            // Finally clean up the chain variable if no subsequent modal has overwritten it.
	            var samePromise;
	            samePromise = promiseChain = $q.all([promiseChain])
	              .then(function() { return templateAndResolvePromise; }, function() { return templateAndResolvePromise; })
	              .then(function resolveSuccess(tplAndVars) {
	
	                var modalScope = (modalOptions.scope || $rootScope).$new();
	                modalScope.$close = modalInstance.close;
	                modalScope.$dismiss = modalInstance.dismiss;
	
	                modalScope.$on('$destroy', function() {
	                  if (!modalScope.$$uibDestructionScheduled) {
	                    modalScope.$dismiss('$uibUnscheduledDestruction');
	                  }
	                });
	
	                var ctrlInstance, ctrlLocals = {};
	                var resolveIter = 1;
	
	                //controllers
	                if (modalOptions.controller) {
	                  ctrlLocals.$scope = modalScope;
	                  ctrlLocals.$modalInstance = modalInstance;
	                  angular.forEach(modalOptions.resolve, function(value, key) {
	                    ctrlLocals[key] = tplAndVars[resolveIter++];
	                  });
	
	                  ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
	                  if (modalOptions.controllerAs) {
	                    if (modalOptions.bindToController) {
	                      angular.extend(ctrlInstance, modalScope);
	                    }
	
	                    modalScope[modalOptions.controllerAs] = ctrlInstance;
	                  }
	                }
	
	                $modalStack.open(modalInstance, {
	                  scope: modalScope,
	                  deferred: modalResultDeferred,
	                  renderDeferred: modalRenderDeferred,
	                  content: tplAndVars[0],
	                  animation: modalOptions.animation,
	                  backdrop: modalOptions.backdrop,
	                  keyboard: modalOptions.keyboard,
	                  backdropClass: modalOptions.backdropClass,
	                  windowClass: modalOptions.windowClass,
	                  windowTemplateUrl: modalOptions.windowTemplateUrl,
	                  size: modalOptions.size,
	                  openedClass: modalOptions.openedClass
	                });
	                modalOpenedDeferred.resolve(true);
	
	            }, function resolveError(reason) {
	              modalOpenedDeferred.reject(reason);
	              modalResultDeferred.reject(reason);
	            })
	            .finally(function() {
	              if (promiseChain === samePromise) {
	                promiseChain = null;
	              }
	            });
	
	            return modalInstance;
	          };
	
	          return $modal;
	        }]
	    };
	
	    return $modalProvider;
	  });
	
	angular.module('ui.bootstrap.pagination', [])
	.controller('PaginationController', ['$scope', '$attrs', '$parse', function($scope, $attrs, $parse) {
	  var self = this,
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
	
	  this.init = function(ngModelCtrl_, config) {
	    ngModelCtrl = ngModelCtrl_;
	    this.config = config;
	
	    ngModelCtrl.$render = function() {
	      self.render();
	    };
	
	    if ($attrs.itemsPerPage) {
	      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
	        self.itemsPerPage = parseInt(value, 10);
	        $scope.totalPages = self.calculateTotalPages();
	      });
	    } else {
	      this.itemsPerPage = config.itemsPerPage;
	    }
	
	    $scope.$watch('totalItems', function() {
	      $scope.totalPages = self.calculateTotalPages();
	    });
	
	    $scope.$watch('totalPages', function(value) {
	      setNumPages($scope.$parent, value); // Readonly variable
	
	      if ( $scope.page > value ) {
	        $scope.selectPage(value);
	      } else {
	        ngModelCtrl.$render();
	      }
	    });
	  };
	
	  this.calculateTotalPages = function() {
	    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
	    return Math.max(totalPages || 0, 1);
	  };
	
	  this.render = function() {
	    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
	  };
	
	  $scope.selectPage = function(page, evt) {
	    if (evt) {
	      evt.preventDefault();
	    }
	
	    var clickAllowed = !$scope.ngDisabled || !evt;
	    if (clickAllowed && $scope.page !== page && page > 0 && page <= $scope.totalPages) {
	      if (evt && evt.target) {
	        evt.target.blur();
	      }
	      ngModelCtrl.$setViewValue(page);
	      ngModelCtrl.$render();
	    }
	  };
	
	  $scope.getText = function(key) {
	    return $scope[key + 'Text'] || self.config[key + 'Text'];
	  };
	
	  $scope.noPrevious = function() {
	    return $scope.page === 1;
	  };
	
	  $scope.noNext = function() {
	    return $scope.page === $scope.totalPages;
	  };
	}])
	
	.constant('paginationConfig', {
	  itemsPerPage: 10,
	  boundaryLinks: false,
	  directionLinks: true,
	  firstText: 'First',
	  previousText: 'Previous',
	  nextText: 'Next',
	  lastText: 'Last',
	  rotate: true
	})
	
	.directive('pagination', ['$parse', 'paginationConfig', function($parse, paginationConfig) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      firstText: '@',
	      previousText: '@',
	      nextText: '@',
	      lastText: '@',
	      ngDisabled:'='
	    },
	    require: ['pagination', '?ngModel'],
	    controller: 'PaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/pagination/pagination.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }
	
	      // Setup configuration parameters
	      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
	          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
	      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
	      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;
	
	      paginationCtrl.init(ngModelCtrl, paginationConfig);
	
	      if (attrs.maxSize) {
	        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
	          maxSize = parseInt(value, 10);
	          paginationCtrl.render();
	        });
	      }
	
	      // Create page object used in template
	      function makePage(number, text, isActive) {
	        return {
	          number: number,
	          text: text,
	          active: isActive
	        };
	      }
	
	      function getPages(currentPage, totalPages) {
	        var pages = [];
	
	        // Default page limits
	        var startPage = 1, endPage = totalPages;
	        var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;
	
	        // recompute if maxSize
	        if (isMaxSized) {
	          if (rotate) {
	            // Current page is displayed in the middle of the visible ones
	            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
	            endPage   = startPage + maxSize - 1;
	
	            // Adjust if limit is exceeded
	            if (endPage > totalPages) {
	              endPage   = totalPages;
	              startPage = endPage - maxSize + 1;
	            }
	          } else {
	            // Visible pages are paginated with maxSize
	            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;
	
	            // Adjust last page if limit is exceeded
	            endPage = Math.min(startPage + maxSize - 1, totalPages);
	          }
	        }
	
	        // Add page number links
	        for (var number = startPage; number <= endPage; number++) {
	          var page = makePage(number, number, number === currentPage);
	          pages.push(page);
	        }
	
	        // Add links to move between page sets
	        if (isMaxSized && ! rotate) {
	          if (startPage > 1) {
	            var previousPageSet = makePage(startPage - 1, '...', false);
	            pages.unshift(previousPageSet);
	          }
	
	          if (endPage < totalPages) {
	            var nextPageSet = makePage(endPage + 1, '...', false);
	            pages.push(nextPageSet);
	          }
	        }
	
	        return pages;
	      }
	
	      var originalRender = paginationCtrl.render;
	      paginationCtrl.render = function() {
	        originalRender();
	        if (scope.page > 0 && scope.page <= scope.totalPages) {
	          scope.pages = getPages(scope.page, scope.totalPages);
	        }
	      };
	    }
	  };
	}])
	
	.constant('pagerConfig', {
	  itemsPerPage: 10,
	  previousText: '« Previous',
	  nextText: 'Next »',
	  align: true
	})
	
	.directive('pager', ['pagerConfig', function(pagerConfig) {
	  return {
	    restrict: 'EA',
	    scope: {
	      totalItems: '=',
	      previousText: '@',
	      nextText: '@',
	      ngDisabled: '='
	    },
	    require: ['pager', '?ngModel'],
	    controller: 'PaginationController',
	    controllerAs: 'pagination',
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/pagination/pager.html';
	    },
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if (!ngModelCtrl) {
	         return; // do nothing if no ng-model
	      }
	
	      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
	      paginationCtrl.init(ngModelCtrl, pagerConfig);
	    }
	  };
	}]);
	
	/**
	 * The following features are still outstanding: animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, html tooltips, and selector delegation.
	 */
	angular.module('ui.bootstrap.tooltip', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])
	
	/**
	 * The $tooltip service creates tooltip- and popover-like directives as well as
	 * houses global options for them.
	 */
	.provider('$tooltip', function() {
	  // The default options tooltip and popover.
	  var defaultOptions = {
	    placement: 'top',
	    animation: true,
	    popupDelay: 0,
	    useContentExp: false
	  };
	
	  // Default hide triggers for each show trigger
	  var triggerMap = {
	    'mouseenter': 'mouseleave',
	    'click': 'click',
	    'focus': 'blur',
	    'none': ''
	  };
	
	  // The options specified to the provider globally.
	  var globalOptions = {};
	
	  /**
	   * `options({})` allows global configuration of all tooltips in the
	   * application.
	   *
	   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
	   *     // place tooltips left instead of top by default
	   *     $tooltipProvider.options( { placement: 'left' } );
	   *   });
	   */
		this.options = function(value) {
			angular.extend(globalOptions, value);
		};
	
	  /**
	   * This allows you to extend the set of trigger mappings available. E.g.:
	   *
	   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
	   */
	  this.setTriggers = function setTriggers(triggers) {
	    angular.extend(triggerMap, triggers);
	  };
	
	  /**
	   * This is a helper function for translating camel-case to snake-case.
	   */
	  function snake_case(name) {
	    var regexp = /[A-Z]/g;
	    var separator = '-';
	    return name.replace(regexp, function(letter, pos) {
	      return (pos ? separator : '') + letter.toLowerCase();
	    });
	  }
	
	  /**
	   * Returns the actual instance of the $tooltip service.
	   * TODO support multiple triggers
	   */
	  this.$get = ['$window', '$compile', '$timeout', '$document', '$position', '$interpolate', '$rootScope', '$parse', function($window, $compile, $timeout, $document, $position, $interpolate, $rootScope, $parse) {
	    return function $tooltip(type, prefix, defaultTriggerShow, options) {
	      options = angular.extend({}, defaultOptions, globalOptions, options);
	
	      /**
	       * Returns an object of show and hide triggers.
	       *
	       * If a trigger is supplied,
	       * it is used to show the tooltip; otherwise, it will use the `trigger`
	       * option passed to the `$tooltipProvider.options` method; else it will
	       * default to the trigger supplied to this directive factory.
	       *
	       * The hide trigger is based on the show trigger. If the `trigger` option
	       * was passed to the `$tooltipProvider.options` method, it will use the
	       * mapped trigger from `triggerMap` or the passed trigger if the map is
	       * undefined; otherwise, it uses the `triggerMap` value of the show
	       * trigger; else it will just use the show trigger.
	       */
	      function getTriggers(trigger) {
	        var show = (trigger || options.trigger || defaultTriggerShow).split(' ');
	        var hide = show.map(function(trigger) {
	          return triggerMap[trigger] || trigger;
	        });
	        return {
	          show: show,
	          hide: hide
	        };
	      }
	
	      var directiveName = snake_case(type);
	
	      var startSym = $interpolate.startSymbol();
	      var endSym = $interpolate.endSymbol();
	      var template =
	        '<div '+ directiveName +'-popup '+
	          'title="'+startSym+'title'+endSym+'" '+
	          (options.useContentExp ?
	            'content-exp="contentExp()" ' :
	            'content="'+startSym+'content'+endSym+'" ') +
	          'placement="'+startSym+'placement'+endSym+'" '+
	          'popup-class="'+startSym+'popupClass'+endSym+'" '+
	          'animation="animation" '+
	          'is-open="isOpen"'+
	          'origin-scope="origScope" '+
	          '>'+
	        '</div>';
	
	      return {
	        restrict: 'EA',
	        compile: function(tElem, tAttrs) {
	          var tooltipLinker = $compile( template );
	
	          return function link(scope, element, attrs, tooltipCtrl) {
	            var tooltip;
	            var tooltipLinkedScope;
	            var transitionTimeout;
	            var popupTimeout;
	            var positionTimeout;
	            var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
	            var triggers = getTriggers(undefined);
	            var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
	            var ttScope = scope.$new(true);
	            var repositionScheduled = false;
	            var isOpenExp = angular.isDefined(attrs[prefix + 'IsOpen']) ? $parse(attrs[prefix + 'IsOpen']) : false;
	
	            var positionTooltip = function() {
	              if (!tooltip) { return; }
	
	              if (!positionTimeout) {
	                positionTimeout = $timeout(function() {
	                  // Reset the positioning and box size for correct width and height values.
	                  tooltip.css({ top: 0, left: 0, width: 'auto', height: 'auto' });
	
	                  var ttBox = $position.position(tooltip);
	                  var ttCss = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
	                  ttCss.top += 'px';
	                  ttCss.left += 'px';
	
	                  ttCss.width = ttBox.width + 'px';
	                  ttCss.height = ttBox.height + 'px';
	
	                  // Now set the calculated positioning and size.
	                  tooltip.css(ttCss);
	
	                  positionTimeout = null;
	
	                }, 0, false);
	              }
	            };
	
	            // Set up the correct scope to allow transclusion later
	            ttScope.origScope = scope;
	
	            // By default, the tooltip is not open.
	            // TODO add ability to start tooltip opened
	            ttScope.isOpen = false;
	
	            function toggleTooltipBind() {
	              if (!ttScope.isOpen) {
	                showTooltipBind();
	              } else {
	                hideTooltipBind();
	              }
	            }
	
	            // Show the tooltip with delay if specified, otherwise show it immediately
	            function showTooltipBind() {
	              if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
	                return;
	              }
	
	              prepareTooltip();
	
	              if (ttScope.popupDelay) {
	                // Do nothing if the tooltip was already scheduled to pop-up.
	                // This happens if show is triggered multiple times before any hide is triggered.
	                if (!popupTimeout) {
	                  popupTimeout = $timeout(show, ttScope.popupDelay, false);
	                }
	              } else {
	                show();
	              }
	            }
	
	            function hideTooltipBind () {
	              hide();
	              if (!$rootScope.$$phase) {
	                $rootScope.$digest();
	              }
	            }
	
	            // Show the tooltip popup element.
	            function show() {
	              popupTimeout = null;
	
	              // If there is a pending remove transition, we must cancel it, lest the
	              // tooltip be mysteriously removed.
	              if (transitionTimeout) {
	                $timeout.cancel(transitionTimeout);
	                transitionTimeout = null;
	              }
	
	              // Don't show empty tooltips.
	              if (!(options.useContentExp ? ttScope.contentExp() : ttScope.content)) {
	                return angular.noop;
	              }
	
	              createTooltip();
	
	              // And show the tooltip.
	              ttScope.isOpen = true;
	              if (isOpenExp) {
	                isOpenExp.assign(ttScope.origScope, ttScope.isOpen);
	              }
	
	              if (!$rootScope.$$phase) {
	                ttScope.$apply(); // digest required as $apply is not called
	              }
	
	              tooltip.css({ display: 'block' });
	
	              positionTooltip();
	            }
	
	            // Hide the tooltip popup element.
	            function hide() {
	              // First things first: we don't show it anymore.
	              ttScope.isOpen = false;
	              if (isOpenExp) {
	                isOpenExp.assign(ttScope.origScope, ttScope.isOpen);
	              }
	
	              //if tooltip is going to be shown after delay, we must cancel this
	              $timeout.cancel(popupTimeout);
	              popupTimeout = null;
	
	              $timeout.cancel(positionTimeout);
	              positionTimeout = null;
	
	              // And now we remove it from the DOM. However, if we have animation, we
	              // need to wait for it to expire beforehand.
	              // FIXME: this is a placeholder for a port of the transitions library.
	              if (ttScope.animation) {
	                if (!transitionTimeout) {
	                  transitionTimeout = $timeout(removeTooltip, 500);
	                }
	              } else {
	                removeTooltip();
	              }
	            }
	
	            function createTooltip() {
	              // There can only be one tooltip element per directive shown at once.
	              if (tooltip) {
	                removeTooltip();
	              }
	              tooltipLinkedScope = ttScope.$new();
	              tooltip = tooltipLinker(tooltipLinkedScope, function(tooltip) {
	                if (appendToBody) {
	                  $document.find('body').append(tooltip);
	                } else {
	                  element.after(tooltip);
	                }
	              });
	
	              if (options.useContentExp) {
	                tooltipLinkedScope.$watch('contentExp()', function(val) {
	                  if (!val && ttScope.isOpen) {
	                    hide();
	                  }
	                });
	
	                tooltipLinkedScope.$watch(function() {
	                  if (!repositionScheduled) {
	                    repositionScheduled = true;
	                    tooltipLinkedScope.$$postDigest(function() {
	                      repositionScheduled = false;
	                      if (ttScope.isOpen) {
	                        positionTooltip();
	                      }
	                    });
	                  }
	                });
	
	              }
	            }
	
	            function removeTooltip() {
	              transitionTimeout = null;
	              if (tooltip) {
	                tooltip.remove();
	                tooltip = null;
	              }
	              if (tooltipLinkedScope) {
	                tooltipLinkedScope.$destroy();
	                tooltipLinkedScope = null;
	              }
	            }
	
	            function prepareTooltip() {
	              prepPopupClass();
	              prepPlacement();
	              prepPopupDelay();
	            }
	
	            ttScope.contentExp = function() {
	              return scope.$eval(attrs[type]);
	            };
	
	            /**
	             * Observe the relevant attributes.
	             */
	            if (!options.useContentExp) {
	              attrs.$observe(type, function(val) {
	                ttScope.content = val;
	
	                if (!val && ttScope.isOpen) {
	                  hide();
	                } else {
	                  positionTooltip();
	                }
	              });
	            }
	
	            attrs.$observe('disabled', function(val) {
	              if (popupTimeout && val) {
	                $timeout.cancel(popupTimeout);
	                popupTimeout = null;
	              }
	
	              if (val && ttScope.isOpen) {
	                hide();
	              }
	            });
	
	            attrs.$observe(prefix + 'Title', function(val) {
	              ttScope.title = val;
	              positionTooltip();
	            });
	
	            attrs.$observe(prefix + 'Placement', function() {
	              if (ttScope.isOpen) {
	                prepPlacement();
	                positionTooltip();
	              }
	            });
	
	            if (isOpenExp) {
	              scope.$watch(isOpenExp, function(val) {
	                if (val !== ttScope.isOpen) {
	                  toggleTooltipBind();
	                }
	              });
	            }
	
	            function prepPopupClass() {
	              ttScope.popupClass = attrs[prefix + 'Class'];
	            }
	
	            function prepPlacement() {
	              var val = attrs[prefix + 'Placement'];
	              ttScope.placement = angular.isDefined(val) ? val : options.placement;
	            }
	
	            function prepPopupDelay() {
	              var val = attrs[prefix + 'PopupDelay'];
	              var delay = parseInt(val, 10);
	              ttScope.popupDelay = !isNaN(delay) ? delay : options.popupDelay;
	            }
	
	            var unregisterTriggers = function() {
	              triggers.show.forEach(function(trigger) {
	                element.unbind(trigger, showTooltipBind);
	              });
	              triggers.hide.forEach(function(trigger) {
	                element.unbind(trigger, hideTooltipBind);
	              });
	            };
	
	            function prepTriggers() {
	              var val = attrs[prefix + 'Trigger'];
	              unregisterTriggers();
	
	              triggers = getTriggers(val);
	
	              if (triggers.show !== 'none') {
	                triggers.show.forEach(function(trigger, idx) {
	                  // Using raw addEventListener due to jqLite/jQuery bug - #4060
	                  if (trigger === triggers.hide[idx]) {
	                    element[0].addEventListener(trigger, toggleTooltipBind);
	                  } else if (trigger) {
	                    element[0].addEventListener(trigger, showTooltipBind);
	                    element[0].addEventListener(triggers.hide[idx], hideTooltipBind);
	                  }
	                });
	              }
	            }
	            prepTriggers();
	
	            var animation = scope.$eval(attrs[prefix + 'Animation']);
	            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;
	
	            var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
	            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;
	
	            // if a tooltip is attached to <body> we need to remove it on
	            // location change as its parent scope will probably not be destroyed
	            // by the change.
	            if (appendToBody) {
	              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
	                if (ttScope.isOpen) {
	                  hide();
	                }
	              });
	            }
	
	            // Make sure tooltip is destroyed and removed.
	            scope.$on('$destroy', function onDestroyTooltip() {
	              $timeout.cancel(transitionTimeout);
	              $timeout.cancel(popupTimeout);
	              $timeout.cancel(positionTimeout);
	              unregisterTriggers();
	              removeTooltip();
	              ttScope = null;
	            });
	          };
	        }
	      };
	    };
	  }];
	})
	
	// This is mostly ngInclude code but with a custom scope
	.directive('tooltipTemplateTransclude', [
	         '$animate', '$sce', '$compile', '$templateRequest',
	function ($animate ,  $sce ,  $compile ,  $templateRequest) {
	  return {
	    link: function(scope, elem, attrs) {
	      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);
	
	      var changeCounter = 0,
	        currentScope,
	        previousElement,
	        currentElement;
	
	      var cleanupLastIncludeContent = function() {
	        if (previousElement) {
	          previousElement.remove();
	          previousElement = null;
	        }
	        if (currentScope) {
	          currentScope.$destroy();
	          currentScope = null;
	        }
	        if (currentElement) {
	          $animate.leave(currentElement).then(function() {
	            previousElement = null;
	          });
	          previousElement = currentElement;
	          currentElement = null;
	        }
	      };
	
	      scope.$watch($sce.parseAsResourceUrl(attrs.tooltipTemplateTransclude), function(src) {
	        var thisChangeId = ++changeCounter;
	
	        if (src) {
	          //set the 2nd param to true to ignore the template request error so that the inner
	          //contents and scope can be cleaned up.
	          $templateRequest(src, true).then(function(response) {
	            if (thisChangeId !== changeCounter) { return; }
	            var newScope = origScope.$new();
	            var template = response;
	
	            var clone = $compile(template)(newScope, function(clone) {
	              cleanupLastIncludeContent();
	              $animate.enter(clone, elem);
	            });
	
	            currentScope = newScope;
	            currentElement = clone;
	
	            currentScope.$emit('$includeContentLoaded', src);
	          }, function() {
	            if (thisChangeId === changeCounter) {
	              cleanupLastIncludeContent();
	              scope.$emit('$includeContentError', src);
	            }
	          });
	          scope.$emit('$includeContentRequested', src);
	        } else {
	          cleanupLastIncludeContent();
	        }
	      });
	
	      scope.$on('$destroy', cleanupLastIncludeContent);
	    }
	  };
	}])
	
	/**
	 * Note that it's intentional that these classes are *not* applied through $animate.
	 * They must not be animated as they're expected to be present on the tooltip on
	 * initialization.
	 */
	.directive('tooltipClasses', function() {
	  return {
	    restrict: 'A',
	    link: function(scope, element, attrs) {
	      if (scope.placement) {
	        element.addClass(scope.placement);
	      }
	      if (scope.popupClass) {
	        element.addClass(scope.popupClass);
	      }
	      if (scope.animation()) {
	        element.addClass(attrs.tooltipAnimationClass);
	      }
	    }
	  };
	})
	
	.directive('tooltipPopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-popup.html'
	  };
	})
	
	.directive('tooltip', [ '$tooltip', function($tooltip) {
	  return $tooltip('tooltip', 'tooltip', 'mouseenter');
	}])
	
	.directive('tooltipTemplatePopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/tooltip/tooltip-template-popup.html'
	  };
	})
	
	.directive('tooltipTemplate', ['$tooltip', function($tooltip) {
	  return $tooltip('tooltipTemplate', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])
	
	.directive('tooltipHtmlPopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-html-popup.html'
	  };
	})
	
	.directive('tooltipHtml', ['$tooltip', function($tooltip) {
	  return $tooltip('tooltipHtml', 'tooltip', 'mouseenter', {
	    useContentExp: true
	  });
	}])
	
	/*
	Deprecated
	*/
	.directive('tooltipHtmlUnsafePopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
	  };
	})
	
	.value('tooltipHtmlUnsafeSuppressDeprecated', false)
	.directive('tooltipHtmlUnsafe', [
	          '$tooltip', 'tooltipHtmlUnsafeSuppressDeprecated', '$log',
	function($tooltip ,  tooltipHtmlUnsafeSuppressDeprecated ,  $log) {
	  if (!tooltipHtmlUnsafeSuppressDeprecated) {
	    $log.warn('tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead.');
	  }
	  return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
	}]);
	
	/**
	 * The following features are still outstanding: popup delay, animation as a
	 * function, placement as a function, inside, support for more triggers than
	 * just mouse enter/leave, and selector delegatation.
	 */
	angular.module( 'ui.bootstrap.popover', ['ui.bootstrap.tooltip'])
	
	.directive('popoverTemplatePopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
	      originScope: '&' },
	    templateUrl: 'template/popover/popover-template.html'
	  };
	})
	
	.directive('popoverTemplate', ['$tooltip', function($tooltip) {
	  return $tooltip('popoverTemplate', 'popover', 'click', {
	    useContentExp: true
	  });
	}])
	
	.directive('popoverHtmlPopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { contentExp: '&', title: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover-html.html'
	  };
	})
	
	.directive('popoverHtml', ['$tooltip', function($tooltip) {
	  return $tooltip( 'popoverHtml', 'popover', 'click', {
	    useContentExp: true
	  });
	}])
	
	.directive('popoverPopup', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
	    templateUrl: 'template/popover/popover.html'
	  };
	})
	
	.directive('popover', ['$tooltip', function($tooltip) {
	  return $tooltip( 'popover', 'popover', 'click' );
	}]);
	
	angular.module('ui.bootstrap.progressbar', [])
	
	.constant('progressConfig', {
	  animate: true,
	  max: 100
	})
	
	.value('$progressSuppressWarning', false)
	
	.controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
	  var self = this,
	      animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
	
	  this.bars = [];
	  $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;
	
	  this.addBar = function(bar, element) {
	    if (!animate) {
	      element.css({'transition': 'none'});
	    }
	
	    this.bars.push(bar);
	
	    bar.max = $scope.max;
	
	    bar.$watch('value', function(value) {
	      bar.recalculatePercentage();
	    });
	
	    bar.recalculatePercentage = function() {
	      bar.percent = +(100 * bar.value / bar.max).toFixed(2);
	
	      var totalPercentage = self.bars.reduce(function(total, bar) {
	        return total + bar.percent;
	      }, 0);
	
	      if (totalPercentage > 100) {
	        bar.percent -= totalPercentage - 100;
	      }
	    };
	
	    bar.$on('$destroy', function() {
	      element = null;
	      self.removeBar(bar);
	    });
	  };
	
	  this.removeBar = function(bar) {
	      this.bars.splice(this.bars.indexOf(bar), 1);
	  };
	
	  $scope.$watch('max', function(max) {
	    self.bars.forEach(function(bar) {
	      bar.max = $scope.max;
	      bar.recalculatePercentage();
	    });
	  });
	}])
	
	.directive('uibProgress', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    controller: 'ProgressController',
	    require: 'uibProgress',
	    scope: {
	      max: '=?'
	    },
	    templateUrl: 'template/progressbar/progress.html'
	  };
	})
	
	.directive('progress', ['$log', '$progressSuppressWarning', function($log, $progressSuppressWarning) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    controller: 'ProgressController',
	    require: 'progress',
	    scope: {
	      max: '=?'
	    },
	    templateUrl: 'template/progressbar/progress.html',
	    link: function() {
	      if ($progressSuppressWarning) {
	        $log.warn('progress is now deprecated. Use uib-progress instead');
	      }
	    }
	  };
	}])
	
	.directive('uibBar', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    require: '^uibProgress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, element);
	    }
	  };
	})
	
	.directive('bar', ['$log', '$progressSuppressWarning', function($log, $progressSuppressWarning) {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    require: '^progress',
	    scope: {
	      value: '=',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/bar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      if ($progressSuppressWarning) {
	        $log.warn('bar is now deprecated. Use uib-bar instead');
	      }
	      progressCtrl.addBar(scope, element);
	    }
	  };
	}])
	
	.directive('progressbar', function() {
	  return {
	    restrict: 'EA',
	    replace: true,
	    transclude: true,
	    controller: 'ProgressController',
	    scope: {
	      value: '=',
	      max: '=?',
	      type: '@'
	    },
	    templateUrl: 'template/progressbar/progressbar.html',
	    link: function(scope, element, attrs, progressCtrl) {
	      progressCtrl.addBar(scope, angular.element(element.children()[0]));
	    }
	  };
	});
	
	angular.module('ui.bootstrap.rating', [])
	
	.constant('ratingConfig', {
	  max: 5,
	  stateOn: null,
	  stateOff: null,
	  titles : ['one', 'two', 'three', 'four', 'five']
	})
	
	.controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
	  var ngModelCtrl  = { $setViewValue: angular.noop };
	
	  this.init = function(ngModelCtrl_) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;
	
	    ngModelCtrl.$formatters.push(function(value) {
	      if (angular.isNumber(value) && value << 0 !== value) {
	        value = Math.round(value);
	      }
	      return value;
	    });
	
	    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
	    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
	    var tmpTitles = angular.isDefined($attrs.titles)  ? $scope.$parent.$eval($attrs.titles) : ratingConfig.titles ;    
	    this.titles = angular.isArray(tmpTitles) && tmpTitles.length > 0 ?
	      tmpTitles : ratingConfig.titles;
	    
	    var ratingStates = angular.isDefined($attrs.ratingStates) ?
	      $scope.$parent.$eval($attrs.ratingStates) :
	      new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
	    $scope.range = this.buildTemplateObjects(ratingStates);
	  };
	
	  this.buildTemplateObjects = function(states) {
	    for (var i = 0, n = states.length; i < n; i++) {
	      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff, title: this.getTitle(i) }, states[i]);
	    }
	    return states;
	  };
	  
	  this.getTitle = function(index) {
	    if (index >= this.titles.length) {
	      return index + 1;
	    } else {
	      return this.titles[index];
	    }
	  };
	  
	  $scope.rate = function(value) {
	    if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
	      ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue === value ? 0 : value);
	      ngModelCtrl.$render();
	    }
	  };
	
	  $scope.enter = function(value) {
	    if (!$scope.readonly) {
	      $scope.value = value;
	    }
	    $scope.onHover({value: value});
	  };
	
	  $scope.reset = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	    $scope.onLeave();
	  };
	
	  $scope.onKeydown = function(evt) {
	    if (/(37|38|39|40)/.test(evt.which)) {
	      evt.preventDefault();
	      evt.stopPropagation();
	      $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
	    }
	  };
	
	  this.render = function() {
	    $scope.value = ngModelCtrl.$viewValue;
	  };
	}])
	
	.directive('rating', function() {
	  return {
	    restrict: 'EA',
	    require: ['rating', 'ngModel'],
	    scope: {
	      readonly: '=?',
	      onHover: '&',
	      onLeave: '&'
	    },
	    controller: 'RatingController',
	    templateUrl: 'template/rating/rating.html',
	    replace: true,
	    link: function(scope, element, attrs, ctrls) {
	      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	      ratingCtrl.init( ngModelCtrl );
	    }
	  };
	});
	
	
	/**
	 * @ngdoc overview
	 * @name ui.bootstrap.tabs
	 *
	 * @description
	 * AngularJS version of the tabs directive.
	 */
	
	angular.module('ui.bootstrap.tabs', [])
	
	.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
	  var ctrl = this,
	      tabs = ctrl.tabs = $scope.tabs = [];
	
	  ctrl.select = function(selectedTab) {
	    angular.forEach(tabs, function(tab) {
	      if (tab.active && tab !== selectedTab) {
	        tab.active = false;
	        tab.onDeselect();
	        selectedTab.selectCalled = false;
	      }
	    });
	    selectedTab.active = true;
	    // only call select if it has not already been called
	    if (!selectedTab.selectCalled) {
	      selectedTab.onSelect();
	      selectedTab.selectCalled = true;
	    }
	  };
	
	  ctrl.addTab = function addTab(tab) {
	    tabs.push(tab);
	    // we can't run the select function on the first tab
	    // since that would select it twice
	    if (tabs.length === 1 && tab.active !== false) {
	      tab.active = true;
	    } else if (tab.active) {
	      ctrl.select(tab);
	    } else {
	      tab.active = false;
	    }
	  };
	
	  ctrl.removeTab = function removeTab(tab) {
	    var index = tabs.indexOf(tab);
	    //Select a new tab if the tab to be removed is selected and not destroyed
	    if (tab.active && tabs.length > 1 && !destroyed) {
	      //If this is the last tab, select the previous tab. else, the next tab.
	      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
	      ctrl.select(tabs[newActiveIndex]);
	    }
	    tabs.splice(index, 1);
	  };
	
	  var destroyed;
	  $scope.$on('$destroy', function() {
	    destroyed = true;
	  });
	}])
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabset
	 * @restrict EA
	 *
	 * @description
	 * Tabset is the outer container for the tabs directive
	 *
	 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
	 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab heading="Tab 1"><b>First</b> Content!</tab>
	      <tab heading="Tab 2"><i>Second</i> Content!</tab>
	    </tabset>
	    <hr />
	    <tabset vertical="true">
	      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
	      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
	    </tabset>
	    <tabset justified="true">
	      <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
	      <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tabset', function() {
	  return {
	    restrict: 'EA',
	    transclude: true,
	    replace: true,
	    scope: {
	      type: '@'
	    },
	    controller: 'TabsetController',
	    templateUrl: 'template/tabs/tabset.html',
	    link: function(scope, element, attrs) {
	      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
	      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
	    }
	  };
	})
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tab
	 * @restrict EA
	 *
	 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
	 * @param {string=} select An expression to evaluate when the tab is selected.
	 * @param {boolean=} active A binding, telling whether or not this tab is selected.
	 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
	 *
	 * @description
	 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <div ng-controller="TabsDemoCtrl">
	      <button class="btn btn-small" ng-click="items[0].active = true">
	        Select item 1, using active binding
	      </button>
	      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
	        Enable/disable item 2, using disabled binding
	      </button>
	      <br />
	      <tabset>
	        <tab heading="Tab 1">First Tab</tab>
	        <tab select="alertMe()">
	          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
	          Second Tab, with alert callback and html heading!
	        </tab>
	        <tab ng-repeat="item in items"
	          heading="{{item.title}}"
	          disabled="item.disabled"
	          active="item.active">
	          {{item.content}}
	        </tab>
	      </tabset>
	    </div>
	  </file>
	  <file name="script.js">
	    function TabsDemoCtrl($scope) {
	      $scope.items = [
	        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
	        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
	      ];
	
	      $scope.alertMe = function() {
	        setTimeout(function() {
	          alert("You've selected the alert tab!");
	        });
	      };
	    };
	  </file>
	</example>
	 */
	
	/**
	 * @ngdoc directive
	 * @name ui.bootstrap.tabs.directive:tabHeading
	 * @restrict EA
	 *
	 * @description
	 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
	 *
	 * @example
	<example module="ui.bootstrap">
	  <file name="index.html">
	    <tabset>
	      <tab>
	        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
	        And some content, too!
	      </tab>
	      <tab>
	        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
	        That's right.
	      </tab>
	    </tabset>
	  </file>
	</example>
	 */
	.directive('tab', ['$parse', '$log', function($parse, $log) {
	  return {
	    require: '^tabset',
	    restrict: 'EA',
	    replace: true,
	    templateUrl: 'template/tabs/tab.html',
	    transclude: true,
	    scope: {
	      active: '=?',
	      heading: '@',
	      onSelect: '&select', //This callback is called in contentHeadingTransclude
	                          //once it inserts the tab's content into the dom
	      onDeselect: '&deselect'
	    },
	    controller: function() {
	      //Empty controller so other directives can require being 'under' a tab
	    },
	    link: function(scope, elm, attrs, tabsetCtrl, transclude) {
	      scope.$watch('active', function(active) {
	        if (active) {
	          tabsetCtrl.select(scope);
	        }
	      });
	
	      scope.disabled = false;
	      if (attrs.disable) {
	        scope.$parent.$watch($parse(attrs.disable), function(value) {
	          scope.disabled = !! value;
	        });
	      }
	
	      // Deprecation support of "disabled" parameter
	      // fix(tab): IE9 disabled attr renders grey text on enabled tab #2677
	      // This code is duplicated from the lines above to make it easy to remove once
	      // the feature has been completely deprecated
	      if (attrs.disabled) {
	        $log.warn('Use of "disabled" attribute has been deprecated, please use "disable"');
	        scope.$parent.$watch($parse(attrs.disabled), function(value) {
	          scope.disabled = !! value;
	        });
	      }
	
	      scope.select = function() {
	        if (!scope.disabled) {
	          scope.active = true;
	        }
	      };
	
	      tabsetCtrl.addTab(scope);
	      scope.$on('$destroy', function() {
	        tabsetCtrl.removeTab(scope);
	      });
	
	      //We need to transclude later, once the content container is ready.
	      //when this link happens, we're inside a tab heading.
	      scope.$transcludeFn = transclude;
	    }
	  };
	}])
	
	.directive('tabHeadingTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^tab',
	    link: function(scope, elm, attrs, tabCtrl) {
	      scope.$watch('headingElement', function updateHeadingElement(heading) {
	        if (heading) {
	          elm.html('');
	          elm.append(heading);
	        }
	      });
	    }
	  };
	})
	
	.directive('tabContentTransclude', function() {
	  return {
	    restrict: 'A',
	    require: '^tabset',
	    link: function(scope, elm, attrs) {
	      var tab = scope.$eval(attrs.tabContentTransclude);
	
	      //Now our tab is ready to be transcluded: both the tab heading area
	      //and the tab content area are loaded.  Transclude 'em both.
	      tab.$transcludeFn(tab.$parent, function(contents) {
	        angular.forEach(contents, function(node) {
	          if (isTabHeading(node)) {
	            //Let tabHeadingTransclude know.
	            tab.headingElement = node;
	          } else {
	            elm.append(node);
	          }
	        });
	      });
	    }
	  };
	
	  function isTabHeading(node) {
	    return node.tagName && (
	      node.hasAttribute('tab-heading') ||
	      node.hasAttribute('data-tab-heading') ||
	      node.hasAttribute('x-tab-heading') ||
	      node.tagName.toLowerCase() === 'tab-heading' ||
	      node.tagName.toLowerCase() === 'data-tab-heading' ||
	      node.tagName.toLowerCase() === 'x-tab-heading'
	    );
	  }
	});
	
	angular.module('ui.bootstrap.timepicker', [])
	
	.constant('timepickerConfig', {
	  hourStep: 1,
	  minuteStep: 1,
	  showMeridian: true,
	  meridians: null,
	  readonlyInput: false,
	  mousewheel: true,
	  arrowkeys: true,
	  showSpinners: true
	})
	
	.controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
	  var selected = new Date(),
	      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
	      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
	
	  this.init = function(ngModelCtrl_, inputs) {
	    ngModelCtrl = ngModelCtrl_;
	    ngModelCtrl.$render = this.render;
	
	    ngModelCtrl.$formatters.unshift(function(modelValue) {
	      return modelValue ? new Date(modelValue) : null;
	    });
	
	    var hoursInputEl = inputs.eq(0),
	        minutesInputEl = inputs.eq(1);
	
	    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
	    if (mousewheel) {
	      this.setupMousewheelEvents(hoursInputEl, minutesInputEl);
	    }
	
	    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
	    if (arrowkeys) {
	      this.setupArrowkeyEvents(hoursInputEl, minutesInputEl);
	    }
	
	    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
	    this.setupInputEvents(hoursInputEl, minutesInputEl);
	  };
	
	  var hourStep = timepickerConfig.hourStep;
	  if ($attrs.hourStep) {
	    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
	      hourStep = parseInt(value, 10);
	    });
	  }
	
	  var minuteStep = timepickerConfig.minuteStep;
	  if ($attrs.minuteStep) {
	    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
	      minuteStep = parseInt(value, 10);
	    });
	  }
	
	  var min;
	  $scope.$parent.$watch($parse($attrs.min), function(value) {
	    var dt = new Date(value);
	    min = isNaN(dt) ? undefined : dt;
	  });
	
	  var max;
	  $scope.$parent.$watch($parse($attrs.max), function(value) {
	    var dt = new Date(value);
	    max = isNaN(dt) ? undefined : dt;
	  });
	
	  $scope.noIncrementHours = function() {
	    var incrementedSelected = addMinutes(selected, hourStep * 60);
	    return incrementedSelected > max ||
	      (incrementedSelected < selected && incrementedSelected < min);
	  };
	
	  $scope.noDecrementHours = function() {
	    var decrementedSelected = addMinutes(selected, -hourStep * 60);
	    return decrementedSelected < min ||
	      (decrementedSelected > selected && decrementedSelected > max);
	  };
	
	  $scope.noIncrementMinutes = function() {
	    var incrementedSelected = addMinutes(selected, minuteStep);
	    return incrementedSelected > max ||
	      (incrementedSelected < selected && incrementedSelected < min);
	  };
	
	  $scope.noDecrementMinutes = function() {
	    var decrementedSelected = addMinutes(selected, -minuteStep);
	    return decrementedSelected < min ||
	      (decrementedSelected > selected && decrementedSelected > max);
	  };
	
	  $scope.noToggleMeridian = function() {
	    if (selected.getHours() < 13) {
	      return addMinutes(selected, 12 * 60) > max;
	    } else {
	      return addMinutes(selected, -12 * 60) < min;
	    }
	  };
	
	  // 12H / 24H mode
	  $scope.showMeridian = timepickerConfig.showMeridian;
	  if ($attrs.showMeridian) {
	    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
	      $scope.showMeridian = !!value;
	
	      if (ngModelCtrl.$error.time) {
	        // Evaluate from template
	        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
	        if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	          selected.setHours(hours);
	          refresh();
	        }
	      } else {
	        updateTemplate();
	      }
	    });
	  }
	
	  // Get $scope.hours in 24H mode if valid
	  function getHoursFromTemplate() {
	    var hours = parseInt($scope.hours, 10);
	    var valid = $scope.showMeridian ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
	    if (!valid) {
	      return undefined;
	    }
	
	    if ($scope.showMeridian) {
	      if (hours === 12) {
	        hours = 0;
	      }
	      if ($scope.meridian === meridians[1]) {
	        hours = hours + 12;
	      }
	    }
	    return hours;
	  }
	
	  function getMinutesFromTemplate() {
	    var minutes = parseInt($scope.minutes, 10);
	    return (minutes >= 0 && minutes < 60) ? minutes : undefined;
	  }
	
	  function pad(value) {
	    return (angular.isDefined(value) && value.toString().length < 2) ? '0' + value : value.toString();
	  }
	
	  // Respond on mousewheel spin
	  this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl) {
	    var isScrollingUp = function(e) {
	      if (e.originalEvent) {
	        e = e.originalEvent;
	      }
	      //pick correct delta variable depending on event
	      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
	      return (e.detail || delta > 0);
	    };
	
	    hoursInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
	      e.preventDefault();
	    });
	
	    minutesInputEl.bind('mousewheel wheel', function(e) {
	      $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
	      e.preventDefault();
	    });
	
	  };
	
	  // Respond on up/down arrowkeys
	  this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl) {
	    hoursInputEl.bind('keydown', function(e) {
	      if (e.which === 38) { // up
	        e.preventDefault();
	        $scope.incrementHours();
	        $scope.$apply();
	      } else if (e.which === 40) { // down
	        e.preventDefault();
	        $scope.decrementHours();
	        $scope.$apply();
	      }
	    });
	
	    minutesInputEl.bind('keydown', function(e) {
	      if (e.which === 38) { // up
	        e.preventDefault();
	        $scope.incrementMinutes();
	        $scope.$apply();
	      } else if (e.which === 40) { // down
	        e.preventDefault();
	        $scope.decrementMinutes();
	        $scope.$apply();
	      }
	    });
	  };
	
	  this.setupInputEvents = function(hoursInputEl, minutesInputEl) {
	    if ($scope.readonlyInput) {
	      $scope.updateHours = angular.noop;
	      $scope.updateMinutes = angular.noop;
	      return;
	    }
	
	    var invalidate = function(invalidHours, invalidMinutes) {
	      ngModelCtrl.$setViewValue(null);
	      ngModelCtrl.$setValidity('time', false);
	      if (angular.isDefined(invalidHours)) {
	        $scope.invalidHours = invalidHours;
	      }
	      if (angular.isDefined(invalidMinutes)) {
	        $scope.invalidMinutes = invalidMinutes;
	      }
	    };
	
	    $scope.updateHours = function() {
	      var hours = getHoursFromTemplate(),
	        minutes = getMinutesFromTemplate();
	
	      if (angular.isDefined(hours) && angular.isDefined(minutes)) {
	        selected.setHours(hours);
	        if (selected < min || selected > max) {
	          invalidate(true);
	        } else {
	          refresh('h');
	        }
	      } else {
	        invalidate(true);
	      }
	    };
	
	    hoursInputEl.bind('blur', function(e) {
	      if (!$scope.invalidHours && $scope.hours < 10) {
	        $scope.$apply(function() {
	          $scope.hours = pad($scope.hours);
	        });
	      }
	    });
	
	    $scope.updateMinutes = function() {
	      var minutes = getMinutesFromTemplate(),
	        hours = getHoursFromTemplate();
	
	      if (angular.isDefined(minutes) && angular.isDefined(hours)) {
	        selected.setMinutes(minutes);
	        if (selected < min || selected > max) {
	          invalidate(undefined, true);
	        } else {
	          refresh('m');
	        }
	      } else {
	        invalidate(undefined, true);
	      }
	    };
	
	    minutesInputEl.bind('blur', function(e) {
	      if (!$scope.invalidMinutes && $scope.minutes < 10) {
	        $scope.$apply(function() {
	          $scope.minutes = pad($scope.minutes);
	        });
	      }
	    });
	
	  };
	
	  this.render = function() {
	    var date = ngModelCtrl.$viewValue;
	
	    if (isNaN(date)) {
	      ngModelCtrl.$setValidity('time', false);
	      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
	    } else {
	      if (date) {
	        selected = date;
	      }
	
	      if (selected < min || selected > max) {
	        ngModelCtrl.$setValidity('time', false);
	        $scope.invalidHours = true;
	        $scope.invalidMinutes = true;
	      } else {
	        makeValid();
	      }
	      updateTemplate();
	    }
	  };
	
	  // Call internally when we know that model is valid.
	  function refresh(keyboardChange) {
	    makeValid();
	    ngModelCtrl.$setViewValue(new Date(selected));
	    updateTemplate(keyboardChange);
	  }
	
	  function makeValid() {
	    ngModelCtrl.$setValidity('time', true);
	    $scope.invalidHours = false;
	    $scope.invalidMinutes = false;
	  }
	
	  function updateTemplate(keyboardChange) {
	    var hours = selected.getHours(), minutes = selected.getMinutes();
	
	    if ($scope.showMeridian) {
	      hours = (hours === 0 || hours === 12) ? 12 : hours % 12; // Convert 24 to 12 hour system
	    }
	
	    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
	    if (keyboardChange !== 'm') {
	      $scope.minutes = pad(minutes);
	    }
	    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
	  }
	
	  function addMinutes(date, minutes) {
	    var dt = new Date(date.getTime() + minutes * 60000);
	    var newDate = new Date(date);
	    newDate.setHours(dt.getHours(), dt.getMinutes());
	    return newDate;
	  }
	
	  function addMinutesToSelected(minutes) {
	    selected = addMinutes(selected, minutes);
	    refresh();
	  }
	
	  $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
	    $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;
	
	  $scope.incrementHours = function() {
	    if (!$scope.noIncrementHours()) {
	      addMinutesToSelected(hourStep * 60);
	    }
	  };
	
	  $scope.decrementHours = function() {
	    if (!$scope.noDecrementHours()) {
	      addMinutesToSelected(-hourStep * 60);
	    }
	  };
	
	  $scope.incrementMinutes = function() {
	    if (!$scope.noIncrementMinutes()) {
	      addMinutesToSelected(minuteStep);
	    }
	  };
	
	  $scope.decrementMinutes = function() {
	    if (!$scope.noDecrementMinutes()) {
	      addMinutesToSelected(-minuteStep);
	    }
	  };
	
	  $scope.toggleMeridian = function() {
	    if (!$scope.noToggleMeridian()) {
	      addMinutesToSelected(12 * 60 * (selected.getHours() < 12 ? 1 : -1));
	    }
	  };
	}])
	
	.directive('timepicker', function() {
	  return {
	    restrict: 'EA',
	    require: ['timepicker', '?^ngModel'],
	    controller:'TimepickerController',
	    controllerAs: 'timepicker',
	    replace: true,
	    scope: {},
	    templateUrl: function(element, attrs) {
	      return attrs.templateUrl || 'template/timepicker/timepicker.html';
	    },
	    link: function(scope, element, attrs, ctrls) {
	      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
	
	      if (ngModelCtrl) {
	        timepickerCtrl.init(ngModelCtrl, element.find('input'));
	      }
	    }
	  };
	});
	
	angular.module('ui.bootstrap.transition', [])
	
	.value('$transitionSuppressDeprecated', false)
	/**
	 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
	 * @param  {DOMElement} element  The DOMElement that will be animated.
	 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
	 *   - As a string, it represents the css class to be added to the element.
	 *   - As an object, it represents a hash of style attributes to be applied to the element.
	 *   - As a function, it represents a function to be called that will cause the transition to occur.
	 * @return {Promise}  A promise that is resolved when the transition finishes.
	 */
	.factory('$transition', [
	        '$q', '$timeout', '$rootScope', '$log', '$transitionSuppressDeprecated',
	function($q ,  $timeout ,  $rootScope ,  $log ,  $transitionSuppressDeprecated) {
	
	  if (!$transitionSuppressDeprecated) {
	    $log.warn('$transition is now deprecated. Use $animate from ngAnimate instead.');
	  }
	
	  var $transition = function(element, trigger, options) {
	    options = options || {};
	    var deferred = $q.defer();
	    var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];
	
	    var transitionEndHandler = function(event) {
	      $rootScope.$apply(function() {
	        element.unbind(endEventName, transitionEndHandler);
	        deferred.resolve(element);
	      });
	    };
	
	    if (endEventName) {
	      element.bind(endEventName, transitionEndHandler);
	    }
	
	    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
	    $timeout(function() {
	      if ( angular.isString(trigger) ) {
	        element.addClass(trigger);
	      } else if ( angular.isFunction(trigger) ) {
	        trigger(element);
	      } else if ( angular.isObject(trigger) ) {
	        element.css(trigger);
	      }
	      //If browser does not support transitions, instantly resolve
	      if ( !endEventName ) {
	        deferred.resolve(element);
	      }
	    });
	
	    // Add our custom cancel function to the promise that is returned
	    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
	    // i.e. it will therefore never raise a transitionEnd event for that transition
	    deferred.promise.cancel = function() {
	      if ( endEventName ) {
	        element.unbind(endEventName, transitionEndHandler);
	      }
	      deferred.reject('Transition cancelled');
	    };
	
	    return deferred.promise;
	  };
	
	  // Work out the name of the transitionEnd event
	  var transElement = document.createElement('trans');
	  var transitionEndEventNames = {
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'transitionend',
	    'OTransition': 'oTransitionEnd',
	    'transition': 'transitionend'
	  };
	  var animationEndEventNames = {
	    'WebkitTransition': 'webkitAnimationEnd',
	    'MozTransition': 'animationend',
	    'OTransition': 'oAnimationEnd',
	    'transition': 'animationend'
	  };
	  function findEndEventName(endEventNames) {
	    for (var name in endEventNames){
	      if (transElement.style[name] !== undefined) {
	        return endEventNames[name];
	      }
	    }
	  }
	  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
	  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
	  return $transition;
	}]);
	
	angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position'])
	
	/**
	 * A helper service that can parse typeahead's syntax (string provided by users)
	 * Extracted to a separate service for ease of unit testing
	 */
	  .factory('typeaheadParser', ['$parse', function($parse) {
	
	  //                      00000111000000000000022200000000000000003333333333333330000000000044000
	  var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
	
	  return {
	    parse: function(input) {
	      var match = input.match(TYPEAHEAD_REGEXP);
	      if (!match) {
	        throw new Error(
	          'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
	            ' but got "' + input + '".');
	      }
	
	      return {
	        itemName:match[3],
	        source:$parse(match[4]),
	        viewMapper:$parse(match[2] || match[1]),
	        modelMapper:$parse(match[1])
	      };
	    }
	  };
	}])
	
	  .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$window', '$rootScope', '$position', 'typeaheadParser',
	    function($compile, $parse, $q, $timeout, $document, $window, $rootScope, $position, typeaheadParser) {
	    var HOT_KEYS = [9, 13, 27, 38, 40];
	    var eventDebounceTime = 200;
	
	    return {
	      require: ['ngModel', '^?ngModelOptions'],
	      link: function(originalScope, element, attrs, ctrls) {
	        var modelCtrl = ctrls[0];
	        var ngModelOptions = ctrls[1];
	        //SUPPORTED ATTRIBUTES (OPTIONS)
	
	        //minimal no of characters that needs to be entered before typeahead kicks-in
	        var minLength = originalScope.$eval(attrs.typeaheadMinLength);
	        if (!minLength && minLength !== 0) {
	          minLength = 1;
	        }
	
	        //minimal wait time after last character typed before typeahead kicks-in
	        var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;
	
	        //should it restrict model values to the ones selected from the popup only?
	        var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
	
	        //binding to a variable that indicates if matches are being retrieved asynchronously
	        var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
	
	        //a callback executed when a match is selected
	        var onSelectCallback = $parse(attrs.typeaheadOnSelect);
	
	        //should it select highlighted popup value when losing focus?
	        var isSelectOnBlur = angular.isDefined(attrs.typeaheadSelectOnBlur) ? originalScope.$eval(attrs.typeaheadSelectOnBlur) : false;
	
	        //binding to a variable that indicates if there were no results after the query is completed
	        var isNoResultsSetter = $parse(attrs.typeaheadNoResults).assign || angular.noop;
	
	        var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;
	
	        var appendToBody =  attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;
	
	        var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;
	
	        //If input matches an item of the list exactly, select it automatically
	        var selectOnExact = attrs.typeaheadSelectOnExact ? originalScope.$eval(attrs.typeaheadSelectOnExact) : false;
	
	        //INTERNAL VARIABLES
	
	        //model setter executed upon match selection
	        var parsedModel = $parse(attrs.ngModel);
	        var invokeModelSetter = $parse(attrs.ngModel + '($$$p)');
	        var $setModelValue = function(scope, newValue) {
	          if (angular.isFunction(parsedModel(originalScope)) &&
	            ngModelOptions && ngModelOptions.$options && ngModelOptions.$options.getterSetter) {
	            return invokeModelSetter(scope, {$$$p: newValue});
	          } else {
	            return parsedModel.assign(scope, newValue);
	          }
	        };
	
	        //expressions used by typeahead
	        var parserResult = typeaheadParser.parse(attrs.typeahead);
	
	        var hasFocus;
	
	        //Used to avoid bug in iOS webview where iOS keyboard does not fire
	        //mousedown & mouseup events
	        //Issue #3699
	        var selected;
	
	        //create a child scope for the typeahead directive so we are not polluting original scope
	        //with typeahead-specific data (matches, query etc.)
	        var scope = originalScope.$new();
	        var offDestroy = originalScope.$on('$destroy', function() {
				    scope.$destroy();
	        });
	        scope.$on('$destroy', offDestroy);
	
	        // WAI-ARIA
	        var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
	        element.attr({
	          'aria-autocomplete': 'list',
	          'aria-expanded': false,
	          'aria-owns': popupId
	        });
	
	        //pop-up element used to display matches
	        var popUpEl = angular.element('<div typeahead-popup></div>');
	        popUpEl.attr({
	          id: popupId,
	          matches: 'matches',
	          active: 'activeIdx',
	          select: 'select(activeIdx)',
	          'move-in-progress': 'moveInProgress',
	          query: 'query',
	          position: 'position'
	        });
	        //custom item template
	        if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
	          popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
	        }
	
	        if (angular.isDefined(attrs.typeaheadPopupTemplateUrl)) {
	          popUpEl.attr('popup-template-url', attrs.typeaheadPopupTemplateUrl);
	        }
	
	        var resetMatches = function() {
	          scope.matches = [];
	          scope.activeIdx = -1;
	          element.attr('aria-expanded', false);
	        };
	
	        var getMatchId = function(index) {
	          return popupId + '-option-' + index;
	        };
	
	        // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
	        // This attribute is added or removed automatically when the `activeIdx` changes.
	        scope.$watch('activeIdx', function(index) {
	          if (index < 0) {
	            element.removeAttr('aria-activedescendant');
	          } else {
	            element.attr('aria-activedescendant', getMatchId(index));
	          }
	        });
	
	        var inputIsExactMatch = function(inputValue, index) {
	          if (scope.matches.length > index && inputValue) {
	            return inputValue.toUpperCase() === scope.matches[index].label.toUpperCase();
	          }
	
	          return false;
	        };
	
	        var getMatchesAsync = function(inputValue) {
	          var locals = {$viewValue: inputValue};
	          isLoadingSetter(originalScope, true);
	          isNoResultsSetter(originalScope, false);
	          $q.when(parserResult.source(originalScope, locals)).then(function(matches) {
	            //it might happen that several async queries were in progress if a user were typing fast
	            //but we are interested only in responses that correspond to the current view value
	            var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
	            if (onCurrentRequest && hasFocus) {
	              if (matches && matches.length > 0) {
	
	                scope.activeIdx = focusFirst ? 0 : -1;
	                isNoResultsSetter(originalScope, false);
	                scope.matches.length = 0;
	
	                //transform labels
	                for (var i = 0; i < matches.length; i++) {
	                  locals[parserResult.itemName] = matches[i];
	                  scope.matches.push({
	                    id: getMatchId(i),
	                    label: parserResult.viewMapper(scope, locals),
	                    model: matches[i]
	                  });
	                }
	
	                scope.query = inputValue;
	                //position pop-up with matches - we need to re-calculate its position each time we are opening a window
	                //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
	                //due to other elements being rendered
	                recalculatePosition();
	
	                element.attr('aria-expanded', true);
	
	                //Select the single remaining option if user input matches
	                if (selectOnExact && scope.matches.length === 1 && inputIsExactMatch(inputValue, 0)) {
	                  scope.select(0);
	                }
	              } else {
	                resetMatches();
	                isNoResultsSetter(originalScope, true);
	              }
	            }
	            if (onCurrentRequest) {
	              isLoadingSetter(originalScope, false);
	            }
	          }, function() {
	            resetMatches();
	            isLoadingSetter(originalScope, false);
	            isNoResultsSetter(originalScope, true);
	          });
	        };
	
	        // bind events only if appendToBody params exist - performance feature
	        if (appendToBody) {
	          angular.element($window).bind('resize', fireRecalculating);
	          $document.find('body').bind('scroll', fireRecalculating);
	        }
	
	        // Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	        var timeoutEventPromise;
	
	        // Default progress type
	        scope.moveInProgress = false;
	
	        function fireRecalculating() {
	          if (!scope.moveInProgress) {
	            scope.moveInProgress = true;
	            scope.$digest();
	          }
	
	          // Cancel previous timeout
	          if (timeoutEventPromise) {
	            $timeout.cancel(timeoutEventPromise);
	          }
	
	          // Debounced executing recalculate after events fired
	          timeoutEventPromise = $timeout(function() {
	            // if popup is visible
	            if (scope.matches.length) {
	              recalculatePosition();
	            }
	
	            scope.moveInProgress = false;
	            scope.$digest();
	          }, eventDebounceTime);
	        }
	
	        // recalculate actual position and set new values to scope
	        // after digest loop is popup in right position
	        function recalculatePosition() {
	          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
	          scope.position.top += element.prop('offsetHeight');
	        }
	
	        resetMatches();
	
	        //we need to propagate user's query so we can higlight matches
	        scope.query = undefined;
	
	        //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
	        var timeoutPromise;
	
	        var scheduleSearchWithTimeout = function(inputValue) {
	          timeoutPromise = $timeout(function() {
	            getMatchesAsync(inputValue);
	          }, waitTime);
	        };
	
	        var cancelPreviousTimeout = function() {
	          if (timeoutPromise) {
	            $timeout.cancel(timeoutPromise);
	          }
	        };
	
	        //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
	        //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
	        modelCtrl.$parsers.unshift(function(inputValue) {
	          hasFocus = true;
	
	          if (minLength === 0 || inputValue && inputValue.length >= minLength) {
	            if (waitTime > 0) {
	              cancelPreviousTimeout();
	              scheduleSearchWithTimeout(inputValue);
	            } else {
	              getMatchesAsync(inputValue);
	            }
	          } else {
	            isLoadingSetter(originalScope, false);
	            cancelPreviousTimeout();
	            resetMatches();
	          }
	
	          if (isEditable) {
	            return inputValue;
	          } else {
	            if (!inputValue) {
	              // Reset in case user had typed something previously.
	              modelCtrl.$setValidity('editable', true);
	              return null;
	            } else {
	              modelCtrl.$setValidity('editable', false);
	              return undefined;
	            }
	          }
	        });
	
	        modelCtrl.$formatters.push(function(modelValue) {
	          var candidateViewValue, emptyViewValue;
	          var locals = {};
	
	          // The validity may be set to false via $parsers (see above) if
	          // the model is restricted to selected values. If the model
	          // is set manually it is considered to be valid.
	          if (!isEditable) {
	            modelCtrl.$setValidity('editable', true);
	          }
	
	          if (inputFormatter) {
	            locals.$model = modelValue;
	            return inputFormatter(originalScope, locals);
	          } else {
	            //it might happen that we don't have enough info to properly render input value
	            //we need to check for this situation and simply return model value if we can't apply custom formatting
	            locals[parserResult.itemName] = modelValue;
	            candidateViewValue = parserResult.viewMapper(originalScope, locals);
	            locals[parserResult.itemName] = undefined;
	            emptyViewValue = parserResult.viewMapper(originalScope, locals);
	
	            return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
	          }
	        });
	
	        scope.select = function(activeIdx) {
	          //called from within the $digest() cycle
	          var locals = {};
	          var model, item;
	
	          selected = true;
	          locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
	          model = parserResult.modelMapper(originalScope, locals);
	          $setModelValue(originalScope, model);
	          modelCtrl.$setValidity('editable', true);
	          modelCtrl.$setValidity('parse', true);
	
	          onSelectCallback(originalScope, {
	            $item: item,
	            $model: model,
	            $label: parserResult.viewMapper(originalScope, locals)
	          });
	
	          resetMatches();
	
	          //return focus to the input element if a match was selected via a mouse click event
	          // use timeout to avoid $rootScope:inprog error
	          if (scope.$eval(attrs.typeaheadFocusOnSelect) !== false) {
	            $timeout(function() { element[0].focus(); }, 0, false);
	          }
	        };
	
	        //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
	        element.bind('keydown', function(evt) {
	          //typeahead is open and an "interesting" key was pressed
	          if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
	            return;
	          }
	
	          // if there's nothing selected (i.e. focusFirst) and enter or tab is hit, clear the results
	          if (scope.activeIdx === -1 && (evt.which === 9 || evt.which === 13)) {
	            resetMatches();
	            scope.$digest();
	            return;
	          }
	
	          evt.preventDefault();
	
	          if (evt.which === 40) {
	            scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
	            scope.$digest();
	
	          } else if (evt.which === 38) {
	            scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
	            scope.$digest();
	
	          } else if (evt.which === 13 || evt.which === 9) {
	            scope.$apply(function () {
	              scope.select(scope.activeIdx);
	            });
	
	          } else if (evt.which === 27) {
	            evt.stopPropagation();
	
	            resetMatches();
	            scope.$digest();
	          }
	        });
	
	        element.bind('blur', function() {
	          if (isSelectOnBlur && scope.matches.length && scope.activeIdx !== -1 && !selected) {
	            selected = true;
	            scope.$apply(function() {
	              scope.select(scope.activeIdx);
	            });
	          }
	          hasFocus = false;
	          selected = false;
	        });
	
	        // Keep reference to click handler to unbind it.
	        var dismissClickHandler = function(evt) {
	          // Issue #3973
	          // Firefox treats right click as a click on document
	          if (element[0] !== evt.target && evt.which !== 3 && scope.matches.length !== 0) {
	            resetMatches();
	            if (!$rootScope.$$phase) {
	              scope.$digest();
	            }
	          }
	        };
	
	        $document.bind('click', dismissClickHandler);
	
	        originalScope.$on('$destroy', function() {
	          $document.unbind('click', dismissClickHandler);
	          if (appendToBody) {
	            $popup.remove();
	          }
	          // Prevent jQuery cache memory leak
	          popUpEl.remove();
	        });
	
	        var $popup = $compile(popUpEl)(scope);
	
	        if (appendToBody) {
	          $document.find('body').append($popup);
	        } else {
	          element.after($popup);
	        }
	      }
	    };
	
	  }])
	
	  .directive('typeaheadPopup', function() {
	    return {
	      restrict: 'EA',
	      scope: {
	        matches: '=',
	        query: '=',
	        active: '=',
	        position: '&',
	        moveInProgress: '=',
	        select: '&'
	      },
	      replace: true,
	      templateUrl: function(element, attrs) {
	        return attrs.popupTemplateUrl || 'template/typeahead/typeahead-popup.html';
	      },
	      link: function(scope, element, attrs) {
	        scope.templateUrl = attrs.templateUrl;
	
	        scope.isOpen = function() {
	          return scope.matches.length > 0;
	        };
	
	        scope.isActive = function(matchIdx) {
	          return scope.active == matchIdx;
	        };
	
	        scope.selectActive = function(matchIdx) {
	          scope.active = matchIdx;
	        };
	
	        scope.selectMatch = function(activeIdx) {
	          scope.select({activeIdx:activeIdx});
	        };
	      }
	    };
	  })
	
	  .directive('typeaheadMatch', ['$templateRequest', '$compile', '$parse', function($templateRequest, $compile, $parse) {
	    return {
	      restrict: 'EA',
	      scope: {
	        index: '=',
	        match: '=',
	        query: '='
	      },
	      link:function(scope, element, attrs) {
	        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
	        $templateRequest(tplUrl).then(function(tplContent) {
	          $compile(tplContent.trim())(scope, function(clonedElement) {
	            element.replaceWith(clonedElement);
	          });
	        });
	      }
	    };
	  }])
	
	  .filter('typeaheadHighlight', ['$sce', '$injector', '$log', function($sce, $injector, $log) {
	    var isSanitizePresent;
	    isSanitizePresent = $injector.has('$sanitize');
	
	    function escapeRegexp(queryToEscape) {
	      // Regex: capture the whole query string and replace it with the string that will be used to match
	      // the results, for example if the capture is "a" the result will be \a
	      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	    }
	
	    function containsHtml(matchItem) {
	      return /<.*>/g.test(matchItem);
	    }
	
	    return function(matchItem, query) {
	      if (!isSanitizePresent && containsHtml(matchItem)) {
	        $log.warn('Unsafe use of typeahead please use ngSanitize'); // Warn the user about the danger
	      }
	      matchItem = query? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem; // Replaces the capture string with a the same string inside of a "strong" tag
	      if (!isSanitizePresent) {
	        matchItem = $sce.trustAsHtml(matchItem); // If $sanitize is not present we pack the string in a $sce object for the ng-bind-html directive
	      }
	      return matchItem;
	    };
	  }]);
	
	angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/accordion/accordion-group.html",
	    "<div class=\"panel {{panelClass || 'panel-default'}}\">\n" +
	    "  <div class=\"panel-heading\" ng-keypress=\"toggleOpen($event)\">\n" +
	    "    <h4 class=\"panel-title\">\n" +
	    "      <a href tabindex=\"0\" class=\"accordion-toggle\" ng-click=\"toggleOpen()\" accordion-transclude=\"heading\"><span ng-class=\"{'text-muted': isDisabled}\">{{heading}}</span></a>\n" +
	    "    </h4>\n" +
	    "  </div>\n" +
	    "  <div class=\"panel-collapse collapse\" collapse=\"!isOpen\">\n" +
	    "	  <div class=\"panel-body\" ng-transclude></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/accordion/accordion.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/accordion/accordion.html",
	    "<div class=\"panel-group\" ng-transclude></div>");
	}]);
	
	angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/alert/alert.html",
	    "<div class=\"alert\" ng-class=\"['alert-' + (type || 'warning'), closeable ? 'alert-dismissible' : null]\" role=\"alert\">\n" +
	    "    <button ng-show=\"closeable\" type=\"button\" class=\"close\" ng-click=\"close($event)\">\n" +
	    "        <span aria-hidden=\"true\">&times;</span>\n" +
	    "        <span class=\"sr-only\">Close</span>\n" +
	    "    </button>\n" +
	    "    <div ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/carousel/carousel.html",
	    "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\" ng-swipe-right=\"prev()\" ng-swipe-left=\"next()\">\n" +
	    "    <ol class=\"carousel-indicators\" ng-show=\"slides.length > 1\">\n" +
	    "        <li ng-repeat=\"slide in slides | orderBy:indexOfSlide track by $index\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>\n" +
	    "    </ol>\n" +
	    "    <div class=\"carousel-inner\" ng-transclude></div>\n" +
	    "    <a class=\"left carousel-control\" ng-click=\"prev()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n" +
	    "    <a class=\"right carousel-control\" ng-click=\"next()\" ng-show=\"slides.length > 1\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/carousel/slide.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/carousel/slide.html",
	    "<div ng-class=\"{\n" +
	    "    'active': active\n" +
	    "  }\" class=\"item text-center\" ng-transclude></div>\n" +
	    "");
	}]);
	
	angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/datepicker.html",
	    "<div ng-switch=\"datepickerMode\" role=\"application\" ng-keydown=\"keydown($event)\">\n" +
	    "  <daypicker ng-switch-when=\"day\" tabindex=\"0\"></daypicker>\n" +
	    "  <monthpicker ng-switch-when=\"month\" tabindex=\"0\"></monthpicker>\n" +
	    "  <yearpicker ng-switch-when=\"year\" tabindex=\"0\"></yearpicker>\n" +
	    "</div>");
	}]);
	
	angular.module("template/datepicker/day.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/day.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"{{::5 + showWeeks}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <th ng-if=\"showWeeks\" class=\"text-center\"></th>\n" +
	    "      <th ng-repeat=\"label in ::labels track by $index\" class=\"text-center\"><small aria-label=\"{{::label.full}}\">{{::label.abbr}}</small></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-if=\"showWeeks\" class=\"text-center h6\"><em>{{ weekNumbers[$index] }}</em></td>\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default btn-sm\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-muted': dt.secondary, 'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);
	
	angular.module("template/datepicker/month.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/month.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\" ng-class=\"::dt.customClass\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);
	
	angular.module("template/datepicker/popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/popup.html",
	    "<ul class=\"dropdown-menu\" ng-if=\"isOpen\" style=\"display: block\" ng-style=\"{top: position.top+'px', left: position.left+'px'}\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
	    "	<li ng-transclude></li>\n" +
	    "	<li ng-if=\"showButtonBar\" style=\"padding:10px 9px 2px\">\n" +
	    "		<span class=\"btn-group pull-left\">\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-info\" ng-click=\"select('today')\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
	    "			<button type=\"button\" class=\"btn btn-sm btn-danger\" ng-click=\"select(null)\">{{ getText('clear') }}</button>\n" +
	    "		</span>\n" +
	    "		<button type=\"button\" class=\"btn btn-sm btn-success pull-right\" ng-click=\"close()\">{{ getText('close') }}</button>\n" +
	    "	</li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	
	angular.module("template/datepicker/year.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/datepicker/year.html",
	    "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
	    "  <thead>\n" +
	    "    <tr>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
	    "      <th colspan=\"3\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\" style=\"width:100%;\"><strong>{{title}}</strong></button></th>\n" +
	    "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
	    "    </tr>\n" +
	    "  </thead>\n" +
	    "  <tbody>\n" +
	    "    <tr ng-repeat=\"row in rows track by $index\">\n" +
	    "      <td ng-repeat=\"dt in row track by dt.date\" class=\"text-center\" role=\"gridcell\" id=\"{{::dt.uid}}\">\n" +
	    "        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\" ng-class=\"{'btn-info': dt.selected, active: isActive(dt)}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled\" tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
	    "      </td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);
	
	angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/modal/backdrop.html",
	    "<div class=\"modal-backdrop\"\n" +
	    "     modal-animation-class=\"fade\"\n" +
	    "     modal-in-class=\"in\"\n" +
	    "     ng-style=\"{'z-index': 1040 + (index && 1 || 0) + index*10}\"\n" +
	    "></div>\n" +
	    "");
	}]);
	
	angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/modal/window.html",
	    "<div modal-render=\"{{$isRendered}}\" tabindex=\"-1\" role=\"dialog\" class=\"modal\"\n" +
	    "    modal-animation-class=\"fade\"\n" +
	    "    modal-in-class=\"in\"\n" +
	    "	ng-style=\"{'z-index': 1050 + index*10, display: 'block'}\" ng-click=\"close($event)\">\n" +
	    "    <div class=\"modal-dialog\" ng-class=\"size ? 'modal-' + size : ''\"><div class=\"modal-content\" modal-transclude></div></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/pagination/pager.html",
	    "<ul class=\"pager\">\n" +
	    "  <li ng-class=\"{disabled: noPrevious()||ngDisabled, previous: align}\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-class=\"{disabled: noNext()||ngDisabled, next: align}\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	
	angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/pagination/pagination.html",
	    "<ul class=\"pagination\">\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-first\"><a href ng-click=\"selectPage(1, $event)\">{{::getText('first')}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noPrevious()||ngDisabled}\" class=\"pagination-prev\"><a href ng-click=\"selectPage(page - 1, $event)\">{{::getText('previous')}}</a></li>\n" +
	    "  <li ng-repeat=\"page in pages track by $index\" ng-class=\"{active: page.active,disabled: ngDisabled&&!page.active}\" class=\"pagination-page\"><a href ng-click=\"selectPage(page.number, $event)\">{{page.text}}</a></li>\n" +
	    "  <li ng-if=\"::directionLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-next\"><a href ng-click=\"selectPage(page + 1, $event)\">{{::getText('next')}}</a></li>\n" +
	    "  <li ng-if=\"::boundaryLinks\" ng-class=\"{disabled: noNext()||ngDisabled}\" class=\"pagination-last\"><a href ng-click=\"selectPage(totalPages, $event)\">{{::getText('last')}}</a></li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	
	angular.module("template/tooltip/tooltip-html-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-html-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-html-unsafe-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" bind-html-unsafe=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\" ng-bind=\"content\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/tooltip/tooltip-template-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tooltip/tooltip-template-popup.html",
	    "<div class=\"tooltip\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"tooltip-arrow\"></div>\n" +
	    "  <div class=\"tooltip-inner\"\n" +
	    "    tooltip-template-transclude=\"contentExp()\"\n" +
	    "    tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/popover/popover-html.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover-html.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind-html=\"contentExp()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/popover/popover-template.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover-template.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\"\n" +
	    "        tooltip-template-transclude=\"contentExp()\"\n" +
	    "        tooltip-template-transclude-scope=\"originScope()\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/popover/popover.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/popover/popover.html",
	    "<div class=\"popover\"\n" +
	    "  tooltip-animation-class=\"fade\"\n" +
	    "  tooltip-classes\n" +
	    "  ng-class=\"{ in: isOpen() }\">\n" +
	    "  <div class=\"arrow\"></div>\n" +
	    "\n" +
	    "  <div class=\"popover-inner\">\n" +
	    "      <h3 class=\"popover-title\" ng-bind=\"title\" ng-if=\"title\"></h3>\n" +
	    "      <div class=\"popover-content\" ng-bind=\"content\"></div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/bar.html",
	    "<div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" style=\"min-width: 0;\" ng-transclude></div>\n" +
	    "");
	}]);
	
	angular.module("template/progressbar/progress.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/progress.html",
	    "<div class=\"progress\" ng-transclude></div>");
	}]);
	
	angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/progressbar/progressbar.html",
	    "<div class=\"progress\">\n" +
	    "  <div class=\"progress-bar\" ng-class=\"type && 'progress-bar-' + type\" role=\"progressbar\" aria-valuenow=\"{{value}}\" aria-valuemin=\"0\" aria-valuemax=\"{{max}}\" ng-style=\"{width: (percent < 100 ? percent : 100) + '%'}\" aria-valuetext=\"{{percent | number:0}}%\" style=\"min-width: 0;\" ng-transclude></div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/rating/rating.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/rating/rating.html",
	    "<span ng-mouseleave=\"reset()\" ng-keydown=\"onKeydown($event)\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"0\" aria-valuemax=\"{{range.length}}\" aria-valuenow=\"{{value}}\">\n" +
	    "    <span ng-repeat-start=\"r in range track by $index\" class=\"sr-only\">({{ $index < value ? '*' : ' ' }})</span>\n" +
	    "    <i ng-repeat-end ng-mouseenter=\"enter($index + 1)\" ng-click=\"rate($index + 1)\" class=\"glyphicon\" ng-class=\"$index < value && (r.stateOn || 'glyphicon-star') || (r.stateOff || 'glyphicon-star-empty')\" ng-attr-title=\"{{r.title}}\" ></i>\n" +
	    "</span>\n" +
	    "");
	}]);
	
	angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tabs/tab.html",
	    "<li ng-class=\"{active: active, disabled: disabled}\">\n" +
	    "  <a href ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
	    "</li>\n" +
	    "");
	}]);
	
	angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/tabs/tabset.html",
	    "<div>\n" +
	    "  <ul class=\"nav nav-{{type || 'tabs'}}\" ng-class=\"{'nav-stacked': vertical, 'nav-justified': justified}\" ng-transclude></ul>\n" +
	    "  <div class=\"tab-content\">\n" +
	    "    <div class=\"tab-pane\" \n" +
	    "         ng-repeat=\"tab in tabs\" \n" +
	    "         ng-class=\"{active: tab.active}\"\n" +
	    "         tab-content-transclude=\"tab\">\n" +
	    "    </div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);
	
	angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/timepicker/timepicker.html",
	    "<table>\n" +
	    "  <tbody>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "    <tr>\n" +
	    "      <td class=\"form-group\" ng-class=\"{'has-error': invalidHours}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\">\n" +
	    "      </td>\n" +
	    "      <td>:</td>\n" +
	    "      <td class=\"form-group\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
	    "        <input style=\"width:50px;\" type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\">\n" +
	    "      </td>\n" +
	    "      <td ng-show=\"showMeridian\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\">{{meridian}}</button></td>\n" +
	    "    </tr>\n" +
	    "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
	    "      <td><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td>&nbsp;</td>\n" +
	    "      <td><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
	    "      <td ng-show=\"showMeridian\"></td>\n" +
	    "    </tr>\n" +
	    "  </tbody>\n" +
	    "</table>\n" +
	    "");
	}]);
	
	angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/typeahead/typeahead-match.html",
	    "<a href tabindex=\"-1\" ng-bind-html=\"match.label | typeaheadHighlight:query\"></a>\n" +
	    "");
	}]);
	
	angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("template/typeahead/typeahead-popup.html",
	    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\" ng-style=\"{top: position().top+'px', left: position().left+'px'}\" style=\"display: block;\" role=\"listbox\" aria-hidden=\"{{!isOpen()}}\">\n" +
	    "    <li ng-repeat=\"match in matches track by $index\" ng-class=\"{active: isActive($index) }\" ng-mouseenter=\"selectActive($index)\" ng-click=\"selectMatch($index)\" role=\"option\" id=\"{{::match.id}}\">\n" +
	    "        <div typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>\n" +
	    "    </li>\n" +
	    "</ul>\n" +
	    "");
	}]);
	!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	module.exports = 'ngSanitize';


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.4.7
	 * (c) 2010-2015 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular, undefined) {'use strict';
	
	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 *     Any commits to this file should be reviewed with security in mind.  *
	 *   Changes to this file can potentially create security vulnerabilities. *
	 *          An approval from 2 Core members with history of modifying      *
	 *                         this file is required.                          *
	 *                                                                         *
	 *  Does the change somehow allow for arbitrary javascript to be executed? *
	 *    Or allows for someone to change the prototype of built-in objects?   *
	 *     Or gives undesired access to variables likes document or window?    *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
	
	var $sanitizeMinErr = angular.$$minErr('$sanitize');
	
	/**
	 * @ngdoc module
	 * @name ngSanitize
	 * @description
	 *
	 * # ngSanitize
	 *
	 * The `ngSanitize` module provides functionality to sanitize HTML.
	 *
	 *
	 * <div doc-module-components="ngSanitize"></div>
	 *
	 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
	 */
	
	/*
	 * HTML Parser By Misko Hevery (misko@hevery.com)
	 * based on:  HTML Parser By John Resig (ejohn.org)
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 *
	 * // Use like so:
	 * htmlParser(htmlString, {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * });
	 *
	 */
	
	
	/**
	 * @ngdoc service
	 * @name $sanitize
	 * @kind function
	 *
	 * @description
	 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
	 *   then serialized back to properly escaped html string. This means that no unsafe input can make
	 *   it into the returned string, however, since our parser is more strict than a typical browser
	 *   parser, it's possible that some obscure input, which would be recognized as valid HTML by a
	 *   browser, won't make it through the sanitizer. The input may also contain SVG markup.
	 *   The whitelist is configured using the functions `aHrefSanitizationWhitelist` and
	 *   `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider `$compileProvider`}.
	 *
	 * @param {string} html HTML input.
	 * @returns {string} Sanitized HTML.
	 *
	 * @example
	   <example module="sanitizeExample" deps="angular-sanitize.js">
	   <file name="index.html">
	     <script>
	         angular.module('sanitizeExample', ['ngSanitize'])
	           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
	             $scope.snippet =
	               '<p style="color:blue">an html\n' +
	               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
	               'snippet</p>';
	             $scope.deliberatelyTrustDangerousSnippet = function() {
	               return $sce.trustAsHtml($scope.snippet);
	             };
	           }]);
	     </script>
	     <div ng-controller="ExampleController">
	        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <td>Directive</td>
	           <td>How</td>
	           <td>Source</td>
	           <td>Rendered</td>
	         </tr>
	         <tr id="bind-html-with-sanitize">
	           <td>ng-bind-html</td>
	           <td>Automatically uses $sanitize</td>
	           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind-html="snippet"></div></td>
	         </tr>
	         <tr id="bind-html-with-trust">
	           <td>ng-bind-html</td>
	           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
	           <td>
	           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
	&lt;/div&gt;</pre>
	           </td>
	           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
	         </tr>
	         <tr id="bind-default">
	           <td>ng-bind</td>
	           <td>Automatically escapes</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	       </div>
	   </file>
	   <file name="protractor.js" type="protractor">
	     it('should sanitize the html snippet by default', function() {
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
	     });
	
	     it('should inline raw snippet if bound to a trusted value', function() {
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
	         toBe("<p style=\"color:blue\">an html\n" +
	              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
	              "snippet</p>");
	     });
	
	     it('should escape snippet without any filter', function() {
	       expect(element(by.css('#bind-default div')).getInnerHtml()).
	         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
	              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
	              "snippet&lt;/p&gt;");
	     });
	
	     it('should update', function() {
	       element(by.model('snippet')).clear();
	       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('new <b>text</b>');
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
	         'new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
	         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
	     });
	   </file>
	   </example>
	 */
	function $SanitizeProvider() {
	  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
	    return function(html) {
	      var buf = [];
	      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
	        return !/^unsafe/.test($$sanitizeUri(uri, isImage));
	      }));
	      return buf.join('');
	    };
	  }];
	}
	
	function sanitizeText(chars) {
	  var buf = [];
	  var writer = htmlSanitizeWriter(buf, angular.noop);
	  writer.chars(chars);
	  return buf.join('');
	}
	
	
	// Regular Expressions for parsing tags and attributes
	var START_TAG_REGEXP =
	       /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
	  END_TAG_REGEXP = /^<\/\s*([\w:-]+)[^>]*>/,
	  ATTR_REGEXP = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
	  BEGIN_TAG_REGEXP = /^</,
	  BEGING_END_TAGE_REGEXP = /^<\//,
	  COMMENT_REGEXP = /<!--(.*?)-->/g,
	  DOCTYPE_REGEXP = /<!DOCTYPE([^>]*?)>/i,
	  CDATA_REGEXP = /<!\[CDATA\[(.*?)]]>/g,
	  SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
	  // Match everything outside of normal chars and " (quote character)
	  NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;
	
	
	// Good source of info about elements and attributes
	// http://dev.w3.org/html5/spec/Overview.html#semantics
	// http://simon.html5.org/html-elements
	
	// Safe Void Elements - HTML5
	// http://dev.w3.org/html5/spec/Overview.html#void-elements
	var voidElements = makeMap("area,br,col,hr,img,wbr");
	
	// Elements that you can, intentionally, leave open (and which close themselves)
	// http://dev.w3.org/html5/spec/Overview.html#optional-tags
	var optionalEndTagBlockElements = makeMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
	    optionalEndTagInlineElements = makeMap("rp,rt"),
	    optionalEndTagElements = angular.extend({},
	                                            optionalEndTagInlineElements,
	                                            optionalEndTagBlockElements);
	
	// Safe Block Elements - HTML5
	var blockElements = angular.extend({}, optionalEndTagBlockElements, makeMap("address,article," +
	        "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
	        "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul"));
	
	// Inline Elements - HTML5
	var inlineElements = angular.extend({}, optionalEndTagInlineElements, makeMap("a,abbr,acronym,b," +
	        "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
	        "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
	
	// SVG Elements
	// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
	// Note: the elements animate,animateColor,animateMotion,animateTransform,set are intentionally omitted.
	// They can potentially allow for arbitrary javascript to be executed. See #11290
	var svgElements = makeMap("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph," +
	        "hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline," +
	        "radialGradient,rect,stop,svg,switch,text,title,tspan,use");
	
	// Special Elements (can contain anything)
	var specialElements = makeMap("script,style");
	
	var validElements = angular.extend({},
	                                   voidElements,
	                                   blockElements,
	                                   inlineElements,
	                                   optionalEndTagElements,
	                                   svgElements);
	
	//Attributes that have href and hence need to be sanitized
	var uriAttrs = makeMap("background,cite,href,longdesc,src,usemap,xlink:href");
	
	var htmlAttrs = makeMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
	    'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
	    'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
	    'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' +
	    'valign,value,vspace,width');
	
	// SVG attributes (without "id" and "name" attributes)
	// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
	var svgAttrs = makeMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
	    'baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,' +
	    'cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,' +
	    'font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,' +
	    'height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,' +
	    'marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,' +
	    'max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,' +
	    'path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,' +
	    'requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,' +
	    'stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,' +
	    'stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,' +
	    'stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,' +
	    'underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,' +
	    'width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,' +
	    'xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan', true);
	
	var validAttrs = angular.extend({},
	                                uriAttrs,
	                                svgAttrs,
	                                htmlAttrs);
	
	function makeMap(str, lowercaseKeys) {
	  var obj = {}, items = str.split(','), i;
	  for (i = 0; i < items.length; i++) {
	    obj[lowercaseKeys ? angular.lowercase(items[i]) : items[i]] = true;
	  }
	  return obj;
	}
	
	
	/**
	 * @example
	 * htmlParser(htmlString, {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * });
	 *
	 * @param {string} html string
	 * @param {object} handler
	 */
	function htmlParser(html, handler) {
	  if (typeof html !== 'string') {
	    if (html === null || typeof html === 'undefined') {
	      html = '';
	    } else {
	      html = '' + html;
	    }
	  }
	  var index, chars, match, stack = [], last = html, text;
	  stack.last = function() { return stack[stack.length - 1]; };
	
	  while (html) {
	    text = '';
	    chars = true;
	
	    // Make sure we're not in a script or style element
	    if (!stack.last() || !specialElements[stack.last()]) {
	
	      // Comment
	      if (html.indexOf("<!--") === 0) {
	        // comments containing -- are not allowed unless they terminate the comment
	        index = html.indexOf("--", 4);
	
	        if (index >= 0 && html.lastIndexOf("-->", index) === index) {
	          if (handler.comment) handler.comment(html.substring(4, index));
	          html = html.substring(index + 3);
	          chars = false;
	        }
	      // DOCTYPE
	      } else if (DOCTYPE_REGEXP.test(html)) {
	        match = html.match(DOCTYPE_REGEXP);
	
	        if (match) {
	          html = html.replace(match[0], '');
	          chars = false;
	        }
	      // end tag
	      } else if (BEGING_END_TAGE_REGEXP.test(html)) {
	        match = html.match(END_TAG_REGEXP);
	
	        if (match) {
	          html = html.substring(match[0].length);
	          match[0].replace(END_TAG_REGEXP, parseEndTag);
	          chars = false;
	        }
	
	      // start tag
	      } else if (BEGIN_TAG_REGEXP.test(html)) {
	        match = html.match(START_TAG_REGEXP);
	
	        if (match) {
	          // We only have a valid start-tag if there is a '>'.
	          if (match[4]) {
	            html = html.substring(match[0].length);
	            match[0].replace(START_TAG_REGEXP, parseStartTag);
	          }
	          chars = false;
	        } else {
	          // no ending tag found --- this piece should be encoded as an entity.
	          text += '<';
	          html = html.substring(1);
	        }
	      }
	
	      if (chars) {
	        index = html.indexOf("<");
	
	        text += index < 0 ? html : html.substring(0, index);
	        html = index < 0 ? "" : html.substring(index);
	
	        if (handler.chars) handler.chars(decodeEntities(text));
	      }
	
	    } else {
	      // IE versions 9 and 10 do not understand the regex '[^]', so using a workaround with [\W\w].
	      html = html.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + stack.last() + "[^>]*>", 'i'),
	        function(all, text) {
	          text = text.replace(COMMENT_REGEXP, "$1").replace(CDATA_REGEXP, "$1");
	
	          if (handler.chars) handler.chars(decodeEntities(text));
	
	          return "";
	      });
	
	      parseEndTag("", stack.last());
	    }
	
	    if (html == last) {
	      throw $sanitizeMinErr('badparse', "The sanitizer was unable to parse the following block " +
	                                        "of html: {0}", html);
	    }
	    last = html;
	  }
	
	  // Clean up any remaining tags
	  parseEndTag();
	
	  function parseStartTag(tag, tagName, rest, unary) {
	    tagName = angular.lowercase(tagName);
	    if (blockElements[tagName]) {
	      while (stack.last() && inlineElements[stack.last()]) {
	        parseEndTag("", stack.last());
	      }
	    }
	
	    if (optionalEndTagElements[tagName] && stack.last() == tagName) {
	      parseEndTag("", tagName);
	    }
	
	    unary = voidElements[tagName] || !!unary;
	
	    if (!unary) {
	      stack.push(tagName);
	    }
	
	    var attrs = {};
	
	    rest.replace(ATTR_REGEXP,
	      function(match, name, doubleQuotedValue, singleQuotedValue, unquotedValue) {
	        var value = doubleQuotedValue
	          || singleQuotedValue
	          || unquotedValue
	          || '';
	
	        attrs[name] = decodeEntities(value);
	    });
	    if (handler.start) handler.start(tagName, attrs, unary);
	  }
	
	  function parseEndTag(tag, tagName) {
	    var pos = 0, i;
	    tagName = angular.lowercase(tagName);
	    if (tagName) {
	      // Find the closest opened tag of the same type
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos] == tagName) break;
	      }
	    }
	
	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (i = stack.length - 1; i >= pos; i--)
	        if (handler.end) handler.end(stack[i]);
	
	      // Remove the open elements from the stack
	      stack.length = pos;
	    }
	  }
	}
	
	var hiddenPre=document.createElement("pre");
	/**
	 * decodes all entities into regular string
	 * @param value
	 * @returns {string} A string with decoded entities.
	 */
	function decodeEntities(value) {
	  if (!value) { return ''; }
	
	  hiddenPre.innerHTML = value.replace(/</g,"&lt;");
	  // innerText depends on styling as it doesn't display hidden elements.
	  // Therefore, it's better to use textContent not to cause unnecessary reflows.
	  return hiddenPre.textContent;
	}
	
	/**
	 * Escapes all potentially dangerous characters, so that the
	 * resulting string can be safely inserted into attribute or
	 * element text.
	 * @param value
	 * @returns {string} escaped text
	 */
	function encodeEntities(value) {
	  return value.
	    replace(/&/g, '&amp;').
	    replace(SURROGATE_PAIR_REGEXP, function(value) {
	      var hi = value.charCodeAt(0);
	      var low = value.charCodeAt(1);
	      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
	    }).
	    replace(NON_ALPHANUMERIC_REGEXP, function(value) {
	      return '&#' + value.charCodeAt(0) + ';';
	    }).
	    replace(/</g, '&lt;').
	    replace(/>/g, '&gt;');
	}
	
	/**
	 * create an HTML/XML writer which writes to buffer
	 * @param {Array} buf use buf.jain('') to get out sanitized html string
	 * @returns {object} in the form of {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * }
	 */
	function htmlSanitizeWriter(buf, uriValidator) {
	  var ignore = false;
	  var out = angular.bind(buf, buf.push);
	  return {
	    start: function(tag, attrs, unary) {
	      tag = angular.lowercase(tag);
	      if (!ignore && specialElements[tag]) {
	        ignore = tag;
	      }
	      if (!ignore && validElements[tag] === true) {
	        out('<');
	        out(tag);
	        angular.forEach(attrs, function(value, key) {
	          var lkey=angular.lowercase(key);
	          var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
	          if (validAttrs[lkey] === true &&
	            (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
	            out(' ');
	            out(key);
	            out('="');
	            out(encodeEntities(value));
	            out('"');
	          }
	        });
	        out(unary ? '/>' : '>');
	      }
	    },
	    end: function(tag) {
	        tag = angular.lowercase(tag);
	        if (!ignore && validElements[tag] === true) {
	          out('</');
	          out(tag);
	          out('>');
	        }
	        if (tag == ignore) {
	          ignore = false;
	        }
	      },
	    chars: function(chars) {
	        if (!ignore) {
	          out(encodeEntities(chars));
	        }
	      }
	  };
	}
	
	
	// define ngSanitize module and register $sanitize service
	angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);
	
	/* global sanitizeText: false */
	
	/**
	 * @ngdoc filter
	 * @name linky
	 * @kind function
	 *
	 * @description
	 * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and
	 * plain email address links.
	 *
	 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
	 *
	 * @param {string} text Input text.
	 * @param {string} target Window (_blank|_self|_parent|_top) or named frame to open links in.
	 * @returns {string} Html-linkified text.
	 *
	 * @usage
	   <span ng-bind-html="linky_expression | linky"></span>
	 *
	 * @example
	   <example module="linkyExample" deps="angular-sanitize.js">
	     <file name="index.html">
	       <script>
	         angular.module('linkyExample', ['ngSanitize'])
	           .controller('ExampleController', ['$scope', function($scope) {
	             $scope.snippet =
	               'Pretty text with some links:\n'+
	               'http://angularjs.org/,\n'+
	               'mailto:us@somewhere.org,\n'+
	               'another@somewhere.org,\n'+
	               'and one more: ftp://127.0.0.1/.';
	             $scope.snippetWithTarget = 'http://angularjs.org/';
	           }]);
	       </script>
	       <div ng-controller="ExampleController">
	       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <td>Filter</td>
	           <td>Source</td>
	           <td>Rendered</td>
	         </tr>
	         <tr id="linky-filter">
	           <td>linky filter</td>
	           <td>
	             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
	           </td>
	           <td>
	             <div ng-bind-html="snippet | linky"></div>
	           </td>
	         </tr>
	         <tr id="linky-target">
	          <td>linky target</td>
	          <td>
	            <pre>&lt;div ng-bind-html="snippetWithTarget | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
	          </td>
	          <td>
	            <div ng-bind-html="snippetWithTarget | linky:'_blank'"></div>
	          </td>
	         </tr>
	         <tr id="escaped-html">
	           <td>no filter</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	     </file>
	     <file name="protractor.js" type="protractor">
	       it('should linkify the snippet with urls', function() {
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
	       });
	
	       it('should not linkify snippet without the linky filter', function() {
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
	       });
	
	       it('should update', function() {
	         element(by.model('snippet')).clear();
	         element(by.model('snippet')).sendKeys('new http://link.');
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('new http://link.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
	             .toBe('new http://link.');
	       });
	
	       it('should work with the target property', function() {
	        expect(element(by.id('linky-target')).
	            element(by.binding("snippetWithTarget | linky:'_blank'")).getText()).
	            toBe('http://angularjs.org/');
	        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
	       });
	     </file>
	   </example>
	 */
	angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
	  var LINKY_URL_REGEXP =
	        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
	      MAILTO_REGEXP = /^mailto:/i;
	
	  return function(text, target) {
	    if (!text) return text;
	    var match;
	    var raw = text;
	    var html = [];
	    var url;
	    var i;
	    while ((match = raw.match(LINKY_URL_REGEXP))) {
	      // We can not end in these as they are sometimes found at the end of the sentence
	      url = match[0];
	      // if we did not match ftp/http/www/mailto then assume mailto
	      if (!match[2] && !match[4]) {
	        url = (match[3] ? 'http://' : 'mailto:') + url;
	      }
	      i = match.index;
	      addText(raw.substr(0, i));
	      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
	      raw = raw.substring(i + match[0].length);
	    }
	    addText(raw);
	    return $sanitize(html.join(''));
	
	    function addText(text) {
	      if (!text) {
	        return;
	      }
	      html.push(sanitizeText(text));
	    }
	
	    function addLink(url, text) {
	      html.push('<a ');
	      if (angular.isDefined(target)) {
	        html.push('target="',
	                  target,
	                  '" ');
	      }
	      html.push('href="',
	                url.replace(/"/g, '&quot;'),
	                '">');
	      addText(text);
	      html.push('</a>');
	    }
	  };
	}]);
	
	
	})(window, window.angular);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	var Slider = __webpack_require__(11);
	
	angular.module('ui.bootstrap-slider', [])
	    .directive('slider', ['$parse', '$timeout', '$rootScope', function ($parse, $timeout, $rootScope) {
	        return {
	            restrict: 'AE',
	            replace: true,
	            template: '<div><input class="slider-input" type="text" style="width:100%" /></div>',
	            require: 'ngModel',
	            scope: {
	                max: "=",
	                min: "=",
	                step: "=",
	                value: "=",
	                ngModel: '=',
	                ngDisabled: '=',
	                range: '=',
	                sliderid: '=',
	                ticks: '=',
	                ticksLabels: '=',
	                ticksSnapBounds: '=',
	                ticksPositions: '=',
	                scale: '=',
	                formatter: '&',
	                onStartSlide: '&',
	                onStopSlide: '&',
	                onSlide: '&'
	            },
	            link: function ($scope, element, attrs, ngModelCtrl, $compile) {
	                var ngModelDeregisterFn, ngDisabledDeregisterFn;
	
	                initSlider();
	
	                function initSlider() {
	                    var options = {};
	
	                    function setOption(key, value, defaultValue) {
	                        options[key] = value || defaultValue;
	                    }
	
	                    function setFloatOption(key, value, defaultValue) {
	                        options[key] = value || value === 0 ? parseFloat(value) : defaultValue;
	                    }
	
	                    function setBooleanOption(key, value, defaultValue) {
	                        options[key] = value ? value + '' === 'true' : defaultValue;
	                    }
	
	                    function getArrayOrValue(value) {
	                        return (angular.isString(value) && value.indexOf("[") === 0) ? angular.fromJson(value) : value;
	                    }
	
	                    setOption('id', $scope.sliderid);
	                    setOption('orientation', attrs.orientation, 'horizontal');
	                    setOption('selection', attrs.selection, 'before');
	                    setOption('handle', attrs.handle, 'round');
	                    setOption('tooltip', attrs.sliderTooltip || attrs.tooltip, 'show');
	                    setOption('tooltip_position', attrs.sliderTooltipPosition, 'top');
	                    setOption('tooltipseparator', attrs.tooltipseparator, ':');
	                    setOption('ticks', $scope.ticks);
	                    setOption('ticks_labels', $scope.ticksLabels);
	                    setOption('ticks_snap_bounds', $scope.ticksSnapBounds);
	                    setOption('ticks_positions', $scope.ticksPositions);
	                    setOption('scale', $scope.scale, 'linear');
	
	                    setFloatOption('min', $scope.min, 0);
	                    setFloatOption('max', $scope.max, 10);
	                    setFloatOption('step', $scope.step, 1);
	                    var strNbr = options.step + '';
	                    var decimals = strNbr.substring(strNbr.lastIndexOf('.') + 1);
	                    setFloatOption('precision', attrs.precision, decimals);
	
	                    setBooleanOption('tooltip_split', attrs.tooltipsplit, false);
	                    setBooleanOption('enabled', attrs.enabled, true);
	                    setBooleanOption('naturalarrowkeys', attrs.naturalarrowkeys, false);
	                    setBooleanOption('reversed', attrs.reversed, false);
	
	                    setBooleanOption('range', $scope.range, false);
	                    if (options.range) {
	                        if (angular.isArray($scope.value)) {
	                            options.value = $scope.value;
	                        }
	                        else if (angular.isString($scope.value)) {
	                            options.value = getArrayOrValue($scope.value);
	                            if (!angular.isArray(options.value)) {
	                                var value = parseFloat($scope.value);
	                                if (isNaN(value)) value = 5;
	
	                                if (value < $scope.min) {
	                                    value = $scope.min;
	                                    options.value = [value, options.max];
	                                }
	                                else if (value > $scope.max) {
	                                    value = $scope.max;
	                                    options.value = [options.min, value];
	                                }
	                                else {
	                                    options.value = [options.min, options.max];
	                                }
	                            }
	                        }
	                        else {
	                            options.value = [options.min, options.max]; // This is needed, because of value defined at $.fn.slider.defaults - default value 5 prevents creating range slider
	                        }
	                        $scope.ngModel = options.value; // needed, otherwise turns value into [null, ##]
	                    }
	                    else {
	                        setFloatOption('value', $scope.value, 5);
	                    }
	
	                    if ($scope.formatter) options.formatter = $scope.$eval($scope.formatter);
	
	
	                    // check if slider jQuery plugin exists
	                    if ('$' in window && $.fn.slider) {
	                        // adding methods to jQuery slider plugin prototype
	                        $.fn.slider.constructor.prototype.disable = function () {
	                            this.picker.off();
	                        };
	                        $.fn.slider.constructor.prototype.enable = function () {
	                            this.picker.on();
	                        };
	                    }
	
	                    // destroy previous slider to reset all options
	                    if (element[0].__slider)
	                        element[0].__slider.destroy();
	
	                    var slider = new Slider(element[0].getElementsByClassName('slider-input')[0], options);
	                    element[0].__slider = slider;
	
	                    // everything that needs slider element
	                    var updateEvent = getArrayOrValue(attrs.updateevent);
	                    if (angular.isString(updateEvent)) {
	                        // if only single event name in string
	                        updateEvent = [updateEvent];
	                    }
	                    else {
	                        // default to slide event
	                        updateEvent = ['slide'];
	                    }
	                    angular.forEach(updateEvent, function (sliderEvent) {
	                        slider.on(sliderEvent, function (ev) {
	                            ngModelCtrl.$setViewValue(ev);
	                            $timeout(function () {
	                                $scope.$apply();
	                            });
	                        });
	                    });
	                    slider.on('change', function (ev) {
	                        ngModelCtrl.$setViewValue(ev.newValue);
	                        $timeout(function () {
	                            $scope.$apply();
	                        });
	                    });
	
	                    // Event listeners
	                    var sliderEvents = {
	                        slideStart: 'onStartSlide',
	                        slide: 'onSlide',
	                        slideStop: 'onStopSlide'
	                    };
	                    angular.forEach(sliderEvents, function (sliderEventAttr, sliderEvent) {
	                        var fn = $parse(attrs[sliderEventAttr]);
	                        slider.on(sliderEvent, function (ev) {
	                            if ($scope[sliderEventAttr]) {
	
	                                var callback = function () {
	                                    fn($scope.$parent, { $event: ev, value: ev });
	                                }
	
	                                if ($rootScope.$$phase) {
	                                    $scope.$evalAsync(callback);
	                                } else {
	                                    $scope.$apply(callback);
	                                }
	                            }
	                        });
	                    });
	
	                    // deregister ngDisabled watcher to prevent memory leaks
	                    if (angular.isFunction(ngDisabledDeregisterFn)) {
	                        ngDisabledDeregisterFn();
	                        ngDisabledDeregisterFn = null;
	                    }
	
	                    ngDisabledDeregisterFn = $scope.$watch('ngDisabled', function (value) {
	                        if (value) {
	                            slider.disable();
	                        }
	                        else {
	                            slider.enable();
	                        }
	                    });
	
	                    // deregister ngModel watcher to prevent memory leaks
	                    if (angular.isFunction(ngModelDeregisterFn)) ngModelDeregisterFn();
	                    ngModelDeregisterFn = $scope.$watch('ngModel', function (value) {
	                        if($scope.range){
	                            slider.setValue(value);
	                        }else{
	                            slider.setValue(parseFloat(value));
	                        }
	                    }, true);
	                }
	
	
	                var watchers = ['min', 'max', 'step', 'range', 'scale'];
	                angular.forEach(watchers, function (prop) {
	                    $scope.$watch(prop, function () {
	                        initSlider();
	                    });
	                });
	            }
	        };
	    }])
	;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./bootstrap-slider.min.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./bootstrap-slider.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! =======================================================\r\n                      VERSION  5.1.1\r\n========================================================= */\r\n/*! =========================================================\r\n * bootstrap-slider.js\r\n *\r\n * Maintainers:\r\n *\t\tKyle Kemp\r\n *\t\t\t- Twitter: @seiyria\r\n *\t\t\t- Github:  seiyria\r\n *\t\tRohit Kalkur\r\n *\t\t\t- Twitter: @Rovolutionary\r\n *\t\t\t- Github:  rovolution\r\n *\r\n * =========================================================\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n * http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n * ========================================================= */.slider{display:inline-block;vertical-align:middle;position:relative}.slider.slider-horizontal{width:210px;height:20px}.slider.slider-horizontal .slider-track{height:10px;width:100%;margin-top:-5px;top:50%;left:0}.slider.slider-horizontal .slider-selection,.slider.slider-horizontal .slider-track-low,.slider.slider-horizontal .slider-track-high{height:100%;top:0;bottom:0}.slider.slider-horizontal .slider-tick,.slider.slider-horizontal .slider-handle{margin-left:-10px;margin-top:-5px}.slider.slider-horizontal .slider-tick.triangle,.slider.slider-horizontal .slider-handle.triangle{border-width:0 10px 10px 10px;width:0;height:0;border-bottom-color:#0480be;margin-top:0}.slider.slider-horizontal .slider-tick-label-container{white-space:nowrap;margin-top:20px}.slider.slider-horizontal .slider-tick-label-container .slider-tick-label{padding-top:4px;display:inline-block;text-align:center}.slider.slider-vertical{height:210px;width:20px}.slider.slider-vertical .slider-track{width:10px;height:100%;margin-left:-5px;left:50%;top:0}.slider.slider-vertical .slider-selection{width:100%;left:0;top:0;bottom:0}.slider.slider-vertical .slider-track-low,.slider.slider-vertical .slider-track-high{width:100%;left:0;right:0}.slider.slider-vertical .slider-tick,.slider.slider-vertical .slider-handle{margin-left:-5px;margin-top:-10px}.slider.slider-vertical .slider-tick.triangle,.slider.slider-vertical .slider-handle.triangle{border-width:10px 0 10px 10px;width:1px;height:1px;border-left-color:#0480be;margin-left:0}.slider.slider-disabled .slider-handle{background-image:-webkit-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:-o-linear-gradient(top,#dfdfdf 0,#bebebe 100%);background-image:linear-gradient(to bottom,#dfdfdf 0,#bebebe 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffdfdfdf',endColorstr='#ffbebebe',GradientType=0)}.slider.slider-disabled .slider-track{background-image:-webkit-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:-o-linear-gradient(top,#e5e5e5 0,#e9e9e9 100%);background-image:linear-gradient(to bottom,#e5e5e5 0,#e9e9e9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffe5e5e5',endColorstr='#ffe9e9e9',GradientType=0);cursor:not-allowed}.slider input{display:none}.slider .tooltip.top{margin-top:-36px}.slider .tooltip-inner{white-space:nowrap}.slider .hide{display:none}.slider-track{position:absolute;cursor:pointer;background-image:-webkit-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:-o-linear-gradient(top,#f5f5f5 0,#f9f9f9 100%);background-image:linear-gradient(to bottom,#f5f5f5 0,#f9f9f9 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff5f5f5',endColorstr='#fff9f9f9',GradientType=0);-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);box-shadow:inset 0 1px 2px rgba(0,0,0,0.1);border-radius:4px}.slider-selection{position:absolute;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-selection.tick-slider-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0)}.slider-track-low,.slider-track-high{position:absolute;background:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border-radius:4px}.slider-handle{position:absolute;width:20px;height:20px;background-color:#337ab7;background-image:-webkit-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:-o-linear-gradient(top,#149bdf 0,#0480be 100%);background-image:linear-gradient(to bottom,#149bdf 0,#0480be 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff149bdf',endColorstr='#ff0480be',GradientType=0);filter:none;-webkit-box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);box-shadow:inset 0 1px 0 rgba(255,255,255,.2),0 1px 2px rgba(0,0,0,.05);border:0 solid transparent}.slider-handle.round{border-radius:50%}.slider-handle.triangle{background:transparent none}.slider-handle.custom{background:transparent none}.slider-handle.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick{position:absolute;width:20px;height:20px;background-image:-webkit-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:-o-linear-gradient(top,#f9f9f9 0,#f5f5f5 100%);background-image:linear-gradient(to bottom,#f9f9f9 0,#f5f5f5 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fff9f9f9',endColorstr='#fff5f5f5',GradientType=0);-webkit-box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);box-shadow:inset 0 -1px 0 rgba(0,0,0,0.15);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;filter:none;opacity:.8;border:0 solid transparent}.slider-tick.round{border-radius:50%}.slider-tick.triangle{background:transparent none}.slider-tick.custom{background:transparent none}.slider-tick.custom::before{line-height:20px;font-size:20px;content:'\\2605';color:#726204}.slider-tick.in-selection{background-image:-webkit-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:-o-linear-gradient(top,#89cdef 0,#81bfde 100%);background-image:linear-gradient(to bottom,#89cdef 0,#81bfde 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff89cdef',endColorstr='#ff81bfde',GradientType=0);opacity:1}", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! =======================================================
	                      VERSION  5.1.1
	========================================================= */
	/*! =========================================================
	 * bootstrap-slider.js
	 *
	 * Maintainers:
	 *		Kyle Kemp
	 *			- Twitter: @seiyria
	 *			- Github:  seiyria
	 *		Rohit Kalkur
	 *			- Twitter: @Rovolutionary
	 *			- Github:  rovolution
	 *
	 * =========================================================
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 * ========================================================= */
	!function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (b), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("object"==typeof module&&module.exports){var c;try{c=require("jquery")}catch(d){c=null}module.exports=b(c)}else a.Slider=b(a.jQuery)}(this,function(a){var b;return function(a){"use strict";function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return!m||m.length>1?m:m[0]}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function c(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var f=Object.keys(this.defaultOptions),g=0;g<f.length;g++){var h=f[g],i=c[h];i="undefined"!=typeof i?i:d(this.element,h),i=null!==i?i:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=i}"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.tooltip_position="right";var j,k,l,m,n,o=this.element.style.width,p=!1,q=this.element.parentNode;if(this.sliderElem)p=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var r=document.createElement("div");if(r.className="slider-track",k=document.createElement("div"),k.className="slider-track-low",j=document.createElement("div"),j.className="slider-selection",l=document.createElement("div"),l.className="slider-track-high",m=document.createElement("div"),m.className="slider-handle min-slider-handle",n=document.createElement("div"),n.className="slider-handle max-slider-handle",r.appendChild(k),r.appendChild(j),r.appendChild(l),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(g=0;g<this.options.ticks.length;g++){var s=document.createElement("div");s.className="slider-tick",this.ticks.push(s),r.appendChild(s)}j.className+=" tick-slider-selection"}if(r.appendChild(m),r.appendChild(n),this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",g=0;g<this.options.ticks_labels.length;g++){var t=document.createElement("div");t.className="slider-tick-label",t.innerHTML=this.options.ticks_labels[g],this.tickLabels.push(t),this.tickLabelContainer.appendChild(t)}var u=function(a){var b=document.createElement("div");b.className="tooltip-arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},v=document.createElement("div");v.className="tooltip tooltip-main",u(v);var w=document.createElement("div");w.className="tooltip tooltip-min",u(w);var x=document.createElement("div");x.className="tooltip tooltip-max",u(x),this.sliderElem.appendChild(r),this.sliderElem.appendChild(v),this.sliderElem.appendChild(w),this.sliderElem.appendChild(x),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),q.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),e[this.options.scale]&&(this.options.scale=e[this.options.scale]),p===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"top"),this._removeProperty(a,"margin-left"),this._removeProperty(a,"margin-top"),this._removeClass(a,"right"),this._removeClass(a,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=o,this.options.orientation="horizontal",this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this._state.value=this.options.range?[this.options.value,this.options.max]:this.options.value,this.trackLow=k||this.trackLow,this.trackSelection=j||this.trackSelection,this.trackHigh=l||this.trackHigh,"none"===this.options.selection&&(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")),this.handle1=m||this.handle1,this.handle2=n||this.handle2,p===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),g=0;g<this.ticks.length;g++)this._removeClass(this.ticks[g],"round triangle hide");var y=["round","triangle","custom"],z=-1!==y.indexOf(this.options.handle);if(z)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),g=0;g<this.ticks.length;g++)this._addClass(this.ticks[g],this.options.handle);this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchCapable&&this.sliderElem.addEventListener("touchstart",this.mousedown,!1),this.sliderElem.addEventListener("mousedown",this.mousedown,!1),"hide"===this.options.tooltip?(this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide")):"always"===this.options.tooltip?(this._showTooltip(),this._alwaysShowTooltip=!0):(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1),this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)),this.options.enabled?this.enable():this.disable()}var d={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},e={linear:{toValue:function(a){var b=a/100*(this.options.max-this.options.min);if(this.options.ticks_positions.length>0){for(var c,d,e,f=0,g=0;g<this.options.ticks_positions.length;g++)if(a<=this.options.ticks_positions[g]){c=g>0?this.options.ticks[g-1]:0,e=g>0?this.options.ticks_positions[g-1]:0,d=this.options.ticks[g],f=this.options.ticks_positions[g];break}if(g>0){var h=(a-e)/(f-e);b=c+h*(d-c)}}var i=this.options.min+Math.round(b/this.options.step)*this.options.step;return i<this.options.min?this.options.min:i>this.options.max?this.options.max:i},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=0===this.options.min?0:Math.log(this.options.min),c=Math.log(this.options.max),d=Math.exp(b+(c-b)*a/100);return d=this.options.min+Math.round((d-this.options.min)/this.options.step)*this.options.step,d<this.options.min?this.options.min:d>this.options.max?this.options.max:d},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=Math.log(this.options.max),c=0===this.options.min?0:Math.log(this.options.min),d=0===a?0:Math.log(a);return 100*(d-c)/(b-c)}}};if(b=function(a,b){return c.call(this,a,b),this},b.prototype={_init:function(){},constructor:b,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,scale:"linear",focus:!1,tooltip_position:null},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),this._state.value[1]="after"===this.options.selection?this.options.max:this.options.min),this._state.percentage=this.options.max>this.options.min?[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];return b===!0&&this._trigger("slide",f),d!==f&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this._setDataVal(f),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(){return this._removeSliderEventHandlers(),c.call(this,this.element,this.options),a&&a.data(this.element,"slider",this),this},relayout:function(){return this._layout(),this},_removeSliderEventHandlers:function(){this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.handle2.removeEventListener("focus",this.handle2Keydown,!1),this.handle2.removeEventListener("blur",this.handle2Keydown,!1),this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.mousedown,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];this.eventToCallbackMap[c]=null}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this.alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_layout:function(){var a;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle2.style[this.stylePos]=a[1]+"%",Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var b=Math.max.apply(Math,this.options.ticks),c=Math.min.apply(Math,this.options.ticks),d="vertical"===this.options.orientation?"height":"width",e="vertical"===this.options.orientation?"marginTop":"marginLeft",f=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var g=0;if(0===this.options.ticks_positions.length)this.tickLabelContainer.style[e]=-f/2+"px",g=this.tickLabelContainer.offsetHeight;else for(h=0;h<this.tickLabelContainer.childNodes.length;h++)this.tickLabelContainer.childNodes[h].offsetHeight>g&&(g=this.tickLabelContainer.childNodes[h].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=g+"px")}for(var h=0;h<this.options.ticks.length;h++){var i=this.options.ticks_positions[h]||100*(this.options.ticks[h]-c)/(b-c);this.ticks[h].style[this.stylePos]=i+"%",this._removeClass(this.ticks[h],"in-selection"),this.options.range?i>=a[0]&&i<=a[1]&&this._addClass(this.ticks[h],"in-selection"):"after"===this.options.selection&&i>=a[0]?this._addClass(this.ticks[h],"in-selection"):"before"===this.options.selection&&i<=a[0]&&this._addClass(this.ticks[h],"in-selection"),this.tickLabels[h]&&(this.tickLabels[h].style[d]=f+"px",void 0!==this.options.ticks_positions[h]&&(this.tickLabels[h].style.position="absolute",this.tickLabels[h].style[this.stylePos]=this.options.ticks_positions[h]+"%",this.tickLabels[h].style[e]=-f/2+"px"))}}var j;if(this.options.range){j=this.options.formatter(this._state.value),this._setText(this.tooltipInner,j),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px"),"vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");var k=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,k);var l=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,l),this.tooltip_min.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip_min,"margin-top",-this.tooltip_min.offsetHeight/2+"px"):this._css(this.tooltip_min,"margin-left",-this.tooltip_min.offsetWidth/2+"px"),this.tooltip_max.style[this.stylePos]=a[1]+"%","vertical"===this.options.orientation?this._css(this.tooltip_max,"margin-top",-this.tooltip_max.offsetHeight/2+"px"):this._css(this.tooltip_max,"margin-left",-this.tooltip_max.offsetWidth/2+"px")}else j=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,j),this.tooltip.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-top",-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-left",-this.tooltip.offsetWidth/2+"px");if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%",this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var m=this.tooltip_min.getBoundingClientRect(),n=this.tooltip_max.getBoundingClientRect();m.right>n.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this._setDataVal(e),this.setValue(e,!1,!0),this._pauseEvent(a),this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="vertical"===this.options.orientation&&!this.options.reversed,e="horizontal"===this.options.orientation&&this.options.reversed;(d||e)&&(c=-c)}var f=this._state.value[a]+c*this.options.step;return this.options.range&&(f=[a?this._state.value[0]:f,a?f:this._state.value[1]]),this._trigger("slideStart",f),this._setDataVal(f),this.setValue(f,!0,!0),this._setDataVal(f),this._trigger("slideStop",f),this._layout(),this._pauseEvent(b),!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this._layout();var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c&&(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0)}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var a=this._calculateValue(!0);return this._layout(),this._setDataVal(a),this._trigger("slideStop",a),!1},_calculateValue:function(a){var b;if(this.options.range?(b=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(b[0]=this._toValue(this._state.percentage[0]),b[0]=this._applyPrecision(b[0])),100!==this._state.percentage[1]&&(b[1]=this._toValue(this._state.percentage[1]),b[1]=this._applyPrecision(b[1]))):(b=this._toValue(this._state.percentage[0]),b=parseFloat(b),b=this._applyPrecision(b)),a){for(var c=[b,1/0],d=0;d<this.options.ticks.length;d++){var e=Math.abs(this.options.ticks[d]-b);e<=c[1]&&(c=[this.options.ticks[d],e])}if(c[1]<=this.options.ticks_snap_bounds)return c[0]}return b},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type||(a=a.touches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c,e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if("number"==typeof a)return a;if(Array.isArray(a))return this._validateArray(a),a;throw new Error(d.formatInvalidInputErrorMsg(a))},_validateArray:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"!=typeof c)throw new Error(d.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.innerText?a.innerText=b:"undefined"!=typeof a.textContent&&(a.textContent=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop;return b},_offset:function(a){return{left:this._offsetLeft(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b=this.options.tooltip_position||"right",c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,b),a.style[c]="100%"}.bind(this))}else a.forEach("bottom"===this.options.tooltip_position?function(a){this._addClass(a,"bottom"),a.style.top="22px"}.bind(this):function(a){this._addClass(a,"top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},a){var f=a.fn.slider?"bootstrapSlider":"slider";a.bridget(f,b)}}(a),b});

/***/ },
/* 12 */
/***/ function(module, exports) {

	(function() { module.exports = this["$"]; }());

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return (root['SignaturePad'] = factory());
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    root['SignaturePad'] = factory();
	  }
	}(this, function () {
	
	/*!
	 * Signature Pad v1.4.0
	 * https://github.com/szimek/signature_pad
	 *
	 * Copyright 2015 Szymon Nowak
	 * Released under the MIT license
	 *
	 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
	 * http://corner.squareup.com/2012/07/smoother-signatures.html
	 *
	 * Implementation of interpolation using cubic Bézier curves is taken from:
	 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
	 *
	 * Algorithm for approximated length of a Bézier curve is taken from:
	 * http://www.lemoda.net/maths/bezier-length/index.html
	 *
	 */
	var SignaturePad = (function (document) {
	    "use strict";
	
	    var SignaturePad = function (canvas, options) {
	        var self = this,
	            opts = options || {};
	
	        this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
	        this.minWidth = opts.minWidth || 0.5;
	        this.maxWidth = opts.maxWidth || 2.5;
	        this.dotSize = opts.dotSize || function () {
	            return (this.minWidth + this.maxWidth) / 2;
	        };
	        this.penColor = opts.penColor || "black";
	        this.backgroundColor = opts.backgroundColor || "rgba(0,0,0,0)";
	        this.onEnd = opts.onEnd;
	        this.onBegin = opts.onBegin;
	
	        this._canvas = canvas;
	        this._ctx = canvas.getContext("2d");
	        this.clear();
	
	        // we need add these inline so they are available to unbind while still having
	        //  access to 'self' we could use _.bind but it's not worth adding a dependency
	        this._handleMouseDown = function (event) {
	            if (event.which === 1) {
	                self._mouseButtonDown = true;
	                self._strokeBegin(event);
	            }
	        };
	
	        this._handleMouseMove = function (event) {
	            if (self._mouseButtonDown) {
	                self._strokeUpdate(event);
	            }
	        };
	
	        this._handleMouseUp = function (event) {
	            if (event.which === 1 && self._mouseButtonDown) {
	                self._mouseButtonDown = false;
	                self._strokeEnd(event);
	            }
	        };
	
	        this._handleTouchStart = function (event) {
	            var touch = event.changedTouches[0];
	            self._strokeBegin(touch);
	        };
	
	        this._handleTouchMove = function (event) {
	            // Prevent scrolling.
	            event.preventDefault();
	
	            var touch = event.changedTouches[0];
	            self._strokeUpdate(touch);
	        };
	
	        this._handleTouchEnd = function (event) {
	            var wasCanvasTouched = event.target === self._canvas;
	            if (wasCanvasTouched) {
	                self._strokeEnd(event);
	            }
	        };
	
	        this._handleMouseEvents();
	        this._handleTouchEvents();
	    };
	
	    SignaturePad.prototype.clear = function () {
	        var ctx = this._ctx,
	            canvas = this._canvas;
	
	        ctx.fillStyle = this.backgroundColor;
	        ctx.clearRect(0, 0, canvas.width, canvas.height);
	        ctx.fillRect(0, 0, canvas.width, canvas.height);
	        this._reset();
	    };
	
	    SignaturePad.prototype.toDataURL = function (imageType, quality) {
	        var canvas = this._canvas;
	        return canvas.toDataURL.apply(canvas, arguments);
	    };
	
	    SignaturePad.prototype.fromDataURL = function (dataUrl) {
	        var self = this,
	            image = new Image(),
	            ratio = window.devicePixelRatio || 1,
	            width = this._canvas.width / ratio,
	            height = this._canvas.height / ratio;
	
	        this._reset();
	        image.src = dataUrl;
	        image.onload = function () {
	            self._ctx.drawImage(image, 0, 0, width, height);
	        };
	        this._isEmpty = false;
	    };
	
	    SignaturePad.prototype._strokeUpdate = function (event) {
	        var point = this._createPoint(event);
	        this._addPoint(point);
	    };
	
	    SignaturePad.prototype._strokeBegin = function (event) {
	        this._reset();
	        this._strokeUpdate(event);
	        if (typeof this.onBegin === 'function') {
	            this.onBegin(event);
	        }
	    };
	
	    SignaturePad.prototype._strokeDraw = function (point) {
	        var ctx = this._ctx,
	            dotSize = typeof(this.dotSize) === 'function' ? this.dotSize() : this.dotSize;
	
	        ctx.beginPath();
	        this._drawPoint(point.x, point.y, dotSize);
	        ctx.closePath();
	        ctx.fill();
	    };
	
	    SignaturePad.prototype._strokeEnd = function (event) {
	        var canDrawCurve = this.points.length > 2,
	            point = this.points[0];
	
	        if (!canDrawCurve && point) {
	            this._strokeDraw(point);
	        }
	        if (typeof this.onEnd === 'function') {
	            this.onEnd(event);
	        }
	    };
	
	    SignaturePad.prototype._handleMouseEvents = function () {
	        var self = this;
	        this._mouseButtonDown = false;
	
	        this._canvas.addEventListener("mousedown", this._handleMouseDown);
	        this._canvas.addEventListener("mousemove", this._handleMouseMove);
	        document.addEventListener("mouseup", this._handleMouseUp);
	    };
	
	    SignaturePad.prototype._handleTouchEvents = function () {
	        var self = this;
	
	        // Pass touch events to canvas element on mobile IE.
	        this._canvas.style.msTouchAction = 'none';
	
	        this._canvas.addEventListener("touchstart", this._handleTouchStart);
	        this._canvas.addEventListener("touchmove", this._handleTouchMove);
	        document.addEventListener("touchend", this._handleTouchEnd);
	    };
	
	    SignaturePad.prototype.off = function () {
	        this._canvas.removeEventListener("mousedown", this._handleMouseDown);
	        this._canvas.removeEventListener("mousemove", this._handleMouseMove);
	        document.removeEventListener("mouseup", this._handleMouseUp);
	
	        this._canvas.removeEventListener("touchstart", this._handleTouchStart);
	        this._canvas.removeEventListener("touchmove", this._handleTouchMove);
	        document.removeEventListener("touchend", this._handleTouchEnd);
	    };
	
	    SignaturePad.prototype.isEmpty = function () {
	        return this._isEmpty;
	    };
	
	    SignaturePad.prototype._reset = function () {
	        this.points = [];
	        this._lastVelocity = 0;
	        this._lastWidth = (this.minWidth + this.maxWidth) / 2;
	        this._isEmpty = true;
	        this._ctx.fillStyle = this.penColor;
	    };
	
	    SignaturePad.prototype._createPoint = function (event) {
	        var rect = this._canvas.getBoundingClientRect();
	        return new Point(
	            event.clientX - rect.left,
	            event.clientY - rect.top
	        );
	    };
	
	    SignaturePad.prototype._addPoint = function (point) {
	        var points = this.points,
	            c2, c3,
	            curve, tmp;
	
	        points.push(point);
	
	        if (points.length > 2) {
	            // To reduce the initial lag make it work with 3 points
	            // by copying the first point to the beginning.
	            if (points.length === 3) points.unshift(points[0]);
	
	            tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
	            c2 = tmp.c2;
	            tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
	            c3 = tmp.c1;
	            curve = new Bezier(points[1], c2, c3, points[2]);
	            this._addCurve(curve);
	
	            // Remove the first element from the list,
	            // so that we always have no more than 4 points in points array.
	            points.shift();
	        }
	    };
	
	    SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
	        var dx1 = s1.x - s2.x, dy1 = s1.y - s2.y,
	            dx2 = s2.x - s3.x, dy2 = s2.y - s3.y,
	
	            m1 = {x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0},
	            m2 = {x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0},
	
	            l1 = Math.sqrt(dx1*dx1 + dy1*dy1),
	            l2 = Math.sqrt(dx2*dx2 + dy2*dy2),
	
	            dxm = (m1.x - m2.x),
	            dym = (m1.y - m2.y),
	
	            k = l2 / (l1 + l2),
	            cm = {x: m2.x + dxm*k, y: m2.y + dym*k},
	
	            tx = s2.x - cm.x,
	            ty = s2.y - cm.y;
	
	        return {
	            c1: new Point(m1.x + tx, m1.y + ty),
	            c2: new Point(m2.x + tx, m2.y + ty)
	        };
	    };
	
	    SignaturePad.prototype._addCurve = function (curve) {
	        var startPoint = curve.startPoint,
	            endPoint = curve.endPoint,
	            velocity, newWidth;
	
	        velocity = endPoint.velocityFrom(startPoint);
	        velocity = this.velocityFilterWeight * velocity
	            + (1 - this.velocityFilterWeight) * this._lastVelocity;
	
	        newWidth = this._strokeWidth(velocity);
	        this._drawCurve(curve, this._lastWidth, newWidth);
	
	        this._lastVelocity = velocity;
	        this._lastWidth = newWidth;
	    };
	
	    SignaturePad.prototype._drawPoint = function (x, y, size) {
	        var ctx = this._ctx;
	
	        ctx.moveTo(x, y);
	        ctx.arc(x, y, size, 0, 2 * Math.PI, false);
	        this._isEmpty = false;
	    };
	
	    SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
	        var ctx = this._ctx,
	            widthDelta = endWidth - startWidth,
	            drawSteps, width, i, t, tt, ttt, u, uu, uuu, x, y;
	
	        drawSteps = Math.floor(curve.length());
	        ctx.beginPath();
	        for (i = 0; i < drawSteps; i++) {
	            // Calculate the Bezier (x, y) coordinate for this step.
	            t = i / drawSteps;
	            tt = t * t;
	            ttt = tt * t;
	            u = 1 - t;
	            uu = u * u;
	            uuu = uu * u;
	
	            x = uuu * curve.startPoint.x;
	            x += 3 * uu * t * curve.control1.x;
	            x += 3 * u * tt * curve.control2.x;
	            x += ttt * curve.endPoint.x;
	
	            y = uuu * curve.startPoint.y;
	            y += 3 * uu * t * curve.control1.y;
	            y += 3 * u * tt * curve.control2.y;
	            y += ttt * curve.endPoint.y;
	
	            width = startWidth + ttt * widthDelta;
	            this._drawPoint(x, y, width);
	        }
	        ctx.closePath();
	        ctx.fill();
	    };
	
	    SignaturePad.prototype._strokeWidth = function (velocity) {
	        return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
	    };
	
	
	    var Point = function (x, y, time) {
	        this.x = x;
	        this.y = y;
	        this.time = time || new Date().getTime();
	    };
	
	    Point.prototype.velocityFrom = function (start) {
	        return (this.time !== start.time) ? this.distanceTo(start) / (this.time - start.time) : 1;
	    };
	
	    Point.prototype.distanceTo = function (start) {
	        return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
	    };
	
	    var Bezier = function (startPoint, control1, control2, endPoint) {
	        this.startPoint = startPoint;
	        this.control1 = control1;
	        this.control2 = control2;
	        this.endPoint = endPoint;
	    };
	
	    // Returns approximated length.
	    Bezier.prototype.length = function () {
	        var steps = 10,
	            length = 0,
	            i, t, cx, cy, px, py, xdiff, ydiff;
	
	        for (i = 0; i <= steps; i++) {
	            t = i / steps;
	            cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
	            cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
	            if (i > 0) {
	                xdiff = cx - px;
	                ydiff = cy - py;
	                length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
	            }
	            px = cx;
	            py = cy;
	        }
	        return length;
	    };
	
	    Bezier.prototype._point = function (t, start, c1, c2, end) {
	        return          start * (1.0 - t) * (1.0 - t)  * (1.0 - t)
	               + 3.0 *  c1    * (1.0 - t) * (1.0 - t)  * t
	               + 3.0 *  c2    * (1.0 - t) * t          * t
	               +        end   * t         * t          * t;
	    };
	
	    return SignaturePad;
	})(document);
	
	return SignaturePad;
	
	}));


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);
	var alias = __webpack_require__(15);
	exports.alias = alias;
	var autosave = __webpack_require__(16);
	exports.autosave = autosave;
	exports.moduleName = 'rl.ui.behaviors';
	angular.module(exports.moduleName, [
	    alias.moduleName,
	    autosave.moduleName,
	]);
	//# sourceMappingURL=behaviors.module.js.map

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.behaviors.alias';
	exports.directiveName = 'rlAlias';
	exports.controllerName = 'AliasController';
	var AliasController = (function () {
	    function AliasController($scope, $attrs, $parse, $interpolate) {
	        var expression;
	        $scope.$watch(function () {
	            expression = $attrs.rlAlias.split(' as ');
	            return $parse(expression[0])($scope);
	        }, function (item) {
	            var alias = $interpolate(expression[1])($scope);
	            if (alias != null) {
	                $scope[alias] = item;
	            }
	        });
	    }
	    AliasController.$inject = ['$scope', '$attrs', '$parse', '$interpolate'];
	    return AliasController;
	})();
	exports.AliasController = AliasController;
	function alias() {
	    return {
	        restrict: 'A',
	        controller: exports.controllerName,
	    };
	}
	exports.alias = alias;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, alias)
	    .controller(exports.controllerName, AliasController);
	//# sourceMappingURL=alias.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __autosave = typescript_angular_utilities_1.services.autosave;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var __objectUtility = typescript_angular_utilities_1.services.object;
	var __autosaveAction = typescript_angular_utilities_1.services.autosaveAction;
	exports.moduleName = 'rl.ui.behaviors.autosave';
	exports.directiveName = 'rlAutosave';
	exports.controllerName = 'AutosaveController';
	var AutosaveController = (function () {
	    function AutosaveController($scope, $attrs, $parse, $element, $timeout, autosaveFactory, parentChildBehavior, objectUtility) {
	        this.$scope = $scope;
	        this.$element = $element;
	        this.$timeout = $timeout;
	        var contentForm = $element.controller('form');
	        var hasValidator = objectUtility.isNullOrWhitespace($attrs.validate) === false;
	        var validateExpression = $parse($attrs.validate);
	        var validate;
	        if (hasValidator) {
	            validate = function () {
	                return validateExpression($scope);
	            };
	        }
	        var saveExpression = $parse($attrs.save);
	        var save = function () {
	            return saveExpression($scope);
	        };
	        var debounce = $parse($attrs.debounceDuration)($scope);
	        this.autosave = autosaveFactory.getInstance({
	            save: save,
	            validate: validate,
	            contentForm: contentForm,
	            debounceDuration: debounce,
	        });
	        var behavior = {
	            autosave: this.autosave.autosave,
	        };
	        // register autosave behavior and assign the value back to the parent
	        var childLink = $parse($attrs.rlAutosave)($scope);
	        parentChildBehavior.registerChildBehavior(childLink, behavior);
	    }
	    AutosaveController.$inject = ['$scope',
	        '$attrs',
	        '$parse',
	        '$element',
	        '$timeout',
	        __autosave.factoryName,
	        __parentChild.serviceName,
	        __objectUtility.serviceName,
	        __autosaveAction.serviceName];
	    return AutosaveController;
	})();
	exports.AutosaveController = AutosaveController;
	function autosave() {
	    'use strict';
	    return {
	        restrict: 'A',
	        require: ['rlAutosave', '?ngForm'],
	        controller: exports.controllerName,
	        link: function (scope, element, attrs, controllers) {
	            var autosaveController = controllers[0];
	            autosaveController.autosave.setChangeListener = function (callback) {
	                element.on('keyup', scope.$apply(callback));
	                return function () {
	                    element.off('keyup');
	                };
	            };
	        },
	    };
	}
	exports.autosave = autosave;
	angular.module(exports.moduleName, [
	    __autosave.moduleName,
	    __autosaveAction.moduleName,
	    __objectUtility.moduleName,
	    __parentChild.moduleName,
	])
	    .directive(exports.directiveName, autosave)
	    .controller(exports.controllerName, AutosaveController);
	//# sourceMappingURL=autosave.js.map

/***/ },
/* 17 */
/***/ function(module, exports) {

	(function() { module.exports = this["rl_utilities"]; }());

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var autosaveDialogFooter = __webpack_require__(19);
	exports.autosaveDialogFooter = autosaveDialogFooter;
	var busy = __webpack_require__(21);
	exports.busy = busy;
	var button = __webpack_require__(22);
	exports.button = button;
	var buttonAsync = __webpack_require__(24);
	exports.buttonAsync = buttonAsync;
	var buttonLink = __webpack_require__(27);
	exports.buttonLink = buttonLink;
	var buttonToggle = __webpack_require__(29);
	exports.buttonToggle = buttonToggle;
	var cardContainer = __webpack_require__(31);
	exports.cardContainer = cardContainer;
	var checkbox = __webpack_require__(78);
	exports.checkbox = checkbox;
	var commaList = __webpack_require__(80);
	exports.commaList = commaList;
	var dateTime = __webpack_require__(81);
	exports.dateTime = dateTime;
	var genericContainer = __webpack_require__(89);
	exports.genericContainer = genericContainer;
	var lazyLoad = __webpack_require__(92);
	exports.lazyLoad = lazyLoad;
	var longClickButton = __webpack_require__(93);
	exports.longClickButton = longClickButton;
	var messageLog = __webpack_require__(95);
	exports.messageLog = messageLog;
	var multiStepIndicator = __webpack_require__(100);
	exports.multiStepIndicator = multiStepIndicator;
	var radio = __webpack_require__(102);
	exports.radio = radio;
	var ratingBar = __webpack_require__(105);
	exports.ratingBar = ratingBar;
	var richTextEditor = __webpack_require__(108);
	exports.richTextEditor = richTextEditor;
	var select = __webpack_require__(116);
	exports.select = select;
	var signaturePad = __webpack_require__(121);
	exports.signaturePad = signaturePad;
	var simpleCardList = __webpack_require__(122);
	exports.simpleCardList = simpleCardList;
	var spinner = __webpack_require__(125);
	exports.spinner = spinner;
	var stringWithWatermark = __webpack_require__(131);
	exports.stringWithWatermark = stringWithWatermark;
	var tabs = __webpack_require__(132);
	exports.tabs = tabs;
	var textarea = __webpack_require__(137);
	exports.textarea = textarea;
	var textbox = __webpack_require__(139);
	exports.textbox = textbox;
	var typeahead = __webpack_require__(141);
	exports.typeahead = typeahead;
	var userRating = __webpack_require__(143);
	exports.userRating = userRating;
	var validationGroup = __webpack_require__(144);
	exports.validationGroup = validationGroup;
	exports.moduleName = 'rl.ui.components';
	angular.module(exports.moduleName, [
	    autosaveDialogFooter.moduleName,
	    busy.moduleName,
	    button.moduleName,
	    buttonAsync.moduleName,
	    buttonLink.moduleName,
	    buttonToggle.moduleName,
	    cardContainer.moduleName,
	    checkbox.moduleName,
	    commaList.moduleName,
	    dateTime.moduleName,
	    genericContainer.moduleName,
	    lazyLoad.moduleName,
	    longClickButton.moduleName,
	    messageLog.moduleName,
	    multiStepIndicator.moduleName,
	    radio.moduleName,
	    ratingBar.moduleName,
	    richTextEditor.moduleName,
	    select.moduleName,
	    signaturePad.moduleName,
	    simpleCardList.moduleName,
	    spinner.moduleName,
	    stringWithWatermark.moduleName,
	    tabs.moduleName,
	    textarea.moduleName,
	    textbox.moduleName,
	    typeahead.moduleName,
	    userRating.moduleName,
	    validationGroup.moduleName,
	]);
	//# sourceMappingURL=components.module.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.autosaveDialogFooter';
	exports.directiveName = 'rlAutosaveDialogFooter';
	function autosaveDialogFooter() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(20),
	    };
	}
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, autosaveDialogFooter);
	//# sourceMappingURL=autosaveDialogFooter.js.map

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal-footer\">\r\n\t<button class=\"btn btn-default\" type=\"button\" ng-click=\"$close()\">Cancel</button>\r\n\t<button class=\"btn btn-primary\" type=\"button\" ng-click=\"$dismiss()\">Save</button>\r\n</div>"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.busy';
	exports.directiveName = 'rlBusy';
	function busy() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: '<i class="fa fa-spin fa-spinner fa-{{size}}" ng-show="loading"></i>',
	        scope: {
	            loading: '=',
	            // Valid values are:
	            // `lg`, `2x`, `3x`, `4x`, and `5x`
	            size: '@',
	        },
	    };
	}
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, busy);
	//# sourceMappingURL=busy.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.button';
	exports.directiveName = 'rlButton';
	exports.controllerName = 'ButtonController';
	var ButtonController = (function () {
	    function ButtonController() {
	        this.type = this.type != null ? this.type : 'default';
	        this.configuredSize = this.size != null ? 'btn-' + this.size : null;
	    }
	    return ButtonController;
	})();
	exports.ButtonController = ButtonController;
	function button() {
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: __webpack_require__(23),
	        scope: {},
	        bindToController: {
	            action: '&',
	            type: '@',
	            ngDisabled: '=',
	            size: '@',
	        },
	        controller: exports.controllerName,
	        controllerAs: 'button',
	    };
	}
	exports.button = button;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, button)
	    .controller(exports.controllerName, ButtonController);
	//# sourceMappingURL=button.js.map

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"btn btn-{{button.type}} {{button.configuredSize}}\" ng-click=\"button.action()\" ng-disabled=\"button.ngDisabled\">\r\n\t<span ng-transclude></span>\r\n</button>"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __promiseUtility = typescript_angular_utilities_1.services.promise;
	exports.moduleName = 'rl.ui.components.buttonAsync';
	exports.directiveName = 'rlButtonAsync';
	exports.controllerName = 'ButtonAsyncController';
	var ButtonAsyncController = (function () {
	    function ButtonAsyncController(promiseUtility) {
	        this.promiseUtility = promiseUtility;
	        this.type = this.type != null ? this.type : 'default';
	        this.sizeClass = this.size != null ? 'btn-' + this.size : null;
	    }
	    ButtonAsyncController.prototype.trigger = function () {
	        var _this = this;
	        if (!this.busy) {
	            this.busy = true;
	            var result = this.action();
	            if (this.promiseUtility.isPromise(result) && _.isFunction(result.finally)) {
	                result.finally(function () {
	                    _this.busy = false;
	                });
	            }
	        }
	    };
	    ButtonAsyncController.$inject = [__promiseUtility.serviceName];
	    return ButtonAsyncController;
	})();
	exports.ButtonAsyncController = ButtonAsyncController;
	function buttonAsync() {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: __webpack_require__(26),
	        scope: {},
	        bindToController: {
	            busy: '=',
	            action: '&',
	            type: '@',
	            ngDisabled: '=',
	            rightAligned: '=',
	            size: '@',
	        },
	        controller: exports.controllerName,
	        controllerAs: 'button',
	    };
	}
	angular.module(exports.moduleName, [__promiseUtility.moduleName])
	    .directive(exports.directiveName, buttonAsync)
	    .controller(exports.controllerName, ButtonAsyncController);
	//# sourceMappingURL=buttonAsync.js.map

/***/ },
/* 25 */
/***/ function(module, exports) {

	(function() { module.exports = this["_"]; }());

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"btn btn-{{button.type}} {{button.sizeClass}}\" ng-click=\"button.trigger()\" ng-disabled=\"button.busy || button.ngDisabled\">\r\n\t<rl-busy ng-show=\"button.rightAligned\" loading=\"button.busy\"></rl-busy>\r\n\t<span ng-transclude></span>\r\n\t<rl-busy ng-hide=\"button.rightAligned\" loading=\"button.busy\"></rl-busy>\r\n</button>"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.buttonLink';
	exports.directiveName = 'rlButtonLink';
	exports.controllerName = 'ButtonLinkController';
	var ButtonLinkController = (function () {
	    function ButtonLinkController() {
	        this.type = this.type != null ? this.type : 'default';
	        this.configuredSize = this.size != null ? 'btn-' + this.size : null;
	        this.target = this.newTab ? '_blank' : '_self';
	    }
	    return ButtonLinkController;
	})();
	exports.ButtonLinkController = ButtonLinkController;
	function buttonLink() {
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: __webpack_require__(28),
	        scope: {},
	        bindToController: {
	            link: '@',
	            type: '@',
	            ngDisabled: '=',
	            size: '@',
	            newTab: '=',
	        },
	        controller: exports.controllerName,
	        controllerAs: 'button',
	    };
	}
	exports.buttonLink = buttonLink;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, buttonLink)
	    .controller(exports.controllerName, ButtonLinkController);
	//# sourceMappingURL=buttonLink.js.map

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<a class=\"btn btn-{{button.type}} {{button.configuredSize}}\" ng-href=\"{{button.link}}\" ng-disabled=\"button.ngDisabled\" target=\"{{button.target}}\">\r\n\t<span ng-transclude></span>\r\n</a>"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __boolean = typescript_angular_utilities_1.services.boolean;
	exports.moduleName = 'rl.ui.components.buttonToggle';
	exports.directiveName = 'rlButtonToggle';
	exports.controllerName = 'ButtonToggleController';
	var ButtonToggleController = (function () {
	    function ButtonToggleController($scope, bool) {
	        var _this = this;
	        this.$scope = $scope;
	        this.buttonClass = $scope.type != null ? $scope.type : 'default';
	        this.buttonSize = $scope.size != null ? 'btn-' + $scope.size : null;
	        $scope.$watch('ngModel.$modelValue', function (value) {
	            _this.isActive = bool.toBool(value);
	            if (value != null && _.isFunction($scope.onToggle)) {
	                $scope.onToggle({ value: value });
	            }
	        });
	    }
	    ButtonToggleController.prototype.clicked = function () {
	        this.$scope.ngModel.$setViewValue(!this.$scope.ngModel.$viewValue);
	    };
	    ButtonToggleController.$inject = ['$scope', __boolean.serviceName];
	    return ButtonToggleController;
	})();
	function buttonToggle() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^ngModel',
	        transclude: true,
	        template: __webpack_require__(30),
	        controller: exports.controllerName,
	        controllerAs: 'buttonToggle',
	        scope: {
	            type: '@',
	            size: '@',
	            onToggle: '&',
	            disabled: '=ngDisabled',
	        },
	        link: function (scope, element, attrs, ngModel) {
	            scope.ngModel = ngModel;
	        }
	    };
	}
	angular.module(exports.moduleName, [__boolean.moduleName])
	    .directive(exports.directiveName, buttonToggle)
	    .controller(exports.controllerName, ButtonToggleController);
	//# sourceMappingURL=buttonToggle.js.map

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<button type=\"button\" class=\"btn btn-{{buttonToggle.buttonClass}} {{buttonToggle.buttonSize}}\" \r\n\t\tng-class=\"{ active : buttonToggle.isActive }\" ng-click=\"buttonToggle.clicked()\" ng-disabled=\"disabled\">\r\n\t<i ng-show=\"buttonToggle.isActive\" class=\"fa fa-check completed\"></i> <span ng-transclude></span>\r\n</button>"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var __array = typescript_angular_utilities_1.services.array;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var card = __webpack_require__(32);
	exports.card = card;
	var cardSearch = __webpack_require__(38);
	exports.cardSearch = cardSearch;
	var columnHeader = __webpack_require__(40);
	exports.columnHeader = columnHeader;
	var dataSources = __webpack_require__(42);
	exports.dataSources = dataSources;
	var filters = __webpack_require__(54);
	exports.filters = filters;
	var itemCount = __webpack_require__(64);
	exports.itemCount = itemCount;
	var pager = __webpack_require__(66);
	exports.pager = pager;
	var pageSize = __webpack_require__(68);
	exports.pageSize = pageSize;
	var selectionControl = __webpack_require__(70);
	exports.selectionControl = selectionControl;
	var sorts = __webpack_require__(43);
	exports.sorts = sorts;
	var cardContainer_1 = __webpack_require__(72);
	__export(__webpack_require__(72));
	__export(__webpack_require__(73));
	__export(__webpack_require__(77));
	exports.moduleName = 'rl.ui.components.cardContainer';
	angular.module(exports.moduleName, [
	    // dependencies
	    dataSources.dataPager.moduleName,
	    __object.moduleName,
	    __array.moduleName,
	    __parentChild.moduleName,
	    // components
	    card.moduleName,
	    cardSearch.moduleName,
	    columnHeader.moduleName,
	    itemCount.moduleName,
	    pager.moduleName,
	    pageSize.moduleName,
	    selectionControl.moduleName,
	    // submodules
	    dataSources.moduleName,
	    filters.moduleName,
	    sorts.moduleName,
	])
	    .directive(cardContainer_1.directiveName, cardContainer_1.cardContainer)
	    .controller(cardContainer_1.controllerName, cardContainer_1.CardContainerController);
	//# sourceMappingURL=cardContainer.module.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var __object = typescript_angular_utilities_1.services.object;
	var headerColumn_module_1 = __webpack_require__(33);
	exports.moduleName = 'rl.ui.components.cardContainer.card';
	exports.directiveName = 'rlCard';
	exports.controllerName = 'CardController';
	var CardController = (function () {
	    function CardController($scope, $controller, $q, parentChild, object) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$q = $q;
	        this.parentChild = parentChild;
	        this.showContent = false;
	        this.dirty = false;
	        this.autosaveLink = {};
	        this.autosave = function () {
	            if (_this.showContent === false) {
	                return true;
	            }
	            return _this.parentChild.triggerChildBehavior(_this.autosaveLink, function (behavior) {
	                if (behavior.autosave()) {
	                    _this.showContent = false;
	                    return true;
	                }
	                else {
	                    return false;
	                }
	            });
	        };
	        if (this.cardAs) {
	            $scope[this.cardAs] = this.item;
	        }
	        $scope.collapse = this.autosave;
	        $scope.setSelected = this.setSelected.bind(this);
	        $scope.refresh = function () {
	            _this.source.refresh();
	            $scope.$broadcast('card.refresh');
	        };
	        $scope.remove = function () {
	            _this.source.remove(_this.item);
	        };
	        $scope.containerData = this.containerData;
	        if (object.isNullOrWhitespace(this.cardController) === false) {
	            var controller = $controller(this.cardController, { $scope: $scope });
	            if (object.isNullOrWhitespace(this.cardControllerAs) === false) {
	                $scope[this.cardControllerAs] = controller;
	            }
	        }
	        parentChild.registerChildBehavior(this.item, {
	            close: this.autosave,
	        });
	        $scope.__initContents = function (hasBody, hasFooter) {
	            _this.hasBody = hasBody;
	            _this.hasFooter = hasFooter;
	        };
	    }
	    CardController.prototype.toggleContent = function () {
	        if (!this.showContent) {
	            this.open();
	        }
	        else {
	            this.autosave();
	        }
	    };
	    CardController.prototype.validateCard = function () {
	        var behavior = this.parentChild.getChildBehavior(this.item);
	        if (_.isFunction(behavior.validateCard)) {
	            return behavior.validateCard();
	        }
	        else {
	            return true;
	        }
	    };
	    CardController.prototype.saveCard = function () {
	        var behavior = this.parentChild.getChildBehavior(this.item);
	        if (_.isFunction(behavior.saveCard)) {
	            return behavior.saveCard();
	        }
	        else {
	            return this.$q.when();
	        }
	    };
	    CardController.prototype.clickCard = function () {
	        this.parentChild.triggerChildBehavior(this.item, function (behavior) {
	            if (_.isFunction(behavior.clickCard)) {
	                return behavior.clickCard();
	            }
	        });
	    };
	    CardController.prototype.open = function () {
	        this.parentChild.triggerChildBehavior(this.item, function (behavior) {
	            if (_.isFunction(behavior.initCard)) {
	                behavior.initCard();
	            }
	        });
	        if (this.$scope.__rlCardContainer.openCard()) {
	            this.showContent = true;
	        }
	    };
	    CardController.prototype.setSelected = function (value) {
	        if (_.isUndefined(this.item.viewData)) {
	            this.item.viewData = {};
	        }
	        this.item.viewData.selected = value;
	        this.selectionChanged();
	    };
	    CardController.$inject = ['$scope', '$controller', '$q', __parentChild.serviceName, __object.serviceName];
	    return CardController;
	})();
	exports.CardController = CardController;
	function card() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(37),
	        require: '^^rlCardContainer',
	        controller: exports.controllerName,
	        controllerAs: '__card',
	        scope: {},
	        bindToController: {
	            columns: '=',
	            item: '=',
	            clickable: '=',
	            source: '=',
	            containerData: '=',
	            cardController: '=',
	            cardControllerAs: '=',
	            cardAs: '=',
	            permanentFooter: '=',
	            selectable: '=',
	            selectionChanged: '&',
	        },
	        link: function (scope, element, attrs, rlCardContainer) {
	            rlCardContainer.makeCard(scope, function (clone) {
	                var content = clone.filter('rl-card-content');
	                var footer = clone.filter('rl-card-footer');
	                var contentArea = element.find('.content-template');
	                contentArea.append(content);
	                var hasBody = content.length > 0;
	                var hasFooter = (footer.length > 0);
	                if (hasFooter) {
	                    var footerArea = element.find('.footer-template');
	                    footerArea.append(footer);
	                }
	                scope.__initContents(hasBody, hasFooter);
	            });
	        },
	    };
	}
	exports.card = card;
	angular.module(exports.moduleName, [
	    __parentChild.moduleName,
	    __object.moduleName,
	    headerColumn_module_1.moduleName,
	])
	    .directive(exports.directiveName, card)
	    .controller(exports.controllerName, CardController);
	//# sourceMappingURL=card.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var headerColumn_1 = __webpack_require__(34);
	var sizeForBreakpoints_1 = __webpack_require__(35);
	exports.moduleName = 'rl.ui.components.cardContainer.card.headerColumn';
	angular.module(exports.moduleName, [
	    typescript_angular_utilities_1.services.string.moduleName,
	])
	    .directive(sizeForBreakpoints_1.sizeForBreakpointsName, sizeForBreakpoints_1.sizeForBreakpoints)
	    .directive(headerColumn_1.directiveName, headerColumn_1.headerColumn)
	    .controller(headerColumn_1.controllerName, headerColumn_1.HeaderColumnController);
	//# sourceMappingURL=headerColumn.module.js.map

/***/ },
/* 34 */
/***/ function(module, exports) {

	// /// <reference path='../../../../../typings/jquery/jquery.d.ts' />
	'use strict';
	exports.directiveName = 'rlCardHeaderColumn';
	exports.controllerName = 'CardHeaderColumnController';
	var HeaderColumnController = (function () {
	    function HeaderColumnController($scope) {
	        var _this = this;
	        this.$scope = $scope;
	        this.update = function () {
	            _this.value = _this.column.getValue(_this.item);
	        };
	        this.update();
	        $scope.$on('card.refresh', this.update); //*event?
	    }
	    HeaderColumnController.$inject = ['$scope'];
	    return HeaderColumnController;
	})();
	exports.HeaderColumnController = HeaderColumnController;
	headerColumn.$inject = ['$compile'];
	function headerColumn($compile) {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div rl-size-for-breakpoints=\"header.column.size\" title=\"{{::header.column.description}}\">\n\t\t\t\t<div class=\"template-container\" style=\"display: inline-block\"></div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'header',
	        scope: {},
	        bindToController: {
	            column: '=',
	            item: '=',
	        },
	        compile: function () {
	            return {
	                pre: function (scope, element, attrs, header) {
	                    var column = header.column;
	                    if (column.templateUrl != null) {
	                        header.renderedTemplate = $compile('<div ng-include="\'' + column.templateUrl + '\'"></div>')(scope);
	                    }
	                    else if (column.template != null) {
	                        header.renderedTemplate = $compile(column.template)(scope);
	                    }
	                    else {
	                        header.renderedTemplate = $compile('<span>{{header.value}}</span>')(scope);
	                    }
	                },
	                post: function (scope, element, attrs, header) {
	                    var container = element.find('.template-container');
	                    container.append(header.renderedTemplate);
	                },
	            };
	        },
	    };
	}
	exports.headerColumn = headerColumn;
	//# sourceMappingURL=headerColumn.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __string = typescript_angular_utilities_1.services.string;
	var breakpoint_1 = __webpack_require__(36);
	exports.sizeForBreakpointsName = 'rlSizeForBreakpoints';
	sizeForBreakpoints.$inject = ['$parse', __string.serviceName];
	function sizeForBreakpoints($parse, stringUtility) {
	    'use strict';
	    return {
	        restrict: 'A',
	        link: linkDirective,
	    };
	    function linkDirective(scope, element, attributes) {
	        var sizes = $parse(attributes.rlSizeForBreakpoints)(scope);
	        var classes = [];
	        classes.push(getColumnClass(sizes, breakpoint_1.xs));
	        classes.push(getColumnClass(sizes, breakpoint_1.sm));
	        classes.push(getColumnClass(sizes, breakpoint_1.md));
	        classes.push(getColumnClass(sizes, breakpoint_1.lg));
	        element.addClass(classes.join(' '));
	    }
	    function getColumnClass(columnSizes, breakpoint) {
	        var value = columnSizes[breakpoint];
	        if (value > 0 && value !== 'hidden') {
	            return stringUtility.substitute('col-{0}-{1}', breakpoint, value);
	        }
	        else {
	            return 'hidden-' + breakpoint;
	        }
	    }
	}
	exports.sizeForBreakpoints = sizeForBreakpoints;
	//# sourceMappingURL=sizeForBreakpoints.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	exports.lg = 'lg';
	exports.md = 'md';
	exports.sm = 'sm';
	exports.xs = 'xs';
	exports.all = [exports.xs, exports.sm, exports.md, exports.lg];
	//# sourceMappingURL=breakpoint.js.map

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<rl-generic-container selector=\"__card.selectable\">\r\n\t<template when-selector=\"false\" default>\r\n\t\t<div class=\"card\" ng-class=\"{ 'selected': __card.item.viewData.selected }\">\r\n\t\t\t<div class=\"header\" ng-click=\"__card.toggleContent()\" ng-class=\"{ 'active': __card.hasBody || !__card.permanentFooter }\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div ng-repeat=\"column in __card.columns\">\r\n\t\t\t\t\t\t<rl-card-header-column column=\"column\" item=\"__card.item\"></rl-card-header-column>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div ng-show=\"__card.showContent\">\r\n\t\t\t\t<ng-form rl-autosave=\"__card.autosaveLink\" save=\"__card.saveCard()\" validate=\"__card.validateCard()\">\r\n\t\t\t\t\t<div class=\"body\" ng-class=\"{ 'active': __card.clickable }\" ng-click=\"__card.clickCard()\">\r\n\t\t\t\t\t\t<div class=\"content-template\"></div>\r\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-form>\r\n\t\t\t</div>\r\n\t\t\t<div ng-show=\"__card.hasFooter && (__card.showContent || __card.permanentFooter)\">\r\n\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t<div class=\"footer-template\"></div>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</template>\r\n\t<template when-selector=\"true\">\r\n\t\t<div class=\"select-group\">\r\n\t\t\t<div class=\"select-column\">\r\n\t\t\t\t<input type=\"checkbox\" class=\"stand-alone-checkbox\" ng-model=\"__card.item.viewData.selected\" ng-change=\"__card.selectionChanged()\"\r\n\t\t\t\t\t   ng-disabled=\"__card.item.viewData.disabledSelection\" title=\"{{__card.item.viewData.selectionTitle}}\" />\r\n\t\t\t</div>\r\n\t\t\t<div class=\"select-content\">\r\n\r\n\t\t\t\t<div class=\"card selectable\" ng-class=\"{ 'selected': __card.item.viewData.selected }\">\r\n\t\t\t\t\t<div class=\"header active\" ng-click=\"__card.toggleContent()\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div ng-repeat=\"column in __card.columns\">\r\n\t\t\t\t\t\t\t\t<rl-card-header-column column=\"column\" item=\"__card.item\"></rl-card-header-column>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div ng-show=\"__card.showContent\">\r\n\t\t\t\t\t\t<ng-form rl-autosave=\"__card.autosaveLink\" save=\"__card.saveCard()\" validate=\"__card.validateCard()\">\r\n\t\t\t\t\t\t\t<div class=\"body\" ng-class=\"{ 'active': __card.clickable }\" ng-click=\"__card.clickCard()\">\r\n\t\t\t\t\t\t\t\t<div class=\"content-template\"></div>\r\n\t\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div ng-show=\"__card.hasFooter && (__card.showContent || __card.permanentFooter)\">\r\n\t\t\t\t\t\t<div class=\"footer\">\r\n\t\t\t\t\t\t\t<div class=\"footer-template\"></div>\r\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</template>\r\n</rl-generic-container>"

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __genericSearchFilter = typescript_angular_utilities_1.services.genericSearchFilter;
	exports.moduleName = 'rl.ui.components.cardContainer.cardSearch';
	exports.directiveName = 'rlCardSearch';
	exports.controllerName = 'CardSearchController';
	exports.defaultSearchPlaceholder = 'Search';
	exports.defaultSearchDelay = 1000;
	var CardSearchController = (function () {
	    function CardSearchController($scope, $timeout) {
	        var _this = this;
	        this.searchLengthError = false;
	        this.hasSearchFilter = true;
	        if (this.containerService == null) {
	            return;
	        }
	        if (this.searchFilter == null) {
	            var filter = this.containerService.lookupFilter(__genericSearchFilter.filterName);
	            this.searchFilter = filter;
	            if (filter == null) {
	                this.hasSearchFilter = false;
	            }
	        }
	        if (this.hasSearchFilter) {
	            this.searchPlaceholder = exports.defaultSearchPlaceholder;
	            var dataSource = this.containerService.dataSource;
	            var delay = this.delay != null
	                ? this.delay
	                : exports.defaultSearchDelay;
	            var timer;
	            $scope.$watch(function () { return _this.searchText; }, function (search) {
	                _this.searchFilter.searchText = search;
	                _this.minSearchLength = _this.searchFilter.minSearchLength;
	                _this.validateSearchLength(search, _this.minSearchLength);
	                if (timer != null) {
	                    $timeout.cancel(timer);
	                }
	                timer = $timeout(dataSource.refresh.bind(dataSource), delay);
	            });
	        }
	    }
	    CardSearchController.prototype.validateSearchLength = function (search, minLength) {
	        // show error if search string exists but is below minimum size
	        this.searchLengthError = search != null
	            && search.length > 0
	            && search.length < minLength;
	    };
	    CardSearchController.$inject = ['$scope', '$timeout'];
	    return CardSearchController;
	})();
	exports.CardSearchController = CardSearchController;
	function cardSearch() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(39),
	        controller: exports.controllerName,
	        controllerAs: 'cardSearch',
	        scope: {},
	        bindToController: {
	            delay: '=searchDelay',
	            containerService: '=',
	            searchFilter: '=',
	        },
	    };
	}
	exports.cardSearch = cardSearch;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, cardSearch)
	    .controller(exports.controllerName, CardSearchController);
	//# sourceMappingURL=cardSearch.js.map

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group\" ng-show=\"cardSearch.hasSearchFilter\" ng-class=\"{ 'has-error': cardSearch.searchLengthError }\">\r\n\t<input class=\"form-control\" type=\"text\" placeholder=\"{{cardSearch.searchPlaceholder}}\" ng-model=\"cardSearch.searchText\"\r\n\t\t\tpopover=\"You must enter at least {{cardSearch.minSearchLength}} characters to perform a search\" popover-trigger=\"mouseenter\" popover-enable=\"cardSearch.searchLengthError\" />\r\n\t<div class=\"input-group-btn\">\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-disabled=\"cardSearch.searchText | isEmpty\" ng-click=\"cardSearch.searchText = null\">\r\n\t\t\t<i class=\"fa fa-times\"></i>\r\n\t\t</button>\r\n\t</div>\r\n</div>"

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var sortDirection_1 = __webpack_require__(41);
	exports.moduleName = 'rl.ui.components.cardContainer.columnHeader';
	exports.directiveName = 'rlColumnHeader';
	cardColumnHeader.$inject = ['$compile'];
	function cardColumnHeader($compile) {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^^rlCardContainer',
	        template: "\n\t\t\t<div rl-size-for-breakpoints=\"column.size\" ng-click=\"sort()\" title=\"{{::column.description}}\"\n\t\t\t\t\tclass=\"column-header\">\n\t\t\t\t<div class=\"template-container\" style=\"display: inline-block\"></div>\n\t\t\t\t<i ng-show=\"sorting === sortDirection.ascending\" class=\"fa fa-sort-asc\"></i>\n\t\t\t\t<i ng-show=\"sorting === sortDirection.descending\" class=\"fa fa-sort-desc\"></i>\n\t\t\t</div>\n\t\t",
	        scope: {
	            column: '=',
	            sorting: '=',
	            sort: '&',
	        },
	        compile: function () {
	            return {
	                pre: function (scope) {
	                    var column = scope.column;
	                    if (column.headerTemplateUrl != null) {
	                        scope.renderedTemplate = $compile('<div ng-include="\'' + column.headerTemplateUrl + '\'"></div>')(scope);
	                    }
	                    else if (column.headerTemplate != null) {
	                        scope.renderedTemplate = $compile(column.headerTemplate)(scope);
	                    }
	                    else {
	                        scope.renderedTemplate = ('<h5>' + column.label + '</h5');
	                    }
	                },
	                post: function (scope, element) {
	                    var container = element.find('.template-container');
	                    container.append(scope.renderedTemplate);
	                    scope.sortDirection = sortDirection_1.SortDirection;
	                },
	            };
	        }
	    };
	}
	exports.cardColumnHeader = cardColumnHeader;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, cardColumnHeader);
	//# sourceMappingURL=columnHeader.js.map

/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';
	var SortDirection = (function () {
	    function SortDirection(value) {
	        this.value = value;
	    }
	    SortDirection.toggle = function (direction) {
	        if (direction === SortDirection.ascending) {
	            return SortDirection.descending;
	        }
	        else if (direction === SortDirection.descending) {
	            return SortDirection.none;
	        }
	        else {
	            return SortDirection.ascending;
	        }
	    };
	    SortDirection.getFullName = function (direction) {
	        'use strict';
	        if (direction === SortDirection.ascending) {
	            return 'ascending';
	        }
	        else if (direction === SortDirection.descending) {
	            return 'descending';
	        }
	        else {
	            return 'none';
	        }
	    };
	    SortDirection.none = new SortDirection(0);
	    SortDirection.ascending = new SortDirection(1);
	    SortDirection.descending = new SortDirection(2);
	    return SortDirection;
	})();
	exports.SortDirection = SortDirection;
	//# sourceMappingURL=sortDirection.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var sorts_module_1 = __webpack_require__(43);
	var dataPager = __webpack_require__(47);
	exports.dataPager = dataPager;
	var dataServiceDataSource = __webpack_require__(48);
	exports.dataServiceDataSource = dataServiceDataSource;
	var simpleDataSource = __webpack_require__(51);
	exports.simpleDataSource = simpleDataSource;
	var serverSearchDataSource = __webpack_require__(52);
	exports.serverSearchDataSource = serverSearchDataSource;
	var dataSourceProcessor = __webpack_require__(50);
	exports.dataSourceProcessor = dataSourceProcessor;
	var dataSourceBase = __webpack_require__(49);
	exports.dataSourceBase = dataSourceBase;
	__export(__webpack_require__(53));
	exports.moduleName = 'rl.ui.components.cardContainer.dataSources';
	angular.module(exports.moduleName, [
	    typescript_angular_utilities_1.services.object.moduleName,
	    sorts_module_1.moduleName,
	    dataPager.moduleName,
	    dataServiceDataSource.moduleName,
	    simpleDataSource.moduleName,
	    serverSearchDataSource.moduleName,
	])
	    .service(dataSourceProcessor.processorServiceName, dataSourceProcessor.DataSourceProcessor);
	//# sourceMappingURL=dataSources.module.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var mergeSort = __webpack_require__(44);
	exports.mergeSort = mergeSort;
	var sorter = __webpack_require__(45);
	exports.sorter = sorter;
	__export(__webpack_require__(46));
	__export(__webpack_require__(41));
	exports.moduleName = 'rl.ui.components.cardContainer.sorts';
	angular.module(exports.moduleName, [
	    mergeSort.moduleName,
	    sorter.moduleName,
	]);
	//# sourceMappingURL=sorts.module.js.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	exports.moduleName = 'rl.ui.components.cardContainer.sorts.mergeSort';
	exports.serviceName = 'mergeSort';
	var MergeSort = (function () {
	    function MergeSort() {
	    }
	    MergeSort.prototype.sort = function (data, compare) {
	        if (data.length < 2) {
	            return data;
	        }
	        if (compare == null) {
	            compare = this.defaultCompare;
	        }
	        var mid;
	        var left;
	        var right;
	        mid = data.length / 2;
	        left = this.sort(data.slice(0, mid), compare);
	        right = this.sort(data.slice(mid, data.length), compare);
	        return this.merge(left, right, compare);
	    };
	    MergeSort.prototype.defaultCompare = function (a, b) {
	        return a < b
	            ? typescript_angular_utilities_1.types.CompareResult.less
	            : (a > b ? typescript_angular_utilities_1.types.CompareResult.greater : typescript_angular_utilities_1.types.CompareResult.equal);
	    };
	    MergeSort.prototype.merge = function (left, right, compare) {
	        var result = [];
	        while (left.length && right.length) {
	            if (compare(left[0], right[0]) === typescript_angular_utilities_1.types.CompareResult.greater) {
	                result.push(right.shift());
	            }
	            else {
	                // if equal it should preserve same order (stable)
	                result.push(left.shift());
	            }
	        }
	        if (left.length) {
	            result.push.apply(result, left);
	        }
	        if (right.length) {
	            result.push.apply(result, right);
	        }
	        return result;
	    };
	    return MergeSort;
	})();
	exports.MergeSort = MergeSort;
	angular.module(exports.moduleName, [])
	    .service(exports.serviceName, MergeSort);
	//# sourceMappingURL=mergeSort.service.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var sortDirection_1 = __webpack_require__(41);
	var mergeSort_service_1 = __webpack_require__(44);
	exports.moduleName = 'rl.ui.components.cardContainer.sorts.sorter';
	exports.serviceName = 'sorter';
	var Sorter = (function () {
	    function Sorter(mergeSort) {
	        this.mergeSort = mergeSort;
	    }
	    Sorter.prototype.sort = function (data, sort) {
	        var _this = this;
	        if (sort === null) {
	            return data;
	        }
	        if (_.isArray(sort)) {
	            var reverseSorts = _.clone(sort);
	            reverseSorts.reverse();
	            return _.reduce(reverseSorts, function (sortedData, nextSort) {
	                return _this.singleSort(sortedData, nextSort);
	            }, data);
	        }
	        return this.singleSort(data, sort);
	    };
	    Sorter.prototype.singleSort = function (data, sort) {
	        var compareFunction = this.buildSortFunction(sort);
	        return this.mergeSort.sort(data, compareFunction);
	    };
	    Sorter.prototype.buildSortFunction = function (sort) {
	        return function (a, b) {
	            if (sort.direction === sortDirection_1.SortDirection.none) {
	                return typescript_angular_utilities_1.types.CompareResult.equal;
	            }
	            var valueOfA = sort.column.getValue(a);
	            var valueOfB = sort.column.getValue(b);
	            var greaterResult = typescript_angular_utilities_1.types.CompareResult.greater;
	            var lessResult = typescript_angular_utilities_1.types.CompareResult.less;
	            var descendingSort = (sort.direction === sortDirection_1.SortDirection.descending);
	            var flip = sort.column.flipSort;
	            // Exclusive OR... if flipping a descending sort, you get an ascending sort
	            if ((descendingSort || flip) && !(descendingSort && flip)) {
	                greaterResult = typescript_angular_utilities_1.types.CompareResult.less;
	                lessResult = typescript_angular_utilities_1.types.CompareResult.greater;
	            }
	            return valueOfA > valueOfB
	                ? greaterResult
	                : (valueOfA < valueOfB ? lessResult : typescript_angular_utilities_1.types.CompareResult.equal);
	        };
	    };
	    Sorter.$inject = [mergeSort_service_1.serviceName];
	    return Sorter;
	})();
	exports.Sorter = Sorter;
	angular.module(exports.moduleName, [])
	    .service(exports.serviceName, Sorter);
	//# sourceMappingURL=sorter.service.js.map

/***/ },
/* 46 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=sort.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../../typings/lodashTypeExtensions.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	exports.moduleName = 'rl.ui.components.cardContainer.dataSources.dataPager';
	exports.factoryName = 'dataPager';
	exports.defaultPageSize = 10;
	var DataPager = (function () {
	    function DataPager() {
	        this.pageNumber = 1;
	        this.pageSize = exports.defaultPageSize;
	    }
	    DataPager.prototype.filter = function (dataSet) {
	        var size = this.pageSize;
	        var start = (this.pageNumber - 1) * size;
	        return _(dataSet)
	            .drop(start)
	            .take(size)
	            .value();
	    };
	    return DataPager;
	})();
	exports.DataPager = DataPager;
	function dataPagerFactory() {
	    'use strict';
	    return {
	        getInstance: function () {
	            return new DataPager();
	        },
	    };
	}
	exports.dataPagerFactory = dataPagerFactory;
	angular.module(exports.moduleName, [])
	    .factory(exports.factoryName, dataPagerFactory);
	//# sourceMappingURL=dataPager.service.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __array = typescript_angular_utilities_1.services.array;
	var dataSourceBase_service_1 = __webpack_require__(49);
	var dataSourceProcessor_service_1 = __webpack_require__(50);
	exports.moduleName = 'rl.ui.components.cardContainer.dataSources.dataServiceDataSource';
	exports.factoryName = 'dataServiceDataSource';
	var DataServiceDataSource = (function (_super) {
	    __extends(DataServiceDataSource, _super);
	    function DataServiceDataSource(getDataSet, $q, observableFactory, dataSourceProcessor, array) {
	        _super.call(this, observableFactory, dataSourceProcessor, array);
	        this.getDataSet = getDataSet;
	        this.$q = $q;
	        this.countFilterGroups = true;
	        if (_.isFunction(this.getDataSet)) {
	            this.reload();
	        }
	    }
	    DataServiceDataSource.prototype.reload = function () {
	        var _this = this;
	        this.dataSet = null;
	        this.rawDataSet = null;
	        this.loadingDataSet = true;
	        this.$q.when(this.getDataSet()).then(function (data) {
	            _this.loadingDataSet = false;
	            _this.rawDataSet = data;
	            _this.refresh();
	            _this.observable.fire('reloaded');
	            _this.observable.fire('changed');
	        });
	    };
	    return DataServiceDataSource;
	})(dataSourceBase_service_1.DataSourceBase);
	exports.DataServiceDataSource = DataServiceDataSource;
	dataServiceDataSourceFactory.$inject = [__observable.factoryName, dataSourceProcessor_service_1.processorServiceName, __array.serviceName, '$q'];
	function dataServiceDataSourceFactory(observableFactory, dataSourceProcessor, array, $q) {
	    'use strict';
	    return {
	        getInstance: function (getDataSet) {
	            return new DataServiceDataSource(getDataSet, $q, observableFactory, dataSourceProcessor, array);
	        },
	    };
	}
	exports.dataServiceDataSourceFactory = dataServiceDataSourceFactory;
	angular.module(exports.moduleName, [__observable.moduleName, __array.moduleName])
	    .factory(exports.factoryName, dataServiceDataSourceFactory);
	//# sourceMappingURL=dataServiceDataSource.service.js.map

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';
	var DataSourceBase = (function () {
	    function DataSourceBase(observableFactory, dataSourceProcessor, array) {
	        this.dataSourceProcessor = dataSourceProcessor;
	        this.array = array;
	        this.sorts = [];
	        this.filters = {};
	        this.count = 0;
	        this.countFilterGroups = false;
	        this.loadingDataSet = false;
	        this.observable = observableFactory.getInstance();
	    }
	    DataSourceBase.prototype.watch = function (action, event) {
	        return this.observable.register(action, event);
	    };
	    DataSourceBase.prototype.processData = function () {
	        var processedData;
	        if (this.countFilterGroups) {
	            processedData = this.dataSourceProcessor.processAndCount(this.sorts, this.filters, this.pager, this.rawDataSet);
	        }
	        else {
	            processedData = this.dataSourceProcessor.process(this.sorts, this.filters, this.pager, this.rawDataSet);
	        }
	        this.count = processedData.count;
	        this.dataSet = processedData.dataSet;
	        this.filteredDataSet = processedData.filteredDataSet;
	    };
	    DataSourceBase.prototype.refresh = function () {
	        if (!this.loadingDataSet) {
	            this.processData();
	            this.observable.fire('redrawing');
	        }
	    };
	    DataSourceBase.prototype.remove = function (data) {
	        var item = this.array.remove(this.rawDataSet, data);
	        if (item != null) {
	            this.observable.fire('removed');
	            this.observable.fire('changed');
	            if (this.pager) {
	                this.refresh();
	            }
	        }
	    };
	    DataSourceBase.prototype.push = function (data) {
	        this.rawDataSet.push(data);
	        this.observable.fire('added');
	        this.observable.fire('changed');
	        this.refresh();
	    };
	    DataSourceBase.prototype.replace = function (oldData, newData) {
	        var locationOfOldData = this.rawDataSet.indexOf(oldData);
	        if (locationOfOldData >= 0) {
	            this.array.replace(this.rawDataSet, oldData, newData);
	            this.observable.fire('replaced');
	            this.observable.fire('changed');
	            this.refresh();
	        }
	    };
	    return DataSourceBase;
	})();
	exports.DataSourceBase = DataSourceBase;
	//# sourceMappingURL=dataSourceBase.service.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var sorter_service_1 = __webpack_require__(45);
	exports.processorServiceName = 'dataSourceProcessor';
	var DataSourceProcessor = (function () {
	    function DataSourceProcessor(object, sorter) {
	        this.object = object;
	        this.sorter = sorter;
	    }
	    DataSourceProcessor.prototype.process = function (sorts, filters, pager, data) {
	        var processedData = data;
	        if (this.object.isNullOrEmpty(sorts) === false) {
	            processedData = this.sorter.sort(processedData, sorts);
	        }
	        if (this.object.isNullOrEmpty(filters) === false) {
	            processedData = _.reduce(filters, function (filteredData, filter) {
	                // Filter the data set using the filter function on the filter
	                return _.filter(filteredData, filter.filter, filter);
	            }, processedData);
	        }
	        var result = {
	            count: (processedData != null ? processedData.length : 0),
	            filteredDataSet: processedData,
	            dataSet: processedData,
	        };
	        if (pager != null) {
	            result.dataSet = pager.filter(processedData);
	        }
	        return result;
	    };
	    DataSourceProcessor.prototype.processAndCount = function (sorts, filters, pager, data) {
	        var _this = this;
	        // If there are no filters that need to updated option counts, use the normal processor
	        if (this.object.isNullOrEmpty(filters)
	            || _.any(filters, function (filter) { return _.isFunction(filter.updateOptionCounts); }) === false) {
	            return this.process(sorts, filters, pager, data);
	        }
	        var processedData = data;
	        if (this.object.isNullOrEmpty(sorts) === false) {
	            processedData = this.sorter.sort(processedData, sorts);
	        }
	        var wrappedData = this.wrapData(processedData);
	        // Run filtration logic and compute visible items
	        _.each(filters, function (filter) {
	            _.each(wrappedData, function (item) {
	                item.filterData[filter.type] = filter.filter(item.data);
	            });
	        });
	        // Give each filter a chance to update option counts
	        _.each(filters, function (filter) {
	            if (_.isFunction(filter.updateOptionCounts)) {
	                var otherFiltersApplied = _.filter(wrappedData, function (item) {
	                    // Omit the true or false of the current filter an
	                    //  only filter out items removed by other filters
	                    var filterData = _.omit(item.filterData, filter.type); //*filterData
	                    return _.all(_.values(filterData));
	                });
	                filter.updateOptionCounts(_this.unwrapData(otherFiltersApplied));
	            }
	        });
	        // Filter down to final data set by removing items that don't match all filters
	        wrappedData = _.filter(wrappedData, function (item) {
	            return _.all(_.values(item.filterData));
	        });
	        processedData = this.unwrapData(wrappedData);
	        var result = {
	            count: processedData.length,
	            filteredDataSet: processedData,
	            dataSet: processedData,
	        };
	        if (pager != null) {
	            result.dataSet = pager.filter(processedData);
	        }
	        return result;
	    };
	    DataSourceProcessor.prototype.wrapData = function (data) {
	        return _.map(data, function (item) {
	            return {
	                data: item,
	                filterData: {},
	            };
	        });
	    };
	    DataSourceProcessor.prototype.unwrapData = function (data) {
	        return _.map(data, function (item) {
	            return item.data;
	        });
	    };
	    DataSourceProcessor.$inject = [__object.serviceName, sorter_service_1.serviceName];
	    return DataSourceProcessor;
	})();
	exports.DataSourceProcessor = DataSourceProcessor;
	//# sourceMappingURL=dataSourceProcessor.service.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __array = typescript_angular_utilities_1.services.array;
	var dataSourceBase_service_1 = __webpack_require__(49);
	var dataSourceProcessor_service_1 = __webpack_require__(50);
	exports.moduleName = 'rl.ui.components.cardContainer.dataSources.simpleDataSource';
	exports.factoryName = 'simpleDataSource';
	var SimpleDataSource = (function (_super) {
	    __extends(SimpleDataSource, _super);
	    function SimpleDataSource(data, observableFactory, dataSourceProcessor, array) {
	        _super.call(this, observableFactory, dataSourceProcessor, array);
	        this.countFilterGroups = false;
	        this.rawDataSet = data;
	        this.processData();
	    }
	    return SimpleDataSource;
	})(dataSourceBase_service_1.DataSourceBase);
	exports.SimpleDataSource = SimpleDataSource;
	simpleDataSourceFactory.$inject = [__observable.factoryName, dataSourceProcessor_service_1.processorServiceName, __array.serviceName];
	function simpleDataSourceFactory(observableFactory, dataSourceProcessor, array) {
	    'use strict';
	    return {
	        getInstance: function (data) {
	            return new SimpleDataSource(data, observableFactory, dataSourceProcessor, array);
	        },
	    };
	}
	exports.simpleDataSourceFactory = simpleDataSourceFactory;
	angular.module(exports.moduleName, [__observable.moduleName, __array.moduleName])
	    .factory(exports.factoryName, simpleDataSourceFactory);
	//# sourceMappingURL=simpleDataSource.service.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __array = typescript_angular_utilities_1.services.array;
	var __object = typescript_angular_utilities_1.services.object;
	var __synchronizedRequests = typescript_angular_utilities_1.services.synchronizedRequests;
	var dataSourceBase_service_1 = __webpack_require__(49);
	var dataSourceProcessor_service_1 = __webpack_require__(50);
	exports.moduleName = 'rl.ui.components.cardContainer.dataSources.serverSearchDataSource';
	exports.factoryName = 'serverSearchDataSource';
	var ServerSearchDataSource = (function (_super) {
	    __extends(ServerSearchDataSource, _super);
	    function ServerSearchDataSource(getDataSet, searchFilter, getFilterModel, validateModel, observableFactory, dataSourceProcessor, array, object, synchronizedRequestsFactory) {
	        var _this = this;
	        _super.call(this, observableFactory, dataSourceProcessor, array);
	        this.searchFilter = searchFilter;
	        this.getFilterModel = getFilterModel;
	        this.validateModel = validateModel;
	        this.object = object;
	        this.minSearchLength = 4;
	        this.resolveReload = function (data) {
	            _this.loadingDataSet = false;
	            _this.rawDataSet = data;
	            _this.refresh();
	            _this.observable.fire('reloaded');
	            _this.observable.fire('changed');
	        };
	        this.getFilterModel = this.getFilterModel || function () { return null; };
	        this.validateModel = this.validateModel || function () { return true; };
	        this.countFilterGroups = true;
	        this.search = searchFilter.searchText;
	        this.filterModel = _.clone(this.getFilterModel());
	        searchFilter.minSearchLength = this.minSearchLength;
	        this.synchronizedRequests = synchronizedRequestsFactory.getInstance(getDataSet, this.resolveReload.bind(this));
	    }
	    Object.defineProperty(ServerSearchDataSource.prototype, "getDataSet", {
	        set: function (value) {
	            this.synchronizedRequests.dataProvider = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ServerSearchDataSource.prototype.refresh = function () {
	        if (this.searchFilter.searchText !== this.search
	            || this.filterModelChanged()) {
	            this.reload();
	        }
	        else {
	            _super.prototype.refresh.call(this);
	        }
	    };
	    ServerSearchDataSource.prototype.reload = function () {
	        this.search = this.searchFilter.searchText;
	        this.filterModel = _.clone(this.getFilterModel());
	        var hasValidSearch = !this.object.isNullOrEmpty(this.search) && this.search.length >= this.minSearchLength;
	        var hasValidFilterModel = this.filterModel != null && this.validateModel(this.filterModel);
	        if (!hasValidSearch && !hasValidFilterModel) {
	            this.resolveReload(null);
	            return;
	        }
	        this.dataSet = null;
	        this.rawDataSet = null;
	        this.loadingDataSet = true;
	        this.synchronizedRequests.getData(this.buildSearchParams());
	    };
	    ServerSearchDataSource.prototype.filterModelChanged = function () {
	        return !this.object.areEqual(this.getFilterModel(), this.filterModel);
	    };
	    ServerSearchDataSource.prototype.buildSearchParams = function () {
	        var searchModel = this.getFilterModel();
	        if (searchModel != null) {
	            searchModel.search = this.search;
	        }
	        else {
	            searchModel = this.search;
	        }
	        return searchModel;
	    };
	    return ServerSearchDataSource;
	})(dataSourceBase_service_1.DataSourceBase);
	exports.ServerSearchDataSource = ServerSearchDataSource;
	serverSearchDataSourceFactory.$inject = [__observable.factoryName, dataSourceProcessor_service_1.processorServiceName, __array.serviceName, __object.serviceName, __synchronizedRequests.factoryName];
	function serverSearchDataSourceFactory(observableFactory, dataSourceProcessor, array, object, synchronizedRequestsFactory) {
	    'use strict';
	    return {
	        getInstance: function (getDataSet, searchFilter, getFilterModel, validateModel) {
	            return new ServerSearchDataSource(getDataSet, searchFilter, getFilterModel, validateModel, observableFactory, dataSourceProcessor, array, object, synchronizedRequestsFactory);
	        },
	    };
	}
	exports.serverSearchDataSourceFactory = serverSearchDataSourceFactory;
	angular.module(exports.moduleName, [__observable.moduleName, __array.moduleName, __object.moduleName, __synchronizedRequests.moduleName])
	    .factory(exports.factoryName, serverSearchDataSourceFactory);
	//# sourceMappingURL=serverSearchDataSource.service.js.map

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=dataSource.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var columnSearchFilter = __webpack_require__(55);
	exports.columnSearchFilter = columnSearchFilter;
	var filterGroup = __webpack_require__(56);
	exports.filterGroup = filterGroup;
	exports.moduleName = 'rl.ui.components.cardContainer.filters';
	angular.module(exports.moduleName, [
	    columnSearchFilter.moduleName,
	    filterGroup.moduleName,
	]);
	//# sourceMappingURL=filters.module.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var __string = typescript_angular_utilities_1.services.string;
	exports.moduleName = 'rl.ui.components.cardContainer.filters.columnSearchFilter';
	exports.factoryName = 'columnSearchFilter';
	exports.filterName = 'column-search';
	var ColumnSearchFilter = (function () {
	    function ColumnSearchFilter(object, string) {
	        this.object = object;
	        this.string = string;
	        this.type = exports.filterName;
	    }
	    ColumnSearchFilter.prototype.filter = function (item) {
	        if (this.column == null) {
	            return true;
	        }
	        var value = this.object.toString(this.column.getValue(item));
	        var search = this.searchText;
	        if (!this.caseSensitive) {
	            search = search.toLowerCase();
	            value = value.toLowerCase();
	        }
	        return this.string.contains(value, search);
	    };
	    return ColumnSearchFilter;
	})();
	exports.ColumnSearchFilter = ColumnSearchFilter;
	columnSearchFilterFactory.$inject = [__object.serviceName, __string.serviceName];
	function columnSearchFilterFactory(object, string) {
	    'use strict';
	    return {
	        getInstance: function () {
	            return new ColumnSearchFilter(object, string);
	        },
	    };
	}
	exports.columnSearchFilterFactory = columnSearchFilterFactory;
	angular.module(exports.moduleName, [__object.moduleName, __string.moduleName])
	    .factory(exports.factoryName, columnSearchFilterFactory);
	//# sourceMappingURL=columnSearchFilter.service.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var filterOption = __webpack_require__(57);
	exports.filterOption = filterOption;
	var modeFilterGroup = __webpack_require__(59);
	exports.modeFilterGroup = modeFilterGroup;
	var rangeFilterGroup = __webpack_require__(61);
	exports.rangeFilterGroup = rangeFilterGroup;
	var filterGroup_service_1 = __webpack_require__(60);
	var filterGroup_directive_1 = __webpack_require__(62);
	__export(__webpack_require__(62));
	__export(__webpack_require__(60));
	exports.moduleName = 'rl.ui.components.cardContainer.filters.filterGroup';
	angular.module(exports.moduleName, [
	    typescript_angular_utilities_1.services.object.moduleName,
	    filterOption.moduleName,
	    modeFilterGroup.moduleName,
	    rangeFilterGroup.moduleName,
	])
	    .factory(filterGroup_service_1.factoryName, filterGroup_service_1.filterGroupFactory)
	    .directive(filterGroup_directive_1.directiveName, filterGroup_directive_1.filterGroup)
	    .controller(filterGroup_directive_1.controllerName, filterGroup_directive_1.FilterGroupController);
	//# sourceMappingURL=filterGroup.module.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.cardContainer.filters.filterGroup.filterOption';
	exports.directiveName = 'rlFilterOption';
	function filterOption() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(58),
	        scope: {
	            activate: '&',
	            isActive: '=active',
	            option: '=',
	        },
	    };
	}
	exports.filterOption = filterOption;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, filterOption);
	//# sourceMappingURL=filterOption.js.map

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row filter-option\" ng-class=\"{ 'active': isActive }\" ng-click=\"activate()\">\r\n\t<div class=\"col-sm-1\">\r\n\t\t<i class='fa fa-arrow-right' ng-show=\"isActive == true\"></i>\r\n\t</div>\r\n\t<div class=\"col-sm-1\" ng-if=\"hasIcon\" ng-bind-html=\"option.icon\"></div>\r\n\t<div ng-class=\"{ 'col-sm-6': hasIcon, 'col-sm-7': !hasIcon }\">\r\n\t\t{{option.label}}\r\n\t</div>\r\n\t<div class=\"col-sm-3 text-right\" ng-show=\"option.count != null\">\r\n\t\t({{option.count}})\r\n\t</div>\r\n</div>"

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var filterGroup_service_1 = __webpack_require__(60);
	exports.moduleName = 'rl.ui.components.cardContainer.filters.filterGroup.modeFilterGroup';
	exports.factoryName = 'modeFilterGroup';
	var ModeFilterGroup = (function (_super) {
	    __extends(ModeFilterGroup, _super);
	    function ModeFilterGroup(settings, object) {
	        this.getValue = settings.getValue;
	        settings.options = _.map(settings.options, this.buildModeOption, this);
	        _super.call(this, settings, object);
	    }
	    ModeFilterGroup.prototype.buildModeOption = function (option) {
	        var _this = this;
	        var modeOption = option;
	        modeOption.filter = function (item) {
	            if (modeOption.displayAll) {
	                return true;
	            }
	            return _this.getValue(item) === modeOption.value;
	        };
	        return modeOption;
	    };
	    return ModeFilterGroup;
	})(filterGroup_service_1.FilterGroup);
	exports.ModeFilterGroup = ModeFilterGroup;
	modeFilterGroupFactory.$inject = [__object.serviceName];
	function modeFilterGroupFactory(object) {
	    'use strict';
	    return {
	        getInstance: function (settings) {
	            return new ModeFilterGroup(settings, object);
	        },
	    };
	}
	exports.modeFilterGroupFactory = modeFilterGroupFactory;
	angular.module(exports.moduleName, [__object.moduleName])
	    .factory(exports.factoryName, modeFilterGroupFactory);
	//# sourceMappingURL=modeFilterGroup.service.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	exports.factoryName = 'filterGroup';
	var FilterGroup = (function () {
	    function FilterGroup(settings, object) {
	        this.label = settings.label;
	        this.type = settings.type != null ? settings.type : settings.label;
	        this.options = settings.options;
	        this.activeOption = this.options[0];
	        _.each(this.options, function (option) {
	            if (_.isUndefined(option.type)) {
	                option.type = option.label;
	            }
	            option.type = object.toString(option.type).toLowerCase();
	        });
	    }
	    FilterGroup.prototype.filter = function (item) {
	        return this.activeOption.filter(item);
	    };
	    FilterGroup.prototype.setActiveOption = function (index) {
	        if (index >= 0 && index < this.options.length) {
	            this.activeOption = this.options[index];
	        }
	    };
	    FilterGroup.prototype.setOptionCounts = function (counts) {
	        _.each(this.options, function (option) {
	            if (_.has(counts, option.type)) {
	                option.count = counts[option.type];
	            }
	        });
	    };
	    FilterGroup.prototype.updateOptionCounts = function (filteredDataSet) {
	        _.each(this.options, function (option) {
	            option.count = _.filter(filteredDataSet, option.filter, option).length;
	        });
	    };
	    return FilterGroup;
	})();
	exports.FilterGroup = FilterGroup;
	filterGroupFactory.$inject = [__object.serviceName];
	function filterGroupFactory(object) {
	    'use strict';
	    return {
	        getInstance: function (settings) {
	            return new FilterGroup(settings, object);
	        },
	    };
	}
	exports.filterGroupFactory = filterGroupFactory;
	//# sourceMappingURL=filterGroup.service.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var filterGroup_service_1 = __webpack_require__(60);
	exports.moduleName = 'rl.ui.components.cardContainer.filters.filterGroup.rangeFilterGroup';
	exports.factoryName = 'rangeFilterGroup';
	var RangeFilterGroup = (function (_super) {
	    __extends(RangeFilterGroup, _super);
	    function RangeFilterGroup(settings, object) {
	        this.getValue = settings.getValue;
	        settings.options = _.map(settings.options, this.buildRangeOption, this);
	        _super.call(this, settings, object);
	    }
	    RangeFilterGroup.prototype.buildRangeOption = function (option) {
	        var _this = this;
	        var modeOption = option;
	        modeOption.filter = function (item) {
	            var value = _this.getValue(item);
	            var result = true;
	            if (_.isUndefined(option.highExclusive) === false) {
	                result = value < option.highExclusive;
	            }
	            else if (_.isUndefined(option.highInclusive) === false) {
	                result = value <= option.highInclusive;
	            }
	            if (_.isUndefined(option.lowExclusive) === false) {
	                result = result && value > option.lowExclusive;
	            }
	            else if (_.isUndefined(option.lowInclusive) === false) {
	                result = result && value >= option.lowInclusive;
	            }
	            return result;
	        };
	        return modeOption;
	    };
	    return RangeFilterGroup;
	})(filterGroup_service_1.FilterGroup);
	rangeFilterGroupFactory.$inject = [__object.serviceName];
	function rangeFilterGroupFactory(object) {
	    'use strict';
	    return {
	        getInstance: function (settings) {
	            return new RangeFilterGroup(settings, object);
	        },
	    };
	}
	exports.rangeFilterGroupFactory = rangeFilterGroupFactory;
	angular.module(exports.moduleName, [__object.moduleName])
	    .factory(exports.factoryName, rangeFilterGroupFactory);
	//# sourceMappingURL=rangeFilterGroup.service.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../../typings/commonjs.d.ts' />
	'use strict';
	exports.directiveName = 'rlFilterGroup';
	exports.controllerName = 'FilterGroupController';
	var FilterGroupController = (function () {
	    function FilterGroupController($scope) {
	        this.$scope = $scope;
	        this.hasIcon = this.icon != null && this.icon !== '';
	        this.showChildren = true;
	    }
	    FilterGroupController.prototype.toggleChildren = function () {
	        this.showChildren = !this.showChildren;
	    };
	    FilterGroupController.prototype.selectOption = function (option) {
	        this.filterGroup.activeOption = option;
	        this.showChildren = false;
	        if (this.source != null) {
	            this.source.refresh();
	        }
	        else {
	            this.$scope.$emit('dataSource.requestRefresh'); //*event?
	        }
	    };
	    FilterGroupController.$inject = ['$scope'];
	    return FilterGroupController;
	})();
	exports.FilterGroupController = FilterGroupController;
	function filterGroup() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(63),
	        controller: exports.controllerName,
	        controllerAs: 'controller',
	        scope: {},
	        bindToController: {
	            icon: '=',
	            filterGroup: '=',
	            source: '=',
	        },
	    };
	}
	exports.filterGroup = filterGroup;
	//# sourceMappingURL=filterGroup.directive.js.map

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "<div class=\"filter-group\">\r\n\t<div class=\"row filter-header\" ng-click=\"controller.toggleChildren()\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<i class=\"collapse-icon fa fa-caret-down fa-2x\" ng-show=\"controller.showChildren\" title=\"Hide filter list\"></i>\r\n\t\t\t<i class=\"collapse-icon fa fa-caret-right fa-2x\" ng-hide=\"controller.showChildren\" title=\"Show filter list\"></i>\r\n\t\t\t<div class=\"filter-option\">\r\n\t\t\t\t<div style=\"display:inline-block\" ng-show=\"controller.hasIcon\" ng-bind-html=\"controller.icon\"></div>\r\n\t\t\t\t<h4 style=\"display: inline-block\">{{controller.filterGroup.label}}: {{controller.filterGroup.activeOption.label}}</h4>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div ng-show=\"controller.showChildren\" ng-repeat=\"filterOption in controller.filterGroup.options\">\r\n\t\t<rl-filter-option option=\"filterOption\" active=\"filterGroup.activeOption === filterOption\" activate=\"controller.selectOption(filterOption)\"></rl-filter-option>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.cardContainer.itemCount';
	exports.directiveName = 'rlItemCount';
	function itemCount() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: '^^rlCardContainer',
	        template: __webpack_require__(65),
	        scope: {
	            containerService: '=',
	        },
	    };
	}
	exports.itemCount = itemCount;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, itemCount);
	//# sourceMappingURL=itemCount.js.map

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "<p ng-show=\"!containerService.dataSource.loadingDataSet\">\r\n\tShowing <strong>{{containerService.dataSource.dataSet.length}} of {{containerService.dataSource.count}}</strong> total items\r\n</p>"

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	exports.moduleName = 'rl.ui.components.cardContainer.pager';
	exports.directiveName = 'rlPager';
	exports.controllerName = 'PagerController';
	exports.defaultVisiblePageCount = 5;
	var PagerController = (function () {
	    function PagerController($scope) {
	        var _this = this;
	        this.canGoBack = false;
	        this.canGoForward = false;
	        this.hasPageFilter = true;
	        this.updatePageCount = function () {
	            var totalItems = _this.dataSource.count;
	            var newLastPage = Math.ceil(totalItems / _this.pager.pageSize);
	            if (newLastPage !== _this.lastPage) {
	                _this.lastPage = newLastPage;
	                _this.currentPage = 1;
	            }
	            _this.updatePaging();
	        };
	        if (this.containerService == null) {
	            return;
	        }
	        this.pager = this.containerService.pager;
	        if (this.pager == null) {
	            this.hasPageFilter = false;
	        }
	        else {
	            this.visiblePageCount = this.pageCount != null ? this.pageCount : exports.defaultVisiblePageCount;
	            this.lastPage = 1;
	            this.dataSource = this.containerService.dataSource;
	            $scope.$watch(function () { return _this.dataSource.count; }, this.updatePageCount);
	            $scope.$watch(function () { return _this.pager.pageSize; }, this.updatePageCount);
	            $scope.$watch(function () { return _this.currentPage; }, function (page) {
	                _this.updatePaging();
	                _this.pager.pageNumber = page;
	                _this.dataSource.refresh();
	            });
	        }
	    }
	    PagerController.prototype.updatePaging = function () {
	        var page = this.currentPage;
	        this.canGoBack = page > 1;
	        this.canGoForward = page < this.lastPage;
	        var nonCurrentVisiblePages = this.visiblePageCount - 1;
	        var before = Math.floor(nonCurrentVisiblePages / 2);
	        var after = Math.ceil(nonCurrentVisiblePages / 2);
	        var startPage = page - before;
	        var endPage = page + after;
	        if (startPage < 1) {
	            startPage = 1;
	            endPage = Math.min(this.visiblePageCount, this.lastPage);
	        }
	        else if (endPage > this.lastPage) {
	            endPage = this.lastPage;
	            startPage = Math.max(this.lastPage - nonCurrentVisiblePages, 1);
	        }
	        this.pages = _.range(startPage, endPage + 1);
	    };
	    PagerController.prototype.first = function () {
	        this.currentPage = 1;
	    };
	    PagerController.prototype.previous = function () {
	        if (this.currentPage > 1) {
	            this.currentPage--;
	        }
	    };
	    PagerController.prototype.goto = function (page) {
	        if (page >= 1 && page <= this.lastPage) {
	            this.currentPage = page;
	        }
	    };
	    PagerController.prototype.next = function () {
	        if (this.currentPage < this.lastPage) {
	            this.currentPage++;
	        }
	    };
	    PagerController.prototype.last = function () {
	        this.currentPage = this.lastPage;
	    };
	    PagerController.$inject = ['$scope'];
	    return PagerController;
	})();
	exports.PagerController = PagerController;
	function pager() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(67),
	        controller: exports.controllerName,
	        controllerAs: 'pager',
	        scope: {},
	        bindToController: {
	            pageCount: '=visiblePages',
	            containerService: '=',
	        },
	    };
	}
	exports.pager = pager;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, pager)
	    .controller(exports.controllerName, PagerController);
	//# sourceMappingURL=pager.js.map

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<nav ng-if=\"pager.hasPageFilter\">\r\n\t<ul class=\"pagination\">\r\n\t\t<li title=\"Go to first page\" ng-click=\"pager.first()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoBack }\">\r\n\t\t\t<a><i class=\"fa fa-angle-double-left\"></i></a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to previous page\" ng-click=\"pager.previous()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoBack }\">\r\n\t\t\t<a><i class=\"fa fa-angle-left\"></i></a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to page {{pager.page}}\" ng-click=\"pager.goto(page)\"\r\n\t\t\tng-repeat=\"page in pager.pages\"\r\n\t\t\tng-class=\"{ 'active': pager.currentPage == page }\">\r\n\t\t\t<a>{{page}}</a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to next page\" ng-click=\"pager.next()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoForward }\">\r\n\t\t\t<a><i class=\"fa fa-angle-right\"></i></a>\r\n\t\t</li>\r\n\t\t<li title=\"Go to last page\" ng-click=\"pager.last()\"\r\n\t\t\tng-class=\"{ 'disabled': !pager.canGoForward }\">\r\n\t\t\t<a><i class=\"fa fa-angle-double-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>\r\n"

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.cardContainer.pageSize';
	exports.directiveName = 'rlPageSize';
	exports.controllerName = 'PageSizeController';
	exports.availablePageSizes = [10, 25, 50, 100];
	exports.defaultPageSize = 10;
	var PageSizeController = (function () {
	    function PageSizeController($scope) {
	        var _this = this;
	        if (this.containerService == null) {
	            return;
	        }
	        this.selectedPageSize = exports.defaultPageSize;
	        this.pageSizes = exports.availablePageSizes;
	        this.hasPageFilter = true;
	        var pager = this.containerService.pager;
	        if (pager == null) {
	            this.hasPageFilter = false;
	        }
	        else {
	            $scope.$watch(function () { return _this.selectedPageSize; }, function (newPageSize) {
	                if (pager != null) {
	                    pager.pageSize = newPageSize;
	                    _this.containerService.dataSource.refresh();
	                }
	            });
	        }
	    }
	    PageSizeController.$inject = ['$scope'];
	    return PageSizeController;
	})();
	exports.PageSizeController = PageSizeController;
	function pageSize() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(69),
	        controller: exports.controllerName,
	        controllerAs: 'controller',
	        scope: {},
	        bindToController: {
	            containerService: '=',
	        },
	    };
	}
	exports.pageSize = pageSize;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, pageSize)
	    .controller(exports.controllerName, PageSizeController);
	//# sourceMappingURL=pageSize.js.map

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div ng-show=\"controller.hasPageFilter\">\r\n\t<select class=\"form-control\" title=\"Cards per page\" ng-model=\"controller.selectedPageSize\"\r\n\t\t\tng-options=\"pageSize for pageSize in controller.pageSizes\"></select>\r\n</div>\r\n"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __boolean = typescript_angular_utilities_1.services.boolean;
	exports.moduleName = 'rl.ui.components.cardContainer.selectionControl';
	exports.directiveName = 'rlSelectionControl';
	exports.controllerName = 'SelectionControlController';
	var SelectionControlController = (function () {
	    function SelectionControlController($scope, bool) {
	        var _this = this;
	        this.$scope = $scope;
	        if (this.containerService == null) {
	            return;
	        }
	        this.selectedItems = this.containerService.numberSelected;
	        this.pagingEnabled = bool.toBool(this.containerService.pager);
	        this.dataSource = this.containerService.dataSource;
	        $scope.$watch(function () { return _this.containerService.numberSelected; }, function (value) {
	            _this.selectedItems = value;
	        });
	    }
	    SelectionControlController.prototype.selectPage = function () {
	        _.each(this.dataSource.dataSet, function (item) {
	            item.viewData.selected = true;
	        });
	        this.$scope.$emit('selectionChanged'); //*events?
	    };
	    SelectionControlController.prototype.selectAll = function () {
	        _.each(this.dataSource.filteredDataSet, function (item) {
	            item.viewData.selected = true;
	        });
	        this.$scope.$emit('selectionChanged'); //*events?
	    };
	    SelectionControlController.prototype.clearPage = function () {
	        _.each(this.dataSource.dataSet, function (item) {
	            item.viewData.selected = false;
	        });
	        this.$scope.$emit('selectionChanged'); //*events?
	    };
	    SelectionControlController.prototype.clearAll = function () {
	        _.each(this.dataSource.filteredDataSet, function (item) {
	            item.viewData.selected = false;
	        });
	        this.$scope.$emit('selectionChanged'); //*events?
	    };
	    SelectionControlController.$inject = ['$scope', __boolean.serviceName];
	    return SelectionControlController;
	})();
	exports.SelectionControlController = SelectionControlController;
	function selectionControl() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(71),
	        controller: exports.controllerName,
	        controllerAs: 'selection',
	        scope: {},
	        bindToController: {
	            containerService: '=',
	        },
	    };
	}
	exports.selectionControl = selectionControl;
	angular.module(exports.moduleName, [__boolean.moduleName])
	    .directive(exports.directiveName, selectionControl)
	    .controller(exports.controllerName, SelectionControlController);
	//# sourceMappingURL=selectionControl.js.map

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n\t<div style=\"margin-bottom: 5px\">\r\n\t\t<span><strong>{{selection.selectedItems}}</strong> items selected</span>\r\n\t</div>\r\n\t<div style=\"margin-bottom: 5px\" ng-if=\"selection.pagingEnabled\">\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.selectPage()\">Select page</button>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.clearPage()\">Clear page</button>\r\n\t</div>\r\n\t<div>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.selectAll()\">Select all</button>\r\n\t\t<button type=\"button\" class=\"btn btn-default\" ng-click=\"selection.clearAll()\">Clear all</button>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var __array = typescript_angular_utilities_1.services.array;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var dataSources_module_1 = __webpack_require__(42);
	var sorts_module_1 = __webpack_require__(43);
	var breakpoint_1 = __webpack_require__(36);
	var cardContainer_service_1 = __webpack_require__(73);
	exports.directiveName = 'rlCardContainer';
	exports.controllerName = 'CardContainerController';
	exports.defaultMaxColumnSorts = 2;
	exports.defaultSelectionTitle = 'Select card';
	var CardContainerController = (function () {
	    function CardContainerController($scope, $attrs, object, array, dataPagerFactory, parentChild) {
	        var _this = this;
	        this.$scope = $scope;
	        this.object = object;
	        this.array = array;
	        this.dataPagerFactory = dataPagerFactory;
	        this.parentChild = parentChild;
	        this.numberSelected = 0;
	        this.addViewData = function () {
	            _.each(_this.dataSource.rawDataSet, function (item) {
	                if (_.isUndefined(item.viewData)) {
	                    item.viewData = {
	                        selected: false,
	                    };
	                }
	            });
	            _this.updateDisabledSelections();
	        };
	        this.clearFilteredSelections = function () {
	            var nonVisibleItems = _.difference(_this.dataSource.rawDataSet, _this.dataSource.filteredDataSet);
	            _.each(nonVisibleItems, function (item) {
	                if (_.isUndefined(item.viewData)) {
	                    item.viewData = {
	                        selected: false,
	                    };
	                }
	                item.viewData.selected = false;
	                item.viewData.selectionTitle = exports.defaultSelectionTitle;
	            });
	            _this.updateSelected();
	        };
	        this.updateSelected = function () {
	            _this.numberSelected = _.filter(_this.dataSource.filteredDataSet, function (item) {
	                return item.viewData != null && item.viewData.selected;
	            }).length;
	        };
	        this.updateDisabledSelections = function () {
	            if (_this.disablingSelections) {
	                _.each(_this.dataSource.rawDataSet, function (item) {
	                    var disabledReason = _this.disableSelection({ item: item });
	                    item.viewData.disabledSelection = (disabledReason != null);
	                    item.viewData.selectionTitle = (item.viewData.disabledSelection ? disabledReason : exports.defaultSelectionTitle);
	                });
	            }
	        };
	        this.dataSource = this.source;
	        this.permanentFooters = _.isUndefined(this.permanentFooters) ? false : this.permanentFooters;
	        this.maxColSorts = this.maxColumnSorts != null ? this.maxColumnSorts : exports.defaultMaxColumnSorts;
	        this.disablingSelections = object.isNullOrWhitespace($attrs.disableSelection) === false;
	        this.sortDirection = sorts_module_1.SortDirection;
	        this.syncFilters();
	        this.setupPaging();
	        this.buildColumnSizes();
	        if (this.selectableCards) {
	            //*use card container event service?
	            $scope.$on('selectionChanged', this.updateSelected);
	            $scope.$on('updateDisabledSelections', this.updateDisabledSelections);
	            this.dataSource.watch(this.addViewData, 'changed');
	            this.dataSource.watch(this.clearFilteredSelections, 'redrawing');
	            this.addViewData();
	            this.selectionColumn = {
	                label: null,
	                size: null,
	                getValue: function (item) {
	                    return item.viewData.selected;
	                },
	                flipSort: true,
	            };
	        }
	        if (this.dataSource.sorts == null) {
	            this.dataSource.sorts = [];
	        }
	        $scope.containerService = new cardContainer_service_1.CardContainerService(this);
	        $scope.containerData = this.containerData;
	    }
	    CardContainerController.prototype.sortSelected = function () {
	        this.sort(this.selectionColumn);
	    };
	    CardContainerController.prototype.openCard = function () {
	        var behaviors = this.parentChild.getAllChildBehaviors(this.dataSource.dataSet);
	        return _.all(_.map(behaviors, function (behavior) { return behavior.close(); }));
	    };
	    CardContainerController.prototype.sort = function (column) {
	        var sortList = this.dataSource.sorts;
	        var firstSort = sortList[0];
	        // If column is already the primary sort, change the direction
	        if (firstSort != null
	            && firstSort.column === column) {
	            firstSort.direction = sorts_module_1.SortDirection.toggle(firstSort.direction);
	            // Clear sort
	            if (firstSort.direction === sorts_module_1.SortDirection.none) {
	                this.clearVisualSortIndicator(firstSort);
	                firstSort = null;
	                // If the column has secondary sorts don't fall back to a
	                //  secondary sort, instead just clear all sorts
	                if (column.secondarySorts != null) {
	                    sortList.length = 0;
	                }
	                else {
	                    sortList.shift();
	                }
	            }
	        }
	        else {
	            // Else make column primary ascending sort
	            // Remove any existing non-primary sorts on column
	            this.array.remove(sortList, function (sort) {
	                return column === sort.column;
	            });
	            // Build ascending sort for column
	            var newSort = {
	                column: column,
	                direction: sorts_module_1.SortDirection.ascending,
	            };
	            sortList.unshift(newSort);
	            firstSort = newSort;
	        }
	        this.updateVisualColumnSorting();
	        // If column has secondary sorts, wipe the sort order and just apply the secondary sorts
	        if (firstSort != null && column.secondarySorts != null) {
	            sortList.length = 0;
	            var secondarySorts = this.buildSecondarySorts(firstSort.direction, column.secondarySorts);
	            sortList.push(firstSort);
	            sortList.push.apply(sortList, secondarySorts);
	        }
	        else {
	            // If not using column secondary sorts, limit the maximum number
	            //  of sorts applied to the maximum number of sorts
	            this.dataSource.sorts = _.take(sortList, this.maxColSorts);
	        }
	        this.dataSource.refresh();
	    };
	    CardContainerController.prototype.selectionChanged = function () {
	        this.updateSelected();
	        this.$scope.$emit('selectionChanged');
	    };
	    CardContainerController.prototype.syncFilters = function () {
	        if (this.filters != null) {
	            // Convert filter array to dictionary if necessary
	            if (_.isArray(this.filters)) {
	                this.filters = this.array.toDictionary(this.filters, function (filter) { return filter.type; });
	            }
	            this.dataSource.filters = this.filters;
	            this.dataSource.refresh();
	        }
	        else if (this.dataSource.filters != null) {
	            this.filters = this.dataSource.filters;
	        }
	    };
	    CardContainerController.prototype.setupPaging = function () {
	        // If paging flag is specified, card container controls pager instance
	        if (this.paging != null) {
	            if (this.paging === false) {
	                this.dataSource.pager = null;
	            }
	            else {
	                this.pager = this.dataPagerFactory.getInstance();
	                this.dataSource.pager = this.pager;
	            }
	        }
	        else if (this.dataSource.pager) {
	            // If the paging flag is not set and the dataSource has a pager, save a reference here
	            this.pager = this.dataSource.pager;
	        }
	    };
	    CardContainerController.prototype.buildColumnSizes = function () {
	        var _this = this;
	        _.each(this.columns, function (column) {
	            var sizes = column.size;
	            if (_.isObject(sizes)) {
	                sizes[breakpoint_1.xs] = _this.object.valueOrDefault(sizes[breakpoint_1.xs], 0);
	                sizes[breakpoint_1.sm] = _this.object.valueOrDefault(sizes[breakpoint_1.sm], sizes[breakpoint_1.xs]);
	                sizes[breakpoint_1.md] = _this.object.valueOrDefault(sizes[breakpoint_1.md], sizes[breakpoint_1.sm]);
	                sizes[breakpoint_1.lg] = _this.object.valueOrDefault(sizes[breakpoint_1.lg], sizes[breakpoint_1.md]);
	            }
	            else {
	                column.size = {
	                    xs: sizes,
	                    sm: sizes,
	                    md: sizes,
	                    lg: sizes,
	                };
	            }
	        });
	    };
	    CardContainerController.prototype.lookupColumn = function (label) {
	        return _.find(this.columns, function (column) {
	            return column.label === label;
	        });
	    };
	    CardContainerController.prototype.buildSecondarySorts = function (direction, secondarySorts) {
	        var _this = this;
	        var sortList = secondarySorts[sorts_module_1.SortDirection.getFullName(direction)];
	        return _.map(sortList, function (sort) {
	            return {
	                direction: sort.direction,
	                column: _this.lookupColumn(sort.column),
	            };
	        });
	    };
	    CardContainerController.prototype.updateVisualColumnSorting = function () {
	        var _this = this;
	        _.each(this.dataSource.sorts, function (sort, index) {
	            // Only first sort should have visible direction
	            if (index === 0) {
	                _this.updateVisualSortIndicator(sort);
	            }
	            else {
	                _this.clearVisualSortIndicator(sort);
	            }
	        });
	    };
	    CardContainerController.prototype.updateVisualSortIndicator = function (sort) {
	        sort.column.sortDirection = sort.direction;
	    };
	    CardContainerController.prototype.clearVisualSortIndicator = function (sort) {
	        sort.column.sortDirection = null;
	    };
	    CardContainerController.$inject = ['$scope', '$attrs', __object.serviceName, __array.serviceName, dataSources_module_1.dataPager.factoryName, __parentChild.serviceName];
	    return CardContainerController;
	})();
	exports.CardContainerController = CardContainerController;
	cardContainer.$inject = ['$compile'];
	function cardContainer($compile) {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: __webpack_require__(74),
	        controller: exports.controllerName,
	        controllerAs: 'cardContainer',
	        scope: {},
	        bindToController: {
	            // summary: The data source for the card container
	            // remarks: Can be an array of objects, or an implementation of the data source contract: {
	            //     sorts: A list of sorts to apply to the data. Sorts should be in this format: {
	            //         column: The name of the column to sort on,
	            //         direction: Sort ascending or descending (sortDirection.js)
	            //     },
	            //     filters: A list of filters to apply to the data source,
	            //     pager: A pager that can be optionally used to page the data: {
	            //         filter: function(dataSet) {
	            //             Takes the data set and filters it down to pages
	            //         }
	            //     },
	            //     refresh: [function] Call to trigger the data source to refresh,
	            //     dataSet: Will contain the resulting data provided by the source, after sorts and filters are applied,
	            //     count: The number of items available in the data set (used for paging).
	            //     loadingDataSet: A boolean indicating if the dataSet is being refreshed / loaded,
	            // }
	            source: '=',
	            // summary: A list of filters to be applied to the data source
	            // remarks: Each filter should implement the data filter contract: {
	            //     type: A name that can be used to look up the filter,
	            //     filter: function(item) { takes an item and returns false if it should be removed from the data set },
	            // }
	            filters: '=',
	            // summary: Turn paging on or off (true / false)
	            paging: '=',
	            // summary: A list of the columns for building the column header and card headers.
	            // remarks: Each column object should be in the following format: {
	            //     label: The label for the column header,
	            //     description: A description for the column; shown in tooltips,
	            //     size: A description of the column size at breakpoints; either a constant int (for constant size) or breakpoint detail object: {
	            //         [xs]: optional size for xs breakpoint (defaults to 0),
	            //         [sm]: optional size for sm breakpoint (defaults to xs),
	            //         [md]: optional size for md breakpoint (defaults to sm),
	            //         [lg]: optional size for lg breakpoint (defaults to md),
	            //     },
	            //     getValue: A function that takes a data record and retrieves the value for the column,
	            //     headerTemplateUrl: The path to an HTML template for the column header,
	            //     headerTemplate: An HTML template string for the column header (overriden by headerTemplateUrl if present),
	            //     templateUrl: The path to an HTML template for the card header,
	            //     template: An HTML template string for the card header (overriden by templateUrl if present),
	            //     secondarySorts: A set of secondary sorts to apply on other columns when this column is sorted (ascending and / or descending): {
	            //        sortDirection.ascending ('asc'):  [
	            //             {
	            //                 column: The label of another column to sort on,
	            //                 direction: The direction to sort the column,
	            //             },
	            //             ...
	            //        ],
	            //        sortDirection.descending ('desc'): [
	            //             {
	            //                 column: The label of another column to sort on,
	            //                 direction: The direction to sort the column,
	            //             },
	            //             ...
	            //        ],
	            //     }
	            // }
	            columns: '=',
	            // summary: container-wide data available in cards
	            containerData: '=',
	            // summary: controller shared by all components on a card
	            // remarks: this controller cannot override any of the following variable names:
	            //          columns
	            //          item
	            //          contentTemplate
	            //          footerTemplate
	            //          clickable
	            //          cardController
	            //          cardControllerAs
	            //          cardAs
	            //          showContent
	            //          toggleContent
	            //          collapse
	            //          selected
	            //          setSelected
	            cardController: '@',
	            // summary: controller alias specified using controllerAs syntax
	            cardControllerAs: '@',
	            // summary: name used to access the card data
	            cardAs: '@',
	            // summary: Indicates if cards should show active state on mouse over
	            clickableCards: '=',
	            // summary: The number of sorts that can be applied at a time.
	            maxColumnSorts: '=',
	            permanentFooters: '=',
	            // summary: If true, turns on selection for cards via the cardData.viewData.selected property
	            selectableCards: '=',
	            // summary: Function called with each item. If true is returned selection is disabled for this item.
	            //          If function is not defined, selection is enabled for all by default.
	            disableSelection: '&',
	        },
	        link: function (scope, element, attrs, controller, transclude) {
	            var headerArea = element.find('.container-header-template');
	            var footerArea = element.find('.container-footer-template');
	            controller.makeCard = transclude;
	            transclude(scope, function (clone) {
	                var header = clone.filter('rl-container-header');
	                if (header.length === 0) {
	                    var defaultHeader = __webpack_require__(75);
	                    header = $compile(defaultHeader)(scope);
	                }
	                headerArea.append(header);
	                var footer = clone.filter('rl-container-footer');
	                if (footer.length === 0) {
	                    var defaultFooter = __webpack_require__(76);
	                    footer = $compile(defaultFooter)(scope);
	                }
	                footerArea.append(footer);
	            });
	        }
	    };
	}
	exports.cardContainer = cardContainer;
	//# sourceMappingURL=cardContainer.js.map

/***/ },
/* 73 */
/***/ function(module, exports) {

	var CardContainerService = (function () {
	    function CardContainerService(cardContainer) {
	        this.cardContainer = cardContainer;
	        this.pager = cardContainer.pager;
	        this.dataSource = cardContainer.dataSource;
	        this.filters = cardContainer.filters;
	    }
	    CardContainerService.prototype.lookupFilter = function (type) {
	        return this.filters[type];
	    };
	    Object.defineProperty(CardContainerService.prototype, "numberSelected", {
	        get: function () {
	            return this.cardContainer.numberSelected;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return CardContainerService;
	})();
	exports.CardContainerService = CardContainerService;
	//# sourceMappingURL=cardContainer.service.js.map

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<div class=\"card-container\">\r\n\t<div>\r\n\t\t<div class=\"card-container-header\">\r\n\t\t\t<div class=\"container-header-template\"></div>\r\n\t\t</div>\r\n\r\n\t\t<rl-generic-container selector=\"cardContainer.selectableCards\">\r\n\t\t\t<template when-selector=\"false\" default>\r\n\t\t\t\t<div class=\"card-columns-header\">\r\n\t\t\t\t\t<div ng-repeat=\"column in cardContainer.columns\">\r\n\t\t\t\t\t\t<rl-column-header sort=\"cardContainer.sort(column)\" sorting=\"column.sortDirection\" column=\"column\"></rl-column-header>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\t\t\t<template when-selector=\"true\">\r\n\t\t\t\t<div class=\"card-columns-header\">\r\n\t\t\t\t\t<div class=\"select-group\">\r\n\t\t\t\t\t\t<div class=\"select-column\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-check\" style=\"margin-left: 6px; cursor: pointer\" ng-click=\"cardContainer.sortSelected()\"></i>\r\n\t\t\t\t\t\t\t<i ng-show=\"cardContainer.sortColumn.sortDirection === cardContainer.sortDirection.ascending\" class=\"fa fa-sort-asc\"></i>\r\n\t\t\t\t\t\t\t<i ng-show=\"cardContainer.sortColumn.sortDirection === cardContainer.sortDirection.descending\" class=\"fa fa-sort-desc\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"select-content\">\r\n\t\t\t\t\t\t\t<div ng-repeat=\"column in cardContainer.columns\">\r\n\t\t\t\t\t\t\t\t<rl-column-header sort=\"cardContainer.sort(column)\" sorting=\"column.sortDirection\" column=\"column\"></rl-column-header>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"clearfix\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\t\t</rl-generic-container>\r\n\r\n\t\t<div ng-repeat=\"card in cardContainer.dataSource.dataSet\">\r\n\t\t\t<rl-card columns=\"cardContainer.columns\" item=\"card\"\r\n\t\t\t\t\t clickable=\"cardContainer.clickableCards\"\r\n\t\t\t\t\t selectable=\"cardContainer.selectableCards\"\r\n\t\t\t\t\t selection-changed=\"cardContainer.selectionChanged()\"\r\n\t\t\t\t\t container-data=\"cardContainer.containerData\"\r\n\t\t\t\t\t source=\"cardContainer.dataSource\"\r\n\t\t\t\t\t permanent-footer=\"cardContainer.permanentFooters\"\r\n\t\t\t\t\t card-controller=\"cardContainer.cardController\"\r\n\t\t\t\t\t card-controller-as=\"cardContainer.cardControllerAs\"\r\n\t\t\t\t\t card-as=\"cardContainer.cardAs\"></rl-card>\r\n\t\t</div>\r\n\r\n\t\t<div>\r\n\t\t\t<rl-busy loading=\"cardContainer.dataSource.loadingDataSet\" size=\"2x\"></rl-busy>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"card-container-footer\">\r\n\t\t\t<div class=\"container-footer-template\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-9\">\r\n\t\t<rl-card-search container-service=\"containerService\"></rl-card-search>\r\n\t</div>\r\n\t<div class=\"col-sm-3\">\r\n\t\t<rl-page-size container-service=\"containerService\"></rl-page-size>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\r\n\t<div ng-if=\"!cardContainer.selectableCards\" class=\"col-sm-6\">\r\n\t\t<rl-item-count container-service=\"containerService\"></rl-item-count>\r\n\t</div>\r\n\t<span ng-if=\"cardContainer.selectableCards\">\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t\t<rl-selection-control container-service=\"containerService\"></rl-selection-control>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-3\">\r\n\t\t\t<rl-item-count container-service=\"containerService\"></rl-item-count>\r\n\t\t</div>\r\n\t</span>\r\n\t<div class=\"col-sm-6\">\r\n\t\t<rl-pager class=\"pull-right\" container-service=\"containerService\"></rl-pager>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 77 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=column.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.checkbox';
	exports.directiveName = 'rlCheckbox';
	exports.controllerName = 'CheckboxController';
	var CheckboxController = (function () {
	    function CheckboxController($element) {
	        this.ngModel = $element.controller('ngModel');
	    }
	    Object.defineProperty(CheckboxController.prototype, "checked", {
	        get: function () {
	            return this.ngModel.$viewValue;
	        },
	        set: function (value) {
	            this.ngModel.$setViewValue(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    CheckboxController.$inject = ['$element'];
	    return CheckboxController;
	})();
	exports.CheckboxController = CheckboxController;
	function checkbox() {
	    return {
	        restrict: 'E',
	        require: 'ngModel',
	        transclude: true,
	        template: __webpack_require__(79),
	        controller: exports.controllerName,
	        controllerAs: 'checkbox',
	        scope: {},
	        bindToController: {
	            ngDisabled: '=',
	        },
	    };
	}
	exports.checkbox = checkbox;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, checkbox)
	    .controller(exports.controllerName, CheckboxController);
	//# sourceMappingURL=checkbox.js.map

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<label>\r\n\t<input type=\"checkbox\" ng-checked=\"checkbox.checked\" ng-disabled=\"checkbox.ngDisabled\" />\r\n\t<span ng-transclude></span>\r\n</label>"

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	exports.moduleName = 'rl.ui.components.commaList';
	exports.directiveName = 'rlCommaList';
	exports.controllerName = 'CommaListController';
	var CommaListController = (function () {
	    function CommaListController($attrs, object) {
	        this.remainingItems = 0;
	        this.hasTransform = object.isNullOrWhitespace($attrs.transform) === false;
	        this.list = this.getFirstItems(this.inList);
	    }
	    CommaListController.prototype.getFirstItems = function (list) {
	        var _this = this;
	        if (this.hasTransform) {
	            list = _.map(list, function (item) {
	                return _this.transform({ item: item });
	            });
	        }
	        ;
	        var newList;
	        if (this.max != null) {
	            newList = _.take(list, this.max);
	            this.remainingItems = list.length - this.max;
	        }
	        else {
	            newList = _.clone(list);
	        }
	        return newList;
	    };
	    CommaListController.$inject = ['$attrs', __object.serviceName];
	    return CommaListController;
	})();
	exports.CommaListController = CommaListController;
	function commaList() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<span>\n\t\t\t\t<span ng-repeat=\"item in commaList.list track by $index\">\n\t\t\t\t\t<span>{{item}}</span><span ng-hide=\"$last\">, </span>\n\t\t\t\t</span>\n\t\t\t\t<span ng-show=\"commaList.remainingItems > 0\">... {{commaList.remainingItems}} more items</span>\n\t\t\t</span>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'commaList',
	        scope: {},
	        bindToController: {
	            inList: '=list',
	            max: '=',
	            transform: '&',
	        },
	    };
	}
	angular.module(exports.moduleName, [__object.moduleName])
	    .directive(exports.directiveName, commaList)
	    .controller(exports.controllerName, CommaListController);
	//# sourceMappingURL=commaList.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// /// <reference path='../../../typings/bootstrapDateTimePicker.d.ts' />
	__webpack_require__(82);
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(12);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __dateTimeFormatStrings = typescript_angular_utilities_1.services.date;
	var componentValidator_service_1 = __webpack_require__(87);
	exports.moduleName = 'rl.ui.components.dateTime';
	exports.directiveName = 'rlDateTime';
	exports.controllerName = 'DateTimeController';
	var DateTimeController = (function () {
	    function DateTimeController($scope, componentValidatorFactory) {
	        var _this = this;
	        var unregister = $scope.$watch(function () { return _this.ngModel; }, function (value) {
	            if (!_.isUndefined(_this.validator)) {
	                _this.dateTimeValidator = componentValidatorFactory.getInstance({
	                    ngModel: _this.ngModel,
	                    $scope: $scope,
	                    validators: [_this.validator],
	                });
	            }
	            unregister();
	        });
	    }
	    DateTimeController.$inject = ['$scope', componentValidator_service_1.factoryName];
	    return DateTimeController;
	})();
	exports.DateTimeController = DateTimeController;
	dateTime.$inject = [typescript_angular_utilities_1.services.moment.serviceName, __dateTimeFormatStrings.dateTimeFormatServiceName];
	function dateTime(moment, dateTimeFormatStrings) {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(88),
	        require: '?^ngModel',
	        controller: exports.controllerName,
	        controllerAs: 'dateTime',
	        scope: {},
	        bindToController: {
	            minuteStepping: '=',
	            useDate: '=',
	            useTime: '=',
	            min: '=',
	            max: '=',
	        },
	        link: function (scope, element, attrs, ngModel) {
	            var dateTime = scope.dateTime;
	            dateTime.ngModel = ngModel;
	            // defaults to true
	            var hasDate = _.isUndefined(dateTime.useDate) ? true : dateTime.useDate;
	            var hasTime = _.isUndefined(dateTime.useTime) ? true : dateTime.useTime;
	            var defaults = element.datetimepicker.defaults;
	            var min = dateTime.min != null ? dateTime.min : defaults.minDate;
	            var max = dateTime.max != null ? dateTime.max : defaults.maxDate;
	            scope.$watch(function () { return ngModel.$viewValue; }, function (newValue) {
	                if (newValue !== '') {
	                    dateTime.validFormat = moment(newValue).isValid();
	                }
	            });
	            // --- Implementation ---
	            element.datetimepicker({
	                stepping: dateTime.minuteStepping || 1,
	                format: dateTime.format || defaultFormat(hasDate, hasTime),
	                direction: 'bottom',
	                elementHeight: 32,
	                pickDate: hasDate,
	                pickTime: hasTime,
	                minDate: min,
	                maxDate: max,
	            }).on('change.dp', function () {
	                var newValue = $(this).find('input').val();
	                ngModel.$setViewValue(newValue);
	                scope.$apply();
	            });
	            function defaultFormat(hasDate, hasTime) {
	                if (hasDate && hasTime) {
	                    return dateTimeFormatStrings.dateTimeFormat;
	                }
	                else if (hasDate) {
	                    return dateTimeFormatStrings.dateFormat;
	                }
	                else if (hasTime) {
	                    return dateTimeFormatStrings.timeFormat;
	                }
	                else {
	                    // revert to default format
	                    return false;
	                }
	            }
	        },
	    };
	}
	angular.module(exports.moduleName, [typescript_angular_utilities_1.services.moment.moduleName, typescript_angular_utilities_1.services.date.moduleName, componentValidator_service_1.moduleName])
	    .directive(exports.directiveName, dateTime)
	    .controller(exports.controllerName, DateTimeController);
	//# sourceMappingURL=dateTime.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(83);
	__webpack_require__(85);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(84);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./bootstrap-datetimepicker.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./bootstrap-datetimepicker.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\r\n * Datetimepicker for Bootstrap v3\r\n//! version : 3.1.3\r\n * https://github.com/Eonasdan/bootstrap-datetimepicker/\r\n */\r\n.bootstrap-datetimepicker-widget {\r\n  top: 0;\r\n  left: 0;\r\n  width: 250px;\r\n  padding: 4px;\r\n  margin-top: 1px;\r\n  z-index: 99999 !important;\r\n  border-radius: 4px;\r\n}\r\n.bootstrap-datetimepicker-widget.timepicker-sbs {\r\n  width: 600px;\r\n}\r\n.bootstrap-datetimepicker-widget.bottom:before {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 7px solid transparent;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 7px solid #ccc;\r\n  border-bottom-color: rgba(0, 0, 0, 0.2);\r\n  position: absolute;\r\n  top: -7px;\r\n  left: 7px;\r\n}\r\n.bootstrap-datetimepicker-widget.bottom:after {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-bottom: 6px solid white;\r\n  position: absolute;\r\n  top: -6px;\r\n  left: 8px;\r\n}\r\n.bootstrap-datetimepicker-widget.top:before {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 7px solid transparent;\r\n  border-right: 7px solid transparent;\r\n  border-top: 7px solid #ccc;\r\n  border-top-color: rgba(0, 0, 0, 0.2);\r\n  position: absolute;\r\n  bottom: -7px;\r\n  left: 6px;\r\n}\r\n.bootstrap-datetimepicker-widget.top:after {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 6px solid transparent;\r\n  border-right: 6px solid transparent;\r\n  border-top: 6px solid white;\r\n  position: absolute;\r\n  bottom: -6px;\r\n  left: 7px;\r\n}\r\n.bootstrap-datetimepicker-widget .dow {\r\n  width: 14.2857%;\r\n}\r\n.bootstrap-datetimepicker-widget.pull-right:before {\r\n  left: auto;\r\n  right: 6px;\r\n}\r\n.bootstrap-datetimepicker-widget.pull-right:after {\r\n  left: auto;\r\n  right: 7px;\r\n}\r\n.bootstrap-datetimepicker-widget > ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n}\r\n.bootstrap-datetimepicker-widget a[data-action] {\r\n  padding: 0;\r\n}\r\n.bootstrap-datetimepicker-widget a[data-action]:active {\r\n  box-shadow: none;\r\n}\r\n.bootstrap-datetimepicker-widget .timepicker {\r\n  margin: 0 4px 4px 4px;\r\n}\r\n.bootstrap-datetimepicker-widget .timepicker-hour,\r\n.bootstrap-datetimepicker-widget .timepicker-minute,\r\n.bootstrap-datetimepicker-widget .timepicker-second {\r\n  width: 54px;\r\n  font-weight: bold;\r\n  font-size: 1.2em;\r\n  margin-top: 4px;\r\n}\r\n.bootstrap-datetimepicker-widget button[data-action] {\r\n  padding: 6px;\r\n}\r\n.bootstrap-datetimepicker-widget table[data-hour-format=\"12\"] .separator {\r\n  width: 4px;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.bootstrap-datetimepicker-widget .datepicker > div {\r\n  display: none;\r\n}\r\n.bootstrap-datetimepicker-widget .picker-switch {\r\n  text-align: center;\r\n}\r\n.bootstrap-datetimepicker-widget table {\r\n  width: 100%;\r\n  margin: 0;\r\n}\r\n.bootstrap-datetimepicker-widget td,\r\n.bootstrap-datetimepicker-widget th {\r\n  text-align: center;\r\n  border-radius: 4px;\r\n}\r\n.bootstrap-datetimepicker-widget td {\r\n  height: 25px;\r\n  line-height: 25px;\r\n  width: 54px;\r\n}\r\n.bootstrap-datetimepicker-widget td.cw {\r\n  font-size: 10px;\r\n  height: 20px;\r\n  line-height: 20px;\r\n  color: #777777;\r\n}\r\n.bootstrap-datetimepicker-widget td.day {\r\n  height: 20px;\r\n  line-height: 20px;\r\n  width: 20px;\r\n}\r\n.bootstrap-datetimepicker-widget td.day:hover,\r\n.bootstrap-datetimepicker-widget td.hour:hover,\r\n.bootstrap-datetimepicker-widget td.minute:hover,\r\n.bootstrap-datetimepicker-widget td.second:hover {\r\n  background: #eeeeee;\r\n  cursor: pointer;\r\n}\r\n.bootstrap-datetimepicker-widget td.old,\r\n.bootstrap-datetimepicker-widget td.new {\r\n  color: #777777;\r\n}\r\n.bootstrap-datetimepicker-widget td.today {\r\n  position: relative;\r\n}\r\n.bootstrap-datetimepicker-widget td.today:before {\r\n  content: '';\r\n  display: inline-block;\r\n  border-left: 7px solid transparent;\r\n  border-bottom: 7px solid #428bca;\r\n  border-top-color: rgba(0, 0, 0, 0.2);\r\n  position: absolute;\r\n  bottom: 4px;\r\n  right: 4px;\r\n}\r\n.bootstrap-datetimepicker-widget td.active,\r\n.bootstrap-datetimepicker-widget td.active:hover {\r\n  background-color: #428bca;\r\n  color: #ffffff;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.bootstrap-datetimepicker-widget td.active.today:before {\r\n  border-bottom-color: #fff;\r\n}\r\n.bootstrap-datetimepicker-widget td.disabled,\r\n.bootstrap-datetimepicker-widget td.disabled:hover {\r\n  background: none;\r\n  color: #777777;\r\n  cursor: not-allowed;\r\n}\r\n.bootstrap-datetimepicker-widget td span {\r\n  display: inline-block;\r\n  width: 54px;\r\n  height: 25px;\r\n  line-height: 25px;\r\n  margin: 0px 1.5px;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.bootstrap-datetimepicker-widget td span:hover {\r\n  background: #eeeeee;\r\n}\r\n.bootstrap-datetimepicker-widget td span.active {\r\n  background-color: #428bca;\r\n  color: #ffffff;\r\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\r\n}\r\n.bootstrap-datetimepicker-widget td span.old {\r\n  color: #777777;\r\n}\r\n.bootstrap-datetimepicker-widget td span.disabled,\r\n.bootstrap-datetimepicker-widget td span.disabled:hover {\r\n  background: none;\r\n  color: #777777;\r\n  cursor: not-allowed;\r\n}\r\n.bootstrap-datetimepicker-widget th {\r\n  height: 20px;\r\n  line-height: 20px;\r\n  width: 20px;\r\n}\r\n.bootstrap-datetimepicker-widget th.picker-switch {\r\n  width: 145px;\r\n}\r\n.bootstrap-datetimepicker-widget th.next,\r\n.bootstrap-datetimepicker-widget th.prev {\r\n  font-size: 21px;\r\n}\r\n.bootstrap-datetimepicker-widget th.disabled,\r\n.bootstrap-datetimepicker-widget th.disabled:hover {\r\n  background: none;\r\n  color: #777777;\r\n  cursor: not-allowed;\r\n}\r\n.bootstrap-datetimepicker-widget thead tr:first-child th {\r\n  cursor: pointer;\r\n}\r\n.bootstrap-datetimepicker-widget thead tr:first-child th:hover {\r\n  background: #eeeeee;\r\n}\r\n.input-group.date .input-group-addon span {\r\n  display: block;\r\n  cursor: pointer;\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n.bootstrap-datetimepicker-widget.left-oriented:before {\r\n  left: auto;\r\n  right: 6px;\r\n}\r\n.bootstrap-datetimepicker-widget.left-oriented:after {\r\n  left: auto;\r\n  right: 7px;\r\n}\r\n.bootstrap-datetimepicker-widget ul.list-unstyled li div.timepicker div.timepicker-picker table.table-condensed tbody > tr > td {\r\n  padding: 0px !important;\r\n}\r\n@media screen and (max-width: 767px) {\r\n  .bootstrap-datetimepicker-widget.timepicker-sbs {\r\n    width: 283px;\r\n  }\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	//! version : 3.1.3
	=========================================================
	bootstrap-datetimepicker.js
	https://github.com/Eonasdan/bootstrap-datetimepicker
	=========================================================
	The MIT License (MIT)
	
	Copyright (c) 2014 Jonathan Peterson
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
	*/
	; (function (root, factory) {
		'use strict';
		if (true) {
			// AMD is used - Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(12), __webpack_require__(86)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			factory(require('jquery'), require('moment'));
		}
		else {
			// Neither AMD or CommonJS used. Use global variables.
			if (!jQuery) {
				throw new Error('bootstrap-datetimepicker requires jQuery to be loaded first');
			}
			if (!moment) {
				throw new Error('bootstrap-datetimepicker requires moment.js to be loaded first');
			}
			factory(root.jQuery, moment);
		}
	}(this, function ($, moment) {
		'use strict';
		if (typeof moment === 'undefined') {
			throw new Error('momentjs is required');
		}
	
		var dpgId = 0,
	
	    DateTimePicker = function (element, options) {
	    	var defaults = $.fn.datetimepicker.defaults,
	
	            icons = {
	            	time: 'fa fa-clock-o',
	            	date: 'fa fa-calendar',
	            	up: 'fa fa-chevron-up',
	            	down: 'fa fa-chevron-down'
	            },
	
	            picker = this,
	            errored = false,
	            dDate,
	
	        init = function () {
	        	var icon = false, localeData, rInterval;
	        	picker.options = $.extend({}, defaults, options);
	        	picker.options.icons = $.extend({}, icons, picker.options.icons);
	
	        	picker.element = $(element);
	
	        	dataToOptions();
	
	        	if (!(picker.options.pickTime || picker.options.pickDate)) {
	        		throw new Error('Must choose at least one picker');
	        	}
	
	        	picker.id = dpgId++;
	        	moment.locale(picker.options.language);
	        	picker.date = moment();
	        	picker.unset = false;
	        	picker.isInput = picker.element.is('input');
	        	picker.component = false;
	
	        	if (picker.element.hasClass('input-group')) {
	        		if (picker.element.find('.datepickerbutton').size() === 0) {//in case there is more then one 'input-group-addon' Issue #48
	        			picker.component = picker.element.find('[class^="input-group-"]');
	        		}
	        		else {
	        			picker.component = picker.element.find('.datepickerbutton');
	        		}
	        	}
	        	picker.format = picker.options.format;
	
	        	localeData = moment().localeData();
	
	        	if (!picker.format) {
	        		picker.format = (picker.options.pickDate ? localeData.longDateFormat('L') : '');
	        		if (picker.options.pickDate && picker.options.pickTime) {
	        			picker.format += ' ';
	        		}
	        		picker.format += (picker.options.pickTime ? localeData.longDateFormat('LT') : '');
	        		if (picker.options.useSeconds) {
	        			if (localeData.longDateFormat('LT').indexOf(' A') !== -1) {
	        				picker.format = picker.format.split(' A')[0] + ':ss A';
	        			}
	        			else {
	        				picker.format += ':ss';
	        			}
	        		}
	        	}
	        	picker.use24hours = (picker.format.toLowerCase().indexOf('a') < 0 && picker.format.indexOf('h') < 0);
	
	        	if (picker.component) {
	        		icon = picker.component.find('span');
	        	}
	
	        	if (picker.options.pickTime) {
	        		if (icon) {
	        			icon.addClass(picker.options.icons.time);
	        		}
	        	}
	        	if (picker.options.pickDate) {
	        		if (icon) {
	        			icon.removeClass(picker.options.icons.time);
	        			icon.addClass(picker.options.icons.date);
	        		}
	        	}
	
	        	picker.options.widgetParent =
	                typeof picker.options.widgetParent === 'string' && picker.options.widgetParent ||
	                picker.element.parents().filter(function () {
	                	return 'scroll' === $(this).css('overflow-y');
	                }).get(0) ||
	                'body';
	
	        	picker.widget = $(getTemplate()).appendTo(picker.options.widgetParent);
	
	        	picker.minViewMode = picker.options.minViewMode || 0;
	        	if (typeof picker.minViewMode === 'string') {
	        		switch (picker.minViewMode) {
	        			case 'months':
	        				picker.minViewMode = 1;
	        				break;
	        			case 'years':
	        				picker.minViewMode = 2;
	        				break;
	        			default:
	        				picker.minViewMode = 0;
	        				break;
	        		}
	        	}
	        	picker.viewMode = picker.options.viewMode || 0;
	        	if (typeof picker.viewMode === 'string') {
	        		switch (picker.viewMode) {
	        			case 'months':
	        				picker.viewMode = 1;
	        				break;
	        			case 'years':
	        				picker.viewMode = 2;
	        				break;
	        			default:
	        				picker.viewMode = 0;
	        				break;
	        		}
	        	}
	
	        	picker.viewMode = Math.max(picker.viewMode, picker.minViewMode);
	
	        	picker.options.disabledDates = indexGivenDates(picker.options.disabledDates);
	        	picker.options.enabledDates = indexGivenDates(picker.options.enabledDates);
	
	        	picker.startViewMode = picker.viewMode;
	        	picker.setMinDate(picker.options.minDate);
	        	picker.setMaxDate(picker.options.maxDate);
	        	fillDow();
	        	fillMonths();
	        	fillHours();
	        	fillMinutes();
	        	fillSeconds();
	        	update();
	        	showMode();
	        	if (!getPickerInput().prop('disabled')) {
	        		attachDatePickerEvents();
	        	}
	        	if (picker.options.defaultDate !== '' && getPickerInput().val() === '') {
	        		picker.setValue(picker.options.defaultDate);
	        	}
	        	if (picker.options.minuteStepping !== 1) {
	        		rInterval = picker.options.minuteStepping;
	        		picker.date.minutes((Math.round(picker.date.minutes() / rInterval) * rInterval) % 60).seconds(0);
	        	}
	        },
	
	        getPickerInput = function () {
	        	var input;
	
	        	if (picker.isInput) {
	        		return picker.element;
	        	}
	        	input = picker.element.find('.datepickerinput');
	        	if (input.size() === 0) {
	        		input = picker.element.find('input');
	        	}
	        	else if (!input.is('input')) {
	        		throw new Error('CSS class "datepickerinput" cannot be applied to non input element');
	        	}
	        	return input;
	        },
	
	        dataToOptions = function () {
	        	var eData;
	        	if (picker.element.is('input')) {
	        		eData = picker.element.data();
	        	}
	        	else {
	        		eData = picker.element.find('input').data();
	        	}
	        	if (eData.dateFormat !== undefined) {
	        		picker.options.format = eData.dateFormat;
	        	}
	        	if (eData.datePickdate !== undefined) {
	        		picker.options.pickDate = eData.datePickdate;
	        	}
	        	if (eData.datePicktime !== undefined) {
	        		picker.options.pickTime = eData.datePicktime;
	        	}
	        	if (eData.dateUseminutes !== undefined) {
	        		picker.options.useMinutes = eData.dateUseminutes;
	        	}
	        	if (eData.dateUseseconds !== undefined) {
	        		picker.options.useSeconds = eData.dateUseseconds;
	        	}
	        	if (eData.dateUsecurrent !== undefined) {
	        		picker.options.useCurrent = eData.dateUsecurrent;
	        	}
	        	if (eData.calendarWeeks !== undefined) {
	        		picker.options.calendarWeeks = eData.calendarWeeks;
	        	}
	        	if (eData.dateMinutestepping !== undefined) {
	        		picker.options.minuteStepping = eData.dateMinutestepping;
	        	}
	        	if (eData.dateMindate !== undefined) {
	        		picker.options.minDate = eData.dateMindate;
	        	}
	        	if (eData.dateMaxdate !== undefined) {
	        		picker.options.maxDate = eData.dateMaxdate;
	        	}
	        	if (eData.dateShowtoday !== undefined) {
	        		picker.options.showToday = eData.dateShowtoday;
	        	}
	        	if (eData.dateCollapse !== undefined) {
	        		picker.options.collapse = eData.dateCollapse;
	        	}
	        	if (eData.dateLanguage !== undefined) {
	        		picker.options.language = eData.dateLanguage;
	        	}
	        	if (eData.dateDefaultdate !== undefined) {
	        		picker.options.defaultDate = eData.dateDefaultdate;
	        	}
	        	if (eData.dateDisableddates !== undefined) {
	        		picker.options.disabledDates = eData.dateDisableddates;
	        	}
	        	if (eData.dateEnableddates !== undefined) {
	        		picker.options.enabledDates = eData.dateEnableddates;
	        	}
	        	if (eData.dateIcons !== undefined) {
	        		picker.options.icons = eData.dateIcons;
	        	}
	        	if (eData.dateUsestrict !== undefined) {
	        		picker.options.useStrict = eData.dateUsestrict;
	        	}
	        	if (eData.dateDirection !== undefined) {
	        		picker.options.direction = eData.dateDirection;
	        	}
	        	if (eData.dateSidebyside !== undefined) {
	        		picker.options.sideBySide = eData.dateSidebyside;
	        	}
	        	if (eData.dateDaysofweekdisabled !== undefined) {
	        		picker.options.daysOfWeekDisabled = eData.dateDaysofweekdisabled;
	        	}
	        },
	
	        place = function () {
	        	var position = 'absolute',
	                offset = picker.component ? picker.component.offset() : picker.element.offset(),
	                $window = $(window),
	                placePosition;
	
	        	picker.width = picker.component ? picker.component.outerWidth() : picker.element.outerWidth();
	        	offset.top = offset.top + picker.element.outerHeight();
	
	        	if (picker.options.direction === 'up') {
	        		placePosition = 'top';
	        	} else if (picker.options.direction === 'bottom') {
	        		placePosition = 'bottom';
	        	} else if (picker.options.direction === 'auto') {
	        		if (offset.top + picker.widget.height() > $window.height() + $window.scrollTop() && picker.widget.height() + picker.element.outerHeight() < offset.top) {
	        			placePosition = 'top';
	        		} else {
	        			placePosition = 'bottom';
	        		}
	        	}
	        	if (placePosition === 'top') {
	        		offset.bottom = $window.height() - offset.top + picker.element.outerHeight() + 3;
	        		picker.widget.addClass('top').removeClass('bottom');
	        	} else {
	        		offset.top += 1;
	        		offset.top += picker.options.elementHeight;
	        		picker.widget.addClass('bottom').removeClass('top');
	        	}
	
	        	if (picker.options.width !== undefined) {
	        		picker.widget.width(picker.options.width);
	        	}
	
	        	if (picker.options.orientation === 'left') {
	        		picker.widget.addClass('left-oriented');
	        		offset.left = offset.left - picker.widget.width() + 20;
	        	}
	
	        	if (isInFixed()) {
	        		position = 'fixed';
	        		offset.top -= $window.scrollTop();
	        		offset.left -= $window.scrollLeft();
	        	}
	
	        	if ($window.width() < offset.left + picker.widget.outerWidth()) {
	        		offset.right = $window.width() - offset.left - picker.width;
	        		offset.left = 'auto';
	        		picker.widget.addClass('pull-right');
	        	} else {
	        		offset.right = 'auto';
	        		picker.widget.removeClass('pull-right');
	        	}
	
	        	if (placePosition === 'top') {
	        		picker.widget.css({
	        			position: position,
	        			bottom: offset.bottom,
	        			top: 'auto',
	        			left: offset.left,
	        			right: offset.right
	        		});
	        	} else {
	        		picker.widget.css({
	        			position: position,
	        			top: offset.top,
	        			bottom: 'auto',
	        			left: offset.left,
	        			right: offset.right
	        		});
	        	}
	        },
	
	        notifyChange = function (oldDate, eventType) {
	        	if (moment(picker.date).isSame(moment(oldDate)) && !errored) {
	        		return;
	        	}
	        	errored = false;
	        	picker.element.trigger({
	        		type: 'dp.change',
	        		date: moment(picker.date),
	        		oldDate: moment(oldDate)
	        	});
	
	        	if (eventType !== 'change') {
	        		picker.element.change();
	        	}
	        },
	
	        notifyError = function (date) {
	        	errored = true;
	        	picker.element.trigger({
	        		type: 'dp.error',
	        		date: moment(date, picker.format, picker.options.useStrict)
	        	});
	        },
	
	        update = function (newDate) {
	        	moment.locale(picker.options.language);
	        	var dateStr = newDate;
	        	if (!dateStr) {
	        		dateStr = getPickerInput().val();
	        		if (dateStr) {
	        			picker.date = moment(dateStr, picker.format, picker.options.useStrict);
	        		}
	        		if (!picker.date) {
	        			picker.date = moment();
	        		}
	        	}
	        	picker.viewDate = moment(picker.date).startOf('month');
	        	fillDate();
	        	fillTime();
	        },
	
	        fillDow = function () {
	        	moment.locale(picker.options.language);
	        	var html = $('<tr>'), weekdaysMin = moment.weekdaysMin(), i;
	        	if (picker.options.calendarWeeks === true) {
	        		html.append('<th class="cw">#</th>');
	        	}
	        	if (moment().localeData()._week.dow === 0) { // starts on Sunday
	        		for (i = 0; i < 7; i++) {
	        			html.append('<th class="dow">' + weekdaysMin[i] + '</th>');
	        		}
	        	} else {
	        		for (i = 1; i < 8; i++) {
	        			if (i === 7) {
	        				html.append('<th class="dow">' + weekdaysMin[0] + '</th>');
	        			} else {
	        				html.append('<th class="dow">' + weekdaysMin[i] + '</th>');
	        			}
	        		}
	        	}
	        	picker.widget.find('.datepicker-days thead').append(html);
	        },
	
	        fillMonths = function () {
	        	moment.locale(picker.options.language);
	        	var html = '', i, monthsShort = moment.monthsShort();
	        	for (i = 0; i < 12; i++) {
	        		html += '<span class="month">' + monthsShort[i] + '</span>';
	        	}
	        	picker.widget.find('.datepicker-months td').append(html);
	        },
	
	        fillDate = function () {
	        	if (!picker.options.pickDate) {
	        		return;
	        	}
	        	moment.locale(picker.options.language);
	        	var year = picker.viewDate.year(),
	                month = picker.viewDate.month(),
	                startYear = picker.options.minDate.year(),
	                startMonth = picker.options.minDate.month(),
	                endYear = picker.options.maxDate.year(),
	                endMonth = picker.options.maxDate.month(),
	                currentDate,
	                prevMonth, nextMonth, html = [], row, clsName, i, days, yearCont, currentYear, months = moment.months();
	
	        	picker.widget.find('.datepicker-days').find('.disabled').removeClass('disabled');
	        	picker.widget.find('.datepicker-months').find('.disabled').removeClass('disabled');
	        	picker.widget.find('.datepicker-years').find('.disabled').removeClass('disabled');
	
	        	picker.widget.find('.datepicker-days th:eq(1)').text(
	                months[month] + ' ' + year);
	
	        	prevMonth = moment(picker.viewDate, picker.format, picker.options.useStrict).subtract(1, 'months');
	        	days = prevMonth.daysInMonth();
	        	prevMonth.date(days).startOf('week');
	        	if ((year === startYear && month <= startMonth) || year < startYear) {
	        		picker.widget.find('.datepicker-days th:eq(0)').addClass('disabled');
	        	}
	        	if ((year === endYear && month >= endMonth) || year > endYear) {
	        		picker.widget.find('.datepicker-days th:eq(2)').addClass('disabled');
	        	}
	
	        	nextMonth = moment(prevMonth).add(42, 'd');
	        	while (prevMonth.isBefore(nextMonth)) {
	        		if (prevMonth.weekday() === moment().startOf('week').weekday()) {
	        			row = $('<tr>');
	        			html.push(row);
	        			if (picker.options.calendarWeeks === true) {
	        				row.append('<td class="cw">' + prevMonth.week() + '</td>');
	        			}
	        		}
	        		clsName = '';
	        		if (prevMonth.year() < year || (prevMonth.year() === year && prevMonth.month() < month)) {
	        			clsName += ' old';
	        		} else if (prevMonth.year() > year || (prevMonth.year() === year && prevMonth.month() > month)) {
	        			clsName += ' new';
	        		}
	        		if (prevMonth.isSame(moment({ y: picker.date.year(), M: picker.date.month(), d: picker.date.date() }))) {
	        			clsName += ' active';
	        		}
	        		if (isInDisableDates(prevMonth, 'day') || !isInEnableDates(prevMonth)) {
	        			clsName += ' disabled';
	        		}
	        		if (picker.options.showToday === true) {
	        			if (prevMonth.isSame(moment(), 'day')) {
	        				clsName += ' today';
	        			}
	        		}
	        		if (picker.options.daysOfWeekDisabled) {
	        			for (i = 0; i < picker.options.daysOfWeekDisabled.length; i++) {
	        				if (prevMonth.day() === picker.options.daysOfWeekDisabled[i]) {
	        					clsName += ' disabled';
	        					break;
	        				}
	        			}
	        		}
	        		row.append('<td class="day' + clsName + '">' + prevMonth.date() + '</td>');
	
	        		currentDate = prevMonth.date();
	        		prevMonth.add(1, 'd');
	
	        		if (currentDate === prevMonth.date()) {
	        			prevMonth.add(1, 'd');
	        		}
	        	}
	        	picker.widget.find('.datepicker-days tbody').empty().append(html);
	        	currentYear = picker.date.year();
	        	months = picker.widget.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
	        	if (currentYear === year) {
	        		months.eq(picker.date.month()).addClass('active');
	        	}
	        	if (year - 1 < startYear) {
	        		picker.widget.find('.datepicker-months th:eq(0)').addClass('disabled');
	        	}
	        	if (year + 1 > endYear) {
	        		picker.widget.find('.datepicker-months th:eq(2)').addClass('disabled');
	        	}
	        	for (i = 0; i < 12; i++) {
	        		if ((year === startYear && startMonth > i) || (year < startYear)) {
	        			$(months[i]).addClass('disabled');
	        		} else if ((year === endYear && endMonth < i) || (year > endYear)) {
	        			$(months[i]).addClass('disabled');
	        		}
	        	}
	
	        	html = '';
	        	year = parseInt(year / 10, 10) * 10;
	        	yearCont = picker.widget.find('.datepicker-years').find(
	                'th:eq(1)').text(year + '-' + (year + 9)).parents('table').find('td');
	        	picker.widget.find('.datepicker-years').find('th').removeClass('disabled');
	        	if (startYear > year) {
	        		picker.widget.find('.datepicker-years').find('th:eq(0)').addClass('disabled');
	        	}
	        	if (endYear < year + 9) {
	        		picker.widget.find('.datepicker-years').find('th:eq(2)').addClass('disabled');
	        	}
	        	year -= 1;
	        	for (i = -1; i < 11; i++) {
	        		html += '<span class="year' + (i === -1 || i === 10 ? ' old' : '') + (currentYear === year ? ' active' : '') + ((year < startYear || year > endYear) ? ' disabled' : '') + '">' + year + '</span>';
	        		year += 1;
	        	}
	        	yearCont.html(html);
	        },
	
	        fillHours = function () {
	        	moment.locale(picker.options.language);
	        	var table = picker.widget.find('.timepicker .timepicker-hours table'), html = '', current, i, j;
	        	table.parent().hide();
	        	if (picker.use24hours) {
	        		current = 0;
	        		for (i = 0; i < 6; i += 1) {
	        			html += '<tr>';
	        			for (j = 0; j < 4; j += 1) {
	        				html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
	        				current++;
	        			}
	        			html += '</tr>';
	        		}
	        	}
	        	else {
	        		current = 1;
	        		for (i = 0; i < 3; i += 1) {
	        			html += '<tr>';
	        			for (j = 0; j < 4; j += 1) {
	        				html += '<td class="hour">' + padLeft(current.toString()) + '</td>';
	        				current++;
	        			}
	        			html += '</tr>';
	        		}
	        	}
	        	table.html(html);
	        },
	
	        fillMinutes = function () {
	        	var table = picker.widget.find('.timepicker .timepicker-minutes table'), html = '', current = 0, i, j, step = picker.options.minuteStepping;
	        	table.parent().hide();
	        	if (step === 1) {
	        		step = 5;
	        	}
	        	for (i = 0; i < Math.ceil(60 / step / 4) ; i++) {
	        		html += '<tr>';
	        		for (j = 0; j < 4; j += 1) {
	        			if (current < 60) {
	        				html += '<td class="minute">' + padLeft(current.toString()) + '</td>';
	        				current += step;
	        			} else {
	        				html += '<td></td>';
	        			}
	        		}
	        		html += '</tr>';
	        	}
	        	table.html(html);
	        },
	
	        fillSeconds = function () {
	        	var table = picker.widget.find('.timepicker .timepicker-seconds table'), html = '', current = 0, i, j;
	        	table.parent().hide();
	        	for (i = 0; i < 3; i++) {
	        		html += '<tr>';
	        		for (j = 0; j < 4; j += 1) {
	        			html += '<td class="second">' + padLeft(current.toString()) + '</td>';
	        			current += 5;
	        		}
	        		html += '</tr>';
	        	}
	        	table.html(html);
	        },
	
	        fillTime = function () {
	        	if (!picker.date) {
	        		return;
	        	}
	        	var timeComponents = picker.widget.find('.timepicker span[data-time-component]'),
	                hour = picker.date.hours(),
	                period = picker.date.format('A');
	        	if (!picker.use24hours) {
	        		if (hour === 0) {
	        			hour = 12;
	        		} else if (hour !== 12) {
	        			hour = hour % 12;
	        		}
	        		picker.widget.find('.timepicker [data-action=togglePeriod]').text(period);
	        	}
	        	timeComponents.filter('[data-time-component=hours]').text(padLeft(hour));
	        	timeComponents.filter('[data-time-component=minutes]').text(padLeft(picker.date.minutes()));
	        	timeComponents.filter('[data-time-component=seconds]').text(padLeft(picker.date.second()));
	        },
	
	        click = function (e) {
	        	e.stopPropagation();
	        	e.preventDefault();
	        	picker.unset = false;
	        	var target = $(e.target).closest('span, td, th'), month, year, step, day, oldDate = moment(picker.date);
	        	if (target.length === 1) {
	        		if (!target.is('.disabled')) {
	        			switch (target[0].nodeName.toLowerCase()) {
	        				case 'th':
	        					switch (target[0].className) {
	        						case 'picker-switch':
	        							showMode(1);
	        							break;
	        						case 'prev':
	        						case 'next':
	        							step = dpGlobal.modes[picker.viewMode].navStep;
	        							if (target[0].className === 'prev') {
	        								step = step * -1;
	        							}
	        							picker.viewDate.add(step, dpGlobal.modes[picker.viewMode].navFnc);
	        							fillDate();
	        							break;
	        					}
	        					break;
	        				case 'span':
	        					if (target.is('.month')) {
	        						month = target.parent().find('span').index(target);
	        						picker.viewDate.month(month);
	        					} else {
	        						year = parseInt(target.text(), 10) || 0;
	        						picker.viewDate.year(year);
	        					}
	        					if (picker.viewMode === picker.minViewMode) {
	        						picker.date = moment({
	        							y: picker.viewDate.year(),
	        							M: picker.viewDate.month(),
	        							d: picker.viewDate.date(),
	        							h: picker.date.hours(),
	        							m: picker.date.minutes(),
	        							s: picker.date.seconds()
	        						});
	        						set();
	        						notifyChange(oldDate, e.type);
	        					}
	        					showMode(-1);
	        					fillDate();
	        					break;
	        				case 'td':
	        					if (target.is('.day')) {
	        						day = parseInt(target.text(), 10) || 1;
	        						month = picker.viewDate.month();
	        						year = picker.viewDate.year();
	        						if (target.is('.old')) {
	        							if (month === 0) {
	        								month = 11;
	        								year -= 1;
	        							} else {
	        								month -= 1;
	        							}
	        						} else if (target.is('.new')) {
	        							if (month === 11) {
	        								month = 0;
	        								year += 1;
	        							} else {
	        								month += 1;
	        							}
	        						}
	        						picker.date = moment({
	        							y: year,
	        							M: month,
	        							d: day,
	        							h: picker.date.hours(),
	        							m: picker.date.minutes(),
	        							s: picker.date.seconds()
	        						}
	                                );
	        						picker.viewDate = moment({
	        							y: year, M: month, d: Math.min(28, day)
	        						});
	        						fillDate();
	        						set();
	        						notifyChange(oldDate, e.type);
	        					}
	        					break;
	        			}
	        		}
	        	}
	        },
	
	        actions = {
	        	incrementHours: function () {
	        		checkDate('add', 'hours', 1);
	        	},
	
	        	incrementMinutes: function () {
	        		checkDate('add', 'minutes', picker.options.minuteStepping);
	        	},
	
	        	incrementSeconds: function () {
	        		checkDate('add', 'seconds', 1);
	        	},
	
	        	decrementHours: function () {
	        		checkDate('subtract', 'hours', 1);
	        	},
	
	        	decrementMinutes: function () {
	        		checkDate('subtract', 'minutes', picker.options.minuteStepping);
	        	},
	
	        	decrementSeconds: function () {
	        		checkDate('subtract', 'seconds', 1);
	        	},
	
	        	togglePeriod: function () {
	        		var hour = picker.date.hours();
	        		if (hour >= 12) {
	        			hour -= 12;
	        		} else {
	        			hour += 12;
	        		}
	        		picker.date.hours(hour);
	        	},
	
	        	showPicker: function () {
	        		picker.widget.find('.timepicker > div:not(.timepicker-picker)').hide();
	        		picker.widget.find('.timepicker .timepicker-picker').show();
	        	},
	
	        	showHours: function () {
	        		picker.widget.find('.timepicker .timepicker-picker').hide();
	        		picker.widget.find('.timepicker .timepicker-hours').show();
	        	},
	
	        	showMinutes: function () {
	        		picker.widget.find('.timepicker .timepicker-picker').hide();
	        		picker.widget.find('.timepicker .timepicker-minutes').show();
	        	},
	
	        	showSeconds: function () {
	        		picker.widget.find('.timepicker .timepicker-picker').hide();
	        		picker.widget.find('.timepicker .timepicker-seconds').show();
	        	},
	
	        	selectHour: function (e) {
	        		var hour = parseInt($(e.target).text(), 10);
	        		if (!picker.use24hours) {
	        			if (picker.date.hours() >= 12) {
	        				if (hour !== 12) {
	        					hour += 12;
	        				}
	        			} else {
	        				if (hour === 12) {
	        					hour = 0;
	        				}
	        			}
	        		}
	        		picker.date.hours(hour);
	        		actions.showPicker.call(picker);
	        	},
	
	        	selectMinute: function (e) {
	        		picker.date.minutes(parseInt($(e.target).text(), 10));
	        		actions.showPicker.call(picker);
	        	},
	
	        	selectSecond: function (e) {
	        		picker.date.seconds(parseInt($(e.target).text(), 10));
	        		actions.showPicker.call(picker);
	        	}
	        },
	
	        doAction = function (e) {
	        	var oldDate = moment(picker.date),
	                action = $(e.currentTarget).data('action'),
	                rv = actions[action].apply(picker, arguments);
	        	stopEvent(e);
	        	if (!picker.date) {
	        		picker.date = moment({ y: 1970 });
	        	}
	        	set();
	        	fillTime();
	        	notifyChange(oldDate, e.type);
	        	return rv;
	        },
	
	        stopEvent = function (e) {
	        	e.stopPropagation();
	        	e.preventDefault();
	        },
	
	        keydown = function (e) {
	        	if (e.keyCode === 27) { // allow escape to hide picker
	        		picker.hide();
	        	}
	        },
	
	        change = function (e) {
	        	moment.locale(picker.options.language);
	        	var input = $(e.target), oldDate = moment(picker.date), newDate = moment(input.val(), picker.format, picker.options.useStrict);
	        	if (newDate.isValid() && !isInDisableDates(newDate) && isInEnableDates(newDate)) {
	        		update();
	        		picker.setValue(newDate);
	        		notifyChange(oldDate, e.type);
	        		set();
	        	}
	        	else {
	        		picker.viewDate = oldDate;
	        		picker.unset = true;
	        		notifyChange(oldDate, e.type);
	        		notifyError(newDate);
	        	}
	        },
	
	        showMode = function (dir) {
	        	if (dir) {
	        		picker.viewMode = Math.max(picker.minViewMode, Math.min(2, picker.viewMode + dir));
	        	}
	        	picker.widget.find('.datepicker > div').hide().filter('.datepicker-' + dpGlobal.modes[picker.viewMode].clsName).show();
	        },
	
	        attachDatePickerEvents = function () {
	        	var $this, $parent, expanded, closed, collapseData;
	        	picker.widget.on('click', '.datepicker *', $.proxy(click, this)); // this handles date picker clicks
	        	picker.widget.on('click', '[data-action]', $.proxy(doAction, this)); // this handles time picker clicks
	        	picker.widget.on('mousedown', $.proxy(stopEvent, this));
	        	picker.element.on('keydown', $.proxy(keydown, this));
	        	if (picker.options.pickDate && picker.options.pickTime) {
	        		picker.widget.on('click.togglePicker', '.accordion-toggle', function (e) {
	        			e.stopPropagation();
	        			$this = $(this);
	        			$parent = $this.closest('ul');
	        			expanded = $parent.find('.in');
	        			closed = $parent.find('.collapse:not(.in)');
	
	        			if (expanded && expanded.length) {
	        				collapseData = expanded.data('collapse');
	        				if (collapseData && collapseData.transitioning) {
	        					return;
	        				}
	        				expanded.collapse('hide');
	        				closed.collapse('show');
	        				$this.find('span').toggleClass(picker.options.icons.time + ' ' + picker.options.icons.date);
	        				if (picker.component) {
	        					picker.component.find('span').toggleClass(picker.options.icons.time + ' ' + picker.options.icons.date);
	        				}
	        			}
	        		});
	        	}
	        	if (picker.isInput) {
	        		picker.element.on({
	        			'click': $.proxy(picker.show, this),
	        			'focus': $.proxy(picker.show, this),
	        			'change': $.proxy(change, this),
	        			'blur': $.proxy(picker.hide, this)
	        		});
	        	} else {
	        		picker.element.on({
	        			'change': $.proxy(change, this)
	        		}, 'input');
	        		if (picker.component) {
	        			picker.component.on('click', $.proxy(picker.show, this));
	        			picker.component.on('mousedown', $.proxy(stopEvent, this));
	        		} else {
	        			picker.element.on('click', $.proxy(picker.show, this));
	        		}
	        	}
	        	picker.widget.on('click.togglePicker', '#today-button', function (e) {
	        		if (picker.options.minuteStepping !== 1) {
	        			var mDate = moment(),
							rInterval = picker.options.minuteStepping;
	        			mDate.minutes((Math.round(mDate.minutes() / rInterval) * rInterval) % 60).seconds(0);
	        			picker.setValue(mDate.format(picker.format));
	        		} else {
	        			picker.setValue(moment().format(picker.format));
	        		}
	        		notifyChange('', e.type);
	        		set();
	        	});
	        	picker.widget.on('click.togglePicker', '#clear-button', function (e) {
	        		picker.setValue(null);
	        		notifyChange('', e.type);
	        	});
	        	picker.widget.on('click.togglePicker', '#close-button', function (e) {
	        		picker.hide();
	        	});
	        },
	
	        attachDatePickerGlobalEvents = function () {
	        	$(window).on(
	                'resize.datetimepicker' + picker.id, $.proxy(place, this));
	        	if (!picker.isInput) {
	        		$(document).on(
	                    'mousedown.datetimepicker' + picker.id, $.proxy(picker.hide, this));
	        	}
	        },
	
	        detachDatePickerEvents = function () {
	        	picker.widget.off('click', '.datepicker *', picker.click);
	        	picker.widget.off('click', '[data-action]');
	        	picker.widget.off('mousedown', picker.stopEvent);
	        	if (picker.options.pickDate && picker.options.pickTime) {
	        		picker.widget.off('click.togglePicker');
	        	}
	        	if (picker.isInput) {
	        		picker.element.off({
	        			'focus': picker.show,
	        			'change': change,
	        			'click': picker.show,
	        			'blur': picker.hide
	        		});
	        	} else {
	        		picker.element.off({
	        			'change': change
	        		}, 'input');
	        		if (picker.component) {
	        			picker.component.off('click', picker.show);
	        			picker.component.off('mousedown', picker.stopEvent);
	        		} else {
	        			picker.element.off('click', picker.show);
	        		}
	        	}
	        },
	
	        detachDatePickerGlobalEvents = function () {
	        	$(window).off('resize.datetimepicker' + picker.id);
	        	if (!picker.isInput) {
	        		$(document).off('mousedown.datetimepicker' + picker.id);
	        	}
	        },
	
	        isInFixed = function () {
	        	if (picker.element) {
	        		var parents = picker.element.parents(), inFixed = false, i;
	        		for (i = 0; i < parents.length; i++) {
	        			if ($(parents[i]).css('position') === 'fixed') {
	        				inFixed = true;
	        				break;
	        			}
	        		}
	        		return inFixed;
	        	} else {
	        		return false;
	        	}
	        },
	
	        set = function () {
	        	moment.locale(picker.options.language);
	        	var formatted = '';
	        	if (!picker.unset) {
	        		formatted = moment(picker.date).format(picker.format);
	        	}
	        	getPickerInput().val(formatted);
	        	picker.element.data('date', formatted);
	        	if (!picker.options.pickTime) {
	        		picker.hide();
	        	}
	        },
	
	        checkDate = function (direction, unit, amount) {
	        	moment.locale(picker.options.language);
	        	var newDate;
	        	if (direction === 'add') {
	        		newDate = moment(picker.date);
	        		if (newDate.hours() === 23) {
	        			newDate.add(amount, unit);
	        		}
	        		newDate.add(amount, unit);
	        	}
	        	else {
	        		newDate = moment(picker.date).subtract(amount, unit);
	        	}
	        	if (isInDisableDates(moment(newDate.subtract(amount, unit))) || isInDisableDates(newDate)) {
	        		notifyError(newDate.format(picker.format));
	        		return;
	        	}
	
	        	if (direction === 'add') {
	        		picker.date.add(amount, unit);
	        	}
	        	else {
	        		picker.date.subtract(amount, unit);
	        	}
	        	picker.unset = false;
	        },
	
	        isInDisableDates = function (date, timeUnit) {
	        	moment.locale(picker.options.language);
	        	var maxDate = moment(picker.options.maxDate, picker.format, picker.options.useStrict),
	                minDate = moment(picker.options.minDate, picker.format, picker.options.useStrict);
	
	        	if (timeUnit) {
	        		maxDate = maxDate.endOf(timeUnit);
	        		minDate = minDate.startOf(timeUnit);
	        	}
	
	        	if (date.isAfter(maxDate) || date.isBefore(minDate)) {
	        		return true;
	        	}
	        	if (picker.options.disabledDates === false) {
	        		return false;
	        	}
	        	return picker.options.disabledDates[date.format('YYYY-MM-DD')] === true;
	        },
	        isInEnableDates = function (date) {
	        	moment.locale(picker.options.language);
	        	if (picker.options.enabledDates === false) {
	        		return true;
	        	}
	        	return picker.options.enabledDates[date.format('YYYY-MM-DD')] === true;
	        },
	
	        indexGivenDates = function (givenDatesArray) {
	        	// Store given enabledDates and disabledDates as keys.
	        	// This way we can check their existence in O(1) time instead of looping through whole array.
	        	// (for example: picker.options.enabledDates['2014-02-27'] === true)
	        	var givenDatesIndexed = {}, givenDatesCount = 0, i;
	        	for (i = 0; i < givenDatesArray.length; i++) {
	        		if (moment.isMoment(givenDatesArray[i]) || givenDatesArray[i] instanceof Date) {
	        			dDate = moment(givenDatesArray[i]);
	        		} else {
	        			dDate = moment(givenDatesArray[i], picker.format, picker.options.useStrict);
	        		}
	        		if (dDate.isValid()) {
	        			givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
	        			givenDatesCount++;
	        		}
	        	}
	        	if (givenDatesCount > 0) {
	        		return givenDatesIndexed;
	        	}
	        	return false;
	        },
	
	        padLeft = function (string) {
	        	string = string.toString();
	        	if (string.length >= 2) {
	        		return string;
	        	}
	        	return '0' + string;
	        },
	
	        getTemplate = function () {
	        	var
	                headTemplate =
	                        '<thead>' +
	                            '<tr>' +
	                                '<th class="prev">&lsaquo;</th><th colspan="' + (picker.options.calendarWeeks ? '6' : '5') + '" class="picker-switch"></th><th class="next">&rsaquo;</th>' +
	                            '</tr>' +
	                        '</thead>',
	                contTemplate =
	                        '<tbody><tr><td colspan="' + (picker.options.calendarWeeks ? '8' : '7') + '"></td></tr></tbody>',
	                template = '<div class="datepicker-days">' +
	                    '<table class="table-condensed">' + headTemplate + '<tbody></tbody></table>' +
	                '</div>' +
	                '<div class="datepicker-months">' +
	                    '<table class="table-condensed">' + headTemplate + contTemplate + '</table>' +
	                '</div>' +
	                '<div class="datepicker-years">' +
	                    '<table class="table-condensed">' + headTemplate + contTemplate + '</table>' +
	                '</div>',
	                ret = '';
	        	if (picker.options.pickDate && picker.options.pickTime) {
	        		ret = '<div class="bootstrap-datetimepicker-widget' + (picker.options.sideBySide ? ' timepicker-sbs' : '') + (picker.use24hours ? ' usetwentyfour' : '') + ' dropdown-menu" style="z-index:9999 !important;">';
	        		if (picker.options.sideBySide) {
	        			ret += '<div class="row">' +
	                       '<div class="col-sm-6 datepicker">' + template + '</div>' +
	                       '<div class="col-sm-6 timepicker">' + tpGlobal.getTemplate() + '</div>' +
	                     '</div>';
	        		} else {
	        			ret += '<ul class="list-unstyled">' +
	                        '<li' + (picker.options.collapse ? ' class="collapse in"' : '') + '>' +
	                            '<div class="datepicker">' + template + '</div>' +
	                        '</li>' +
							'<li>' +
							'<span class="btn-group" style="float:left; margin-left:4px">' +
							'<button class="btn btn-info"" id="today-button"> Now </button>' +
							'<button class="btn btn-danger" id="clear-button"> Clear </button>' +
							'</span>' +
							'<button class="btn btn-success" id="close-button" style="float:right; margin-right:4px;">Done</button>' +
							'<div style="clear:both; padding-bottom:5px;"></div>' +
							'</li>' +
	                        '<li' + (picker.options.collapse ? ' class="collapse"' : '') + '>' +
	                            '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' +
	                        '</li>' +
	                   '</ul>';
	        		}
	        		ret += '</div>';
	        		return ret;
	        	}
	        	if (picker.options.pickTime) {
	        		return (
	                    '<div class="bootstrap-datetimepicker-widget dropdown-menu">' +
	                        '<div class="timepicker">' + tpGlobal.getTemplate() + '</div>' +
	                    '</div>'
	                );
	        	}
	        	return (
	                '<div class="bootstrap-datetimepicker-widget dropdown-menu">' +
	                    '<div class="datepicker">' + template + '</div>' +
	                '</div>'
	            );
	        },
	
	        dpGlobal = {
	        	modes: [
	                {
	                	clsName: 'days',
	                	navFnc: 'month',
	                	navStep: 1
	                },
	                {
	                	clsName: 'months',
	                	navFnc: 'year',
	                	navStep: 1
	                },
	                {
	                	clsName: 'years',
	                	navFnc: 'year',
	                	navStep: 10
	                }
	        	]
	        },
	
	        tpGlobal = {
	        	hourTemplate: '<span data-action="showHours"   data-time-component="hours"   class="timepicker-hour"></span>',
	        	minuteTemplate: '<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',
	        	secondTemplate: '<span data-action="showSeconds"  data-time-component="seconds" class="timepicker-second"></span>'
	        };
	
	    	tpGlobal.getTemplate = function () {
	    		return (
	                '<div class="timepicker-picker">' +
	                    '<table class="table-condensed">' +
	                        '<tr>' +
	                            '<td><a href="#" class="btn" data-action="incrementHours"><span class="' + picker.options.icons.up + '"></span></a></td>' +
	                            '<td class="separator"></td>' +
	                            '<td>' + (picker.options.useMinutes ? '<a href="#" class="btn" data-action="incrementMinutes"><span class="' + picker.options.icons.up + '"></span></a>' : '') + '</td>' +
	                            (picker.options.useSeconds ?
	                                '<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><span class="' + picker.options.icons.up + '"></span></a></td>' : '') +
	                            (picker.use24hours ? '' : '<td class="separator"></td>') + '<td></td>' +
	                        '</tr>' +
	                        '<tr>' +
	                            '<td>' + tpGlobal.hourTemplate + '</td> ' +
	                            '<td class="separator">:</td>' +
	                            '<td>' + (picker.options.useMinutes ? tpGlobal.minuteTemplate : '<span class="timepicker-minute">00</span>') + '</td> ' +
	                            (picker.options.useSeconds ?
	                                '<td class="separator">:</td><td>' + tpGlobal.secondTemplate + '</td>' : '') +
	                            (picker.use24hours ? '' : '<td class="separator"></td>' +
	                            '<td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>') +
	                        '</tr>' +
	                        '<tr>' +
	                            '<td><a href="#" class="btn" data-action="decrementHours"><span class="' + picker.options.icons.down + '"></span></a></td>' +
	                            '<td class="separator"></td>' +
	                            '<td>' + (picker.options.useMinutes ? '<a href="#" class="btn" data-action="decrementMinutes"><span class="' + picker.options.icons.down + '"></span></a>' : '') + '</td>' +
	                            (picker.options.useSeconds ?
	                                '<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><span class="' + picker.options.icons.down + '"></span></a></td>' : '') +
	                            (picker.use24hours ? '' : '<td class="separator"></td>') + '<td></td>' +
	                        '</tr>' +
	                    '</table>' +
	                '</div>' +
	                '<div class="timepicker-hours" data-action="selectHour">' +
	                    '<table class="table-condensed"></table>' +
	                '</div>' +
	                '<div class="timepicker-minutes" data-action="selectMinute">' +
	                    '<table class="table-condensed"></table>' +
	                '</div>' +
	                (picker.options.useSeconds ?
	                    '<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>' : '')
	            );
	    	};
	
	    	picker.destroy = function () {
	    		detachDatePickerEvents();
	    		detachDatePickerGlobalEvents();
	    		picker.widget.remove();
	    		picker.element.removeData('DateTimePicker');
	    		if (picker.component) {
	    			picker.component.removeData('DateTimePicker');
	    		}
	    	};
	
	    	picker.show = function (e) {
	    		if (getPickerInput().prop('disabled')) {
	    			return;
	    		}
	    		if (picker.options.useCurrent) {
	    			if (getPickerInput().val() === '') {
	    				if (picker.options.fillEmpty) {
	    					if (picker.options.minuteStepping !== 1) {
	    						var mDate = moment(),
					                rInterval = picker.options.minuteStepping;
	    						mDate.minutes((Math.round(mDate.minutes() / rInterval) * rInterval) % 60).seconds(0);
	    						picker.setValue(mDate.format(picker.format));
	    					} else {
	    						picker.setValue(moment().format(picker.format));
	    					}
	    					notifyChange('', e.type);
	    				}
	    			} else
	    				picker.setValue(getPickerInput().val());
	    		}
	    		// if this is a click event on the input field and picker is already open don't hide it
	    		if (e && e.type === 'click' && picker.isInput && picker.widget.hasClass('picker-open')) {
	    			return;
	    		}
	    		if (picker.widget.hasClass('picker-open')) {
	    			picker.widget.hide();
	    			picker.widget.removeClass('picker-open');
	    		}
	    		else {
	    			picker.widget.show();
	    			picker.widget.addClass('picker-open');
	    		}
	    		picker.height = picker.component ? picker.component.outerHeight() : picker.element.outerHeight();
	    		place();
	    		picker.element.trigger({
	    			type: 'dp.show',
	    			date: moment(picker.date)
	    		});
	    		attachDatePickerGlobalEvents();
	    		if (e) {
	    			stopEvent(e);
	    		}
	    	};
	
	    	picker.disable = function () {
	    		var input = getPickerInput();
	    		if (input.prop('disabled')) {
	    			return;
	    		}
	    		input.prop('disabled', true);
	    		detachDatePickerEvents();
	    	};
	
	    	picker.enable = function () {
	    		var input = getPickerInput();
	    		if (!input.prop('disabled')) {
	    			return;
	    		}
	    		input.prop('disabled', false);
	    		attachDatePickerEvents();
	    	};
	
	    	picker.hide = function () {
	    		// Ignore event if in the middle of a picker transition
	    		var collapse = picker.widget.find('.collapse'), i, collapseData;
	    		for (i = 0; i < collapse.length; i++) {
	    			collapseData = collapse.eq(i).data('collapse');
	    			if (collapseData && collapseData.transitioning) {
	    				return;
	    			}
	    		}
	    		picker.widget.hide();
	    		picker.widget.removeClass('picker-open');
	    		picker.viewMode = picker.startViewMode;
	    		showMode();
	    		picker.element.trigger({
	    			type: 'dp.hide',
	    			date: moment(picker.date)
	    		});
	    		detachDatePickerGlobalEvents();
	    	};
	
	    	picker.setValue = function (newDate) {
	    		moment.locale(picker.options.language);
	    		if (!newDate) {
	    			picker.unset = true;
	    			set();
	    		} else {
	    			picker.unset = false;
	    		}
	    		if (!moment.isMoment(newDate)) {
	    			newDate = (newDate instanceof Date) ? moment(newDate) : moment(newDate, picker.format, picker.options.useStrict);
	    		} else {
	    			newDate = newDate.locale(picker.options.language);
	    		}
	    		if (newDate.isValid()) {
	    			picker.date = newDate;
	    			set();
	    			picker.viewDate = moment({ y: picker.date.year(), M: picker.date.month() });
	    			fillDate();
	    			fillTime();
	    		}
	    		else {
	    			notifyError(newDate);
	    		}
	    	};
	
	    	picker.getDate = function () {
	    		if (picker.unset) {
	    			return null;
	    		}
	    		return moment(picker.date);
	    	};
	
	    	picker.setDate = function (date) {
	    		var oldDate = moment(picker.date);
	    		if (!date) {
	    			picker.setValue(null);
	    		} else {
	    			picker.setValue(date);
	    		}
	    		notifyChange(oldDate, 'function');
	    	};
	
	    	picker.setDisabledDates = function (dates) {
	    		picker.options.disabledDates = indexGivenDates(dates);
	    		if (picker.viewDate) {
	    			update();
	    		}
	    	};
	
	    	picker.setEnabledDates = function (dates) {
	    		picker.options.enabledDates = indexGivenDates(dates);
	    		if (picker.viewDate) {
	    			update();
	    		}
	    	};
	
	    	picker.setMaxDate = function (date) {
	    		if (date === undefined) {
	    			return;
	    		}
	    		if (moment.isMoment(date) || date instanceof Date) {
	    			picker.options.maxDate = moment(date);
	    		} else {
	    			picker.options.maxDate = moment(date, picker.format, picker.options.useStrict);
	    		}
	    		if (picker.viewDate) {
	    			update();
	    		}
	    	};
	
	    	picker.setMinDate = function (date) {
	    		if (date === undefined) {
	    			return;
	    		}
	    		if (moment.isMoment(date) || date instanceof Date) {
	    			picker.options.minDate = moment(date);
	    		} else {
	    			picker.options.minDate = moment(date, picker.format, picker.options.useStrict);
	    		}
	    		if (picker.viewDate) {
	    			update();
	    		}
	    	};
	
	    	init();
	    };
	
		$.fn.datetimepicker = function (options) {
			return this.each(function () {
				var $this = $(this),
	                data = $this.data('DateTimePicker');
				if (!data) {
					$this.data('DateTimePicker', new DateTimePicker(this, options));
				}
			});
		};
	
		$.fn.datetimepicker.defaults = {
			format: false,
			pickDate: true,
			pickTime: true,
			useMinutes: true,
			useSeconds: false,
			useCurrent: true,
			calendarWeeks: false,
			minuteStepping: 1,
			minDate: moment({ y: 1900 }),
			maxDate: moment().add(100, 'y'),
			showToday: true,
			collapse: false,
			language: moment.locale(),
			defaultDate: '',
			disabledDates: false,
			enabledDates: false,
			icons: {},
			useStrict: false,
			direction: 'auto',
			sideBySide: false,
			daysOfWeekDisabled: [],
			widgetParent: false,
			fillEmpty: false
		};
	}));


/***/ },
/* 86 */
/***/ function(module, exports) {

	(function() { module.exports = this["moment"]; }());

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __validation = typescript_angular_utilities_1.services.validation;
	exports.moduleName = 'rl.ui.services.componentValidator';
	exports.factoryName = 'componentValidator';
	var ComponentValidator = (function () {
	    function ComponentValidator(validationService, options) {
	        var _this = this;
	        this.$scope = options.$scope;
	        this.ngModel = options.ngModel;
	        this.form = options.form;
	        this.validator = validationService.buildCustomValidator(function (error) {
	            _this.error = error;
	        });
	        _.each(options.validators, function (customValidator) {
	            _this.validator.registerValidationHandler(customValidator);
	        });
	        if (options.alwaysValidate) {
	            this.setValidator();
	        }
	        else {
	            var unregisterValidator;
	            this.$scope.$watch(function () {
	                return _this.isDirty();
	            }, function (value) {
	                if (value) {
	                    unregisterValidator = _this.setValidator();
	                }
	                else {
	                    if (_.isFunction(unregisterValidator)) {
	                        unregisterValidator();
	                    }
	                }
	            });
	        }
	    }
	    ComponentValidator.prototype.isDirty = function () {
	        return (_.isUndefined(this.ngModel) && _.isUndefined(this.form))
	            || (this.ngModel != null && this.ngModel.$dirty)
	            || (this.form != null && this.form.$dirty);
	    };
	    ComponentValidator.prototype.setValidator = function () {
	        var _this = this;
	        return this.$scope.$watch(this.validator.validate.bind(this.validator), function (value) {
	            if (!_.isUndefined(_this.ngModel)) {
	                _this.ngModel.$setValidity('customValidation', value);
	            }
	            else if (!_.isUndefined(_this.form)) {
	                _this.form.$setValidity('customValidation', value, 'group');
	            }
	            else if (_.isFunction(_this.setValidity)) {
	                _this.setValidity(value);
	            }
	            if (value) {
	                _this.error = null;
	            }
	        });
	    };
	    return ComponentValidator;
	})();
	exports.ComponentValidator = ComponentValidator;
	componentValidatorFactory.$inject = [__validation.serviceName];
	function componentValidatorFactory(validationService) {
	    return {
	        getInstance: function (options) {
	            return new ComponentValidator(validationService, options);
	        },
	    };
	}
	exports.componentValidatorFactory = componentValidatorFactory;
	angular.module(exports.moduleName, [__validation.moduleName])
	    .factory(exports.factoryName, componentValidatorFactory);
	//# sourceMappingURL=componentValidator.service.js.map

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<div class=\"validation-input-group\">\r\n\t<div class=\"input-group validation-input\" ng-class=\"{ 'has-warning': !dateTime.validFormat, 'has-error': dateTime.ngModel.$invalid }\" id=\"{{dateTime.inputId}}\">\r\n\t\t<label class=\"pull-right error-string\">{{dateTime.dateTimeValidator.error}}</label>\r\n\t\t<input type=\"text\" class=\"form-control\" ng-model=\"dateTime.ngModel.$viewValue\" />\r\n\t\t<span class=\"input-group-btn\">\r\n\t\t\t<button class=\"btn btn-default show-date-picker\" ng-click=\"toggle()\"><i class=\"fa fa-calendar\"></i></button>\r\n\t\t</span>\r\n\t</div>\r\n\t<i class=\"fa fa-exclamation-triangle text-danger validation-icon\" ng-show=\"dateTime.ngModel.$error.required\"></i>\r\n</div>"

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var jquery_service_1 = __webpack_require__(90);
	var templateLoader_service_1 = __webpack_require__(91);
	exports.moduleName = 'rl.ui.components.genericContainer';
	exports.directiveName = 'rlGenericContainer';
	exports.controllerName = 'GenericContainerController';
	var __object = typescript_angular_utilities_1.services.object;
	var GenericContainerController = (function () {
	    function GenericContainerController($scope, object) {
	        var _this = this;
	        this.object = object;
	        $scope.$watch(function () { return _this.selector; }, function (newType, oldType) {
	            if (_this.object.areEqual(newType, oldType)) {
	                return;
	            }
	            var template = _this.resolveTemplate(newType);
	            _this.swapTemplates(template);
	        });
	    }
	    GenericContainerController.prototype.refresh = function () {
	        var template = this.resolveTemplate(this.selector);
	        this.swapTemplates(template);
	    };
	    GenericContainerController.prototype.resolveTemplate = function (type) {
	        var templateObject;
	        if (_.has(this.templates, type)) {
	            templateObject = this.templates[type];
	        }
	        else {
	            templateObject = this.default;
	        }
	        var template = templateObject;
	        if (!_.isUndefined(template.templateUrl)) {
	            return '<ng-include src="\'' + template.templateUrl + '\'"></ng-include>';
	        }
	        else if (!_.isUndefined(template.template)) {
	            return template.template;
	        }
	        else {
	            return templateObject;
	        }
	    };
	    GenericContainerController.$inject = ['$scope', __object.serviceName];
	    return GenericContainerController;
	})();
	exports.GenericContainerController = GenericContainerController;
	genericContainer.$inject = [
	    '$compile',
	    '$interpolate',
	    jquery_service_1.serviceName,
	    templateLoader_service_1.serviceName,
	    __object.serviceName,
	];
	function genericContainer($compile, $interpolate, jquery, templateLoader, object) {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: '<div id="container"></div>',
	        transclude: true,
	        controller: exports.controllerName,
	        controllerAs: 'genericContainer',
	        scope: {},
	        bindToController: {
	            selector: '=',
	            configuredTemplates: '=templates',
	            defaultTemplate: '=',
	        },
	        link: function (scope, element, attributes, controller, transclude) {
	            initDefaults(controller);
	            var container = element.find('#container');
	            var templateResult = templateLoader.loadTemplates(transclude);
	            controller.templates = templateResult.templates;
	            controller.default = templateResult.default;
	            var templateScope = templateResult.transclusionScope;
	            if (!controller.default) {
	                controller.default = {
	                    template: '<div></div>',
	                };
	            }
	            controller.refresh();
	            function initDefaults(controller) {
	                controller.default = controller.defaultTemplate;
	                controller.templates = controller.configuredTemplates ? controller.configuredTemplates : {};
	                controller.swapTemplates = swapTemplates;
	            }
	            function swapTemplates(template) {
	                var content = $compile(template)(templateScope);
	                jquery.replaceContent(container, content);
	            }
	        }
	    };
	}
	angular.module(exports.moduleName, [jquery_service_1.moduleName, __object.moduleName, templateLoader_service_1.moduleName])
	    .directive(exports.directiveName, genericContainer)
	    .controller(exports.controllerName, GenericContainerController);
	//# sourceMappingURL=genericContainer.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path="../../../typings/jquery/jquery.d.ts" />
	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.utilities.services.jquery';
	exports.serviceName = 'jqueryUtility';
	var JQueryUtility = (function () {
	    function JQueryUtility() {
	    }
	    JQueryUtility.prototype.replaceContent = function (contentArea, newContent) {
	        contentArea.empty();
	        contentArea.append(newContent);
	    };
	    return JQueryUtility;
	})();
	angular.module(exports.moduleName, [])
	    .service(exports.serviceName, JQueryUtility);
	//# sourceMappingURL=jquery.service.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	exports.moduleName = 'rl.utilities.services.templateLoader';
	exports.serviceName = 'templateLoader';
	var TemplateLoader = (function () {
	    function TemplateLoader($interpolate, templateSelectorValue, objectUtility) {
	        this.$interpolate = $interpolate;
	        this.templateSelectorValue = templateSelectorValue;
	        this.objectUtility = objectUtility;
	    }
	    TemplateLoader.prototype.loadTemplates = function (transclude) {
	        var _this = this;
	        var result = {
	            templates: {},
	            default: null,
	            transclusionScope: null,
	        };
	        // Load templates from the DOM
	        transclude(function (clone, transclusionScope) {
	            var templates = clone.filter(_this.templateSelectorValue);
	            templates.each(function (index, template) {
	                var templateElement = angular.element(template);
	                var templateHtml = templateElement.html();
	                var triggerAttribute = templateElement.attr('when-selector');
	                if (!_this.objectUtility.isNullOrWhitespace(triggerAttribute)) {
	                    var trigger = _this.$interpolate(triggerAttribute)(transclusionScope);
	                    result.templates[trigger] = templateHtml;
	                }
	                var isDefault = templateElement.attr('default');
	                if (!_.isUndefined(isDefault) && isDefault.toLowerCase() !== 'false') {
	                    result.default = templateHtml;
	                }
	            });
	            result.transclusionScope = transclusionScope;
	        });
	        return result;
	    };
	    TemplateLoader.$inject = ['$interpolate', 'templateSelectorValue', __object.serviceName];
	    return TemplateLoader;
	})();
	angular.module(exports.moduleName, [__object.moduleName])
	    .value('templateSelectorValue', 'template')
	    .service(exports.serviceName, TemplateLoader);
	//# sourceMappingURL=templateLoader.service.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	exports.moduleName = 'rl.ui.components.lazyLoad';
	exports.directiveName = 'rlLazyLoad';
	exports.controllerName = 'LazyLoadController';
	var LazyLoadController = (function () {
	    function LazyLoadController($scope) {
	        var _this = this;
	        this.init = false;
	        var unbind = $scope.$watch(function () { return _this.show; }, function (value) {
	            if (value) {
	                _this.init = true;
	                unbind();
	            }
	        });
	    }
	    LazyLoadController.$inject = ['$scope'];
	    return LazyLoadController;
	})();
	exports.LazyLoadController = LazyLoadController;
	function lazyLoad() {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: "\n\t\t\t<div ng-if=\"lazyLoad.init\">\n\t\t\t\t<div ng-show=\"lazyLoad.show\">\n\t\t\t\t\t<div ng-transclude></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'lazyLoad',
	        scope: {},
	        bindToController: {
	            show: '=',
	        },
	    };
	}
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, lazyLoad)
	    .controller(exports.controllerName, LazyLoadController);
	//# sourceMappingURL=lazyLoad.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(12);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __promise = typescript_angular_utilities_1.services.promise;
	exports.moduleName = 'rl.ui.components.longClickButton';
	exports.directiveName = 'rlLongClickButton';
	exports.controllerName = 'LongClickButtonController';
	var __object = typescript_angular_utilities_1.services.object;
	var LongClickButtonController = (function () {
	    function LongClickButtonController($scope, $interval, $timeout, objectUtility, promise) {
	        var _this = this;
	        this.$interval = $interval;
	        this.$timeout = $timeout;
	        this.objectUtility = objectUtility;
	        this.promise = promise;
	        this.interval = 25;
	        this.duration = 1500;
	        this.buttonText = this.text;
	        this.type = this.type != null ? this.type : 'default';
	        this.size = this.size != null ? 'btn-' + this.size : null;
	        $scope.$watch(function () { return _this.buttonText; }, function () {
	            $timeout(function () {
	                _this.width = $('#actionButton').outerWidth();
	            });
	        });
	    }
	    LongClickButtonController.prototype.startAction = function () {
	        var _this = this;
	        if (this.active || this.busy) {
	            return;
	        }
	        this.actionProgress = 0;
	        this.active = true;
	        this.actionInterval = this.$interval(function () {
	            _this.actionProgress += _this.interval;
	            if (_this.actionProgress >= _this.duration) {
	                _this.cleanup();
	                _this.buttonText = _this.text;
	                _this.trigger();
	            }
	        }, this.interval);
	    };
	    LongClickButtonController.prototype.stopAction = function () {
	        if (this.active) {
	            if (this.actionProgress < this.duration) {
	                this.warn();
	            }
	            this.cleanup();
	        }
	    };
	    LongClickButtonController.prototype.cleanup = function () {
	        this.$interval.cancel(this.actionInterval);
	        this.actionProgress = 0;
	        this.active = false;
	    };
	    LongClickButtonController.prototype.warn = function () {
	        if (this.objectUtility.isNullOrEmpty(this.onShortClickText) === false) {
	            this.buttonText = this.onShortClickText;
	        }
	    };
	    LongClickButtonController.prototype.trigger = function () {
	        var _this = this;
	        if (!this.busy) {
	            this.busy = true;
	            var result = this.action();
	            if (this.promise.isPromise(result) && _.isFunction(result.finally)) {
	                result.finally(function () {
	                    _this.busy = false;
	                });
	            }
	        }
	    };
	    LongClickButtonController.$inject = ['$scope', '$interval', '$timeout', __object.serviceName, __promise.serviceName];
	    return LongClickButtonController;
	})();
	exports.LongClickButtonController = LongClickButtonController;
	function longClickButton() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(94),
	        controller: exports.controllerName,
	        controllerAs: 'button',
	        scope: {},
	        bindToController: {
	            action: '&',
	            text: '@',
	            onShortClickText: '@',
	            icon: '@',
	            busy: '=',
	            rightAligned: '=',
	            type: '@',
	            ngDisabled: '=',
	        },
	    };
	}
	angular.module(exports.moduleName, [__object.moduleName])
	    .directive(exports.directiveName, longClickButton)
	    .controller(exports.controllerName, LongClickButtonController);
	//# sourceMappingURL=longClickButton.js.map

/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<div class=\"long-click-button\">\r\n\t<button id=\"actionButton\" class=\"btn btn-{{button.type}} {{button.size}}\" ng-mousedown=\"button.startAction()\" ng-mouseleave=\"button.stopAction()\" ng-mouseup=\"button.stopAction()\" ng-disabled=\"button.busy || button.ngDisabled\">\r\n\t\t<rl-busy loading=\"button.busy\" ng-if=\"button.rightAligned\"></rl-busy>\r\n\t\t<i ng-show=\"button.icon != null\" class=\"fa fa-{{button.icon}}\"></i> {{button.buttonText}}\r\n\t\t<rl-busy loading=\"button.busy\" ng-if=\"!button.rightAligned\"></rl-busy>\r\n\t</button>\r\n\t<rl-rating-bar ng-if=\"button.active\" width=\"button.width\" height=\"5\" min=\"0\" max=\"button.duration\"\r\n\t\t\t\tvalue=\"button.actionProgress\" background=\"transparent\"></rl-rating-bar>\r\n</div>"

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var jquery_service_1 = __webpack_require__(90);
	var messageLog_service_1 = __webpack_require__(96);
	var messageLog_directive_1 = __webpack_require__(97);
	var editableMessageLog_1 = __webpack_require__(99);
	var templateLoader_service_1 = __webpack_require__(91);
	__export(__webpack_require__(96));
	__export(__webpack_require__(97));
	exports.moduleName = 'rl.ui.components.messageLog';
	angular.module(exports.moduleName, [__object.moduleName, jquery_service_1.moduleName, templateLoader_service_1.moduleName])
	    .factory(messageLog_service_1.factoryName, messageLog_service_1.messageLogFactory)
	    .directive(messageLog_directive_1.directiveName, messageLog_directive_1.messageLog)
	    .controller(messageLog_directive_1.controllerName, messageLog_directive_1.MessageLogController)
	    .directive(editableMessageLog_1.directiveName, editableMessageLog_1.editableMessageLog)
	    .controller(editableMessageLog_1.controllerName, editableMessageLog_1.EditableMessageLogController);
	//# sourceMappingURL=messageLog.module.js.map

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';
	exports.factoryName = 'messageLog';
	exports.defaultPageSize = 10;
	var MessageLog = (function () {
	    function MessageLog() {
	        this.currentStartingMessage = 0;
	        this._hasForwardMessages = false;
	        this._hasBackwardMessages = false;
	        this._pageSize = exports.defaultPageSize;
	    }
	    Object.defineProperty(MessageLog.prototype, "pageSize", {
	        get: function () {
	            return this._pageSize;
	        },
	        /* tslint:disable */
	        set: function (value) {
	            this._pageSize = value;
	            this.updateCurrentPage();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MessageLog.prototype, "hasForwardMessages", {
	        /* tslint:enable */
	        get: function () {
	            return this._hasForwardMessages;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MessageLog.prototype, "hasBackwardMessages", {
	        get: function () {
	            return this._hasBackwardMessages;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MessageLog.prototype, "dataService", {
	        get: function () {
	            return this._dataService;
	        },
	        /* tslint:disable */
	        set: function (value) {
	            this._dataService = value;
	            if (value != null) {
	                this.visibleMessages = null;
	                this.updateCurrentPage();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /* tslint:enable */
	    MessageLog.prototype.addMessage = function (message) {
	        var _this = this;
	        return this.dataService.saveMessage(message).then(function () {
	            _this.getTopPage();
	        });
	    };
	    MessageLog.prototype.getNextPage = function () {
	        if (!this.hasForwardMessages) {
	            return;
	        }
	        this.currentStartingMessage += this.pageSize;
	        return this.updateCurrentPage();
	    };
	    MessageLog.prototype.getPreviousPage = function () {
	        if (!this.hasBackwardMessages) {
	            return;
	        }
	        this.currentStartingMessage -= this.pageSize;
	        if (this.currentStartingMessage < 0) {
	            this.currentStartingMessage = 0;
	        }
	        return this.updateCurrentPage();
	    };
	    MessageLog.prototype.getTopPage = function () {
	        this.currentStartingMessage = 0;
	        return this.updateCurrentPage();
	    };
	    MessageLog.prototype.refresh = function () {
	        return this.updateCurrentPage();
	    };
	    MessageLog.prototype.updateCurrentPage = function () {
	        var _this = this;
	        if (this.dataService == null) {
	            return null;
	        }
	        this.busy = true;
	        return this.dataService.getMessages(this.currentStartingMessage, this.pageSize).then(function (result) {
	            _this.visibleMessages = result.messages;
	            _this._hasForwardMessages = result.hasMoreMessages;
	            _this._hasBackwardMessages = (_this.currentStartingMessage > 0);
	            _this.busy = false;
	        });
	    };
	    return MessageLog;
	})();
	exports.MessageLog = MessageLog;
	function messageLogFactory() {
	    'use strict';
	    return {
	        getInstance: function () {
	            return new MessageLog();
	        },
	    };
	}
	exports.messageLogFactory = messageLogFactory;
	//# sourceMappingURL=messageLog.service.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var jquery_service_1 = __webpack_require__(90);
	var messageLog_service_1 = __webpack_require__(96);
	var templateLoader_service_1 = __webpack_require__(91);
	exports.directiveName = 'rlMessageLog';
	exports.controllerName = 'MessageLogController';
	var MessageLogController = (function () {
	    function MessageLogController($scope, messageLogFactory) {
	        var _this = this;
	        this.messageLog = this.messageLogBinding || messageLogFactory.getInstance();
	        $scope.$watch(function () { return _this.messageLog.visibleMessages; }, function (value) {
	            _this.messages = value;
	        });
	        $scope.$watch(function () { return _this.messageLog.hasForwardMessages; }, function (value) {
	            _this.hasNextPage = value;
	        });
	        $scope.$watch(function () { return _this.messageLog.hasBackwardMessages; }, function (value) {
	            _this.hasPreviousPage = value;
	        });
	        $scope.$watch(function () { return _this.messageLog.busy; }, function (value) {
	            if (!value) {
	                _this.loading = false;
	                _this.loadingInitial = false;
	            }
	            else {
	                _this.loading = true;
	            }
	        });
	        $scope.$watch(function () { return _this.service; }, function (service) {
	            _this.messageLog.dataService = service;
	            _this.loadingInitial = true;
	        });
	        this.messageLog.pageSize = this.pageSize != null ? this.pageSize : 8;
	    }
	    MessageLogController.prototype.getEntrySelector = function (entry) {
	        if (_.isString(this.selector)) {
	            return entry[this.selector];
	        }
	        else if (_.isFunction(this.selector)) {
	            return this.selector(entry);
	        }
	    };
	    MessageLogController.prototype.getOlder = function () {
	        return this.messageLog.getNextPage();
	    };
	    MessageLogController.prototype.getTop = function () {
	        return this.messageLog.getTopPage();
	    };
	    MessageLogController.$inject = ['$scope', messageLog_service_1.factoryName];
	    return MessageLogController;
	})();
	exports.MessageLogController = MessageLogController;
	messageLog.$inject = [
	    '$interpolate',
	    jquery_service_1.serviceName,
	    templateLoader_service_1.serviceName,
	    __object.serviceName,
	];
	function messageLog($interpolate, jquery, templateLoader, object) {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(98),
	        transclude: true,
	        controller: exports.controllerName,
	        controllerAs: 'log',
	        scope: {},
	        bindToController: {
	            service: '=',
	            selector: '=',
	            pageSize: '=',
	            messageLogBinding: '=messageLog',
	            messageAs: "@",
	        },
	        link: function (scope, element, attributes, controller, transclude) {
	            controller.templates = templateLoader.loadTemplates(transclude).templates;
	        }
	    };
	}
	exports.messageLog = messageLog;
	//# sourceMappingURL=messageLog.directive.js.map

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n\t<rl-busy loading=\"log.loadingInitial\" size=\"2x\"></rl-busy>\r\n\t<div class=\"content-group\" ng-repeat=\"entry in log.messages\" rl-alias=\"entry as {{log.messageAs}}\">\r\n\t\t<rl-generic-container selector=\"log.getEntrySelector(entry)\" templates=\"log.templates\">\r\n\t\t\t<template default>\r\n\t\t\t\t<div ng-bind-html=\"entry.message\"></div>\r\n\t\t\t\t<div class=\"byline\">{{entry.createdBy}}</div>\r\n\t\t\t\t<div class=\"byline\">{{entry.createdDate}} {{entry.createdTime}} UTC</div>\r\n\t\t\t</template>\r\n\t\t</rl-generic-container>\r\n\t</div>\r\n\t<div class=\"content-group\" ng-if=\"(log.messages | isEmpty) && !log.loadingInitial\">No existing messages</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"text-center\">\r\n\t\t\t\t<rl-button-async type=\"default\" action=\"log.getTop()\" ng-disabled=\"log.loading\" button-right-aligned=\"true\">\r\n\t\t\t\t\t<span ng-show=\"log.hasPreviousPage\">Top</span>\r\n\t\t\t\t\t<span ng-hide=\"log.hasPreviousPage\">Refresh</span>\r\n\t\t\t\t</rl-button-async>\r\n\t\t\t\t<rl-button-async type=\"default\" ng-disabled=\"log.hasNextPage == false || log.loading\" action=\"log.getOlder()\">\r\n\t\t\t\t\tOlder <i class=\"fa fa-chevron-right\"></i>\r\n\t\t\t\t</rl-button-async>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var messageLog_service_1 = __webpack_require__(96);
	exports.directiveName = 'rlEditableMessageLog';
	exports.controllerName = 'EditableMessageLogController';
	var __object = typescript_angular_utilities_1.services.object;
	;
	var EditableMessageLogController = (function () {
	    function EditableMessageLogController($scope, messageLogFactory, object) {
	        var _this = this;
	        this.object = object;
	        this.messageLogService = messageLogFactory.getInstance();
	        $scope.$watch(function () { return _this.messageLogService.busy; }, function (value) {
	            if (value === false) {
	                _this.busy = false;
	                _this.savingMessage = false;
	            }
	            else {
	                _this.busy = true;
	            }
	        });
	    }
	    EditableMessageLogController.prototype.add = function () {
	        if (this.object.isNullOrWhitespace(this.newMessage)) {
	            return null;
	        }
	        this.savingMessage = true;
	        var message = this.newMessage;
	        this.newMessage = '';
	        return this.messageLogService.addMessage(message);
	    };
	    EditableMessageLogController.$inject = ['$scope', messageLog_service_1.factoryName, __object.serviceName];
	    return EditableMessageLogController;
	})();
	exports.EditableMessageLogController = EditableMessageLogController;
	function editableMessageLog() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<form ng-submit=\"log.add()\">\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" ng-model=\"log.newMessage\" placeholder=\"Enter log message\" />\n\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t<button class=\"btn btn-default\" type=\"submit\" ng-disabled=\"log.busy\">\n\t\t\t\t\t\t\t<rl-busy loading=\"log.savingMessage\"></rl-busy> Add\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"shallow well\">\n\t\t\t\t\t<rl-message-log service=\"log.service\" page-size=\"log.pageSize\" message-log=\"log.messageLogService\"></rl-message-log>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'log',
	        scope: {},
	        bindToController: {
	            service: '=',
	            pageSize: '=',
	        },
	    };
	}
	exports.editableMessageLog = editableMessageLog;
	//# sourceMappingURL=editableMessageLog.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	exports.moduleName = 'rl.ui.components.multiStepIndicator';
	exports.directiveName = 'rlMultiStepIndicator';
	exports.controllerName = 'MultiStepIndicatorController';
	var __object = typescript_angular_utilities_1.services.object;
	var MultiStepIndicatorController = (function () {
	    function MultiStepIndicatorController($state, $q, object) {
	        this.$state = $state;
	        this.$q = $q;
	        this.object = object;
	        this.configureSteps();
	    }
	    MultiStepIndicatorController.prototype.onClick = function (step) {
	        if (!this.anyLoading()) {
	            step.loading = true;
	            this.$q.when(step.onClick()).then(function () {
	                step.loading = false;
	            });
	        }
	    };
	    MultiStepIndicatorController.prototype.anyLoading = function () {
	        return _.any(this.steps, function (step) {
	            return step.loading;
	        });
	    };
	    MultiStepIndicatorController.prototype.configureSteps = function () {
	        var _this = this;
	        _.each(this.steps, function (step) {
	            step.hasCount = _.isFunction(step.count);
	            step.getCompleted = function () { return _this.getIsCompleted(step); };
	            step.getValid = function () { return _this.getIsValid(step); };
	            if (!_.isFunction(step.onClick)) {
	                if (_this.object.isNullOrWhitespace(step.stateName)) {
	                    step.inactive = true;
	                }
	                else {
	                    step.onClick = function () { return _this.redirectToState(step); };
	                    if (_this.$state.includes(step.stateName)) {
	                        step.isCurrent = true;
	                    }
	                }
	            }
	        });
	    };
	    MultiStepIndicatorController.prototype.redirectToState = function (step) {
	        var _this = this;
	        return this.$state.go(step.stateName).then(function () {
	            _this.clearCurrentState();
	            step.isCurrent = true;
	        });
	    };
	    MultiStepIndicatorController.prototype.clearCurrentState = function () {
	        _.each(this.steps, function (step) {
	            step.isCurrent = false;
	        });
	    };
	    MultiStepIndicatorController.prototype.getIsCompleted = function (step) {
	        return _.isFunction(step.isCompleted)
	            ? step.isCompleted()
	            : step.isCompleted;
	    };
	    MultiStepIndicatorController.prototype.setIsCompleted = function (step, isCompleted) {
	        if (!_.isFunction(step.isCompleted)) {
	            step.isCompleted = isCompleted;
	        }
	    };
	    MultiStepIndicatorController.prototype.getIsValid = function (step) {
	        if (_.isFunction(step.isValid)) {
	            return step.isValid();
	        }
	        else if (!_.isUndefined(step.isValid != null)) {
	            return step.isValid;
	        }
	        else {
	            return true;
	        }
	    };
	    MultiStepIndicatorController.$inject = ['$state', '$q', __object.serviceName];
	    return MultiStepIndicatorController;
	})();
	exports.MultiStepIndicatorController = MultiStepIndicatorController;
	function multiStepIndicator() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(101),
	        controller: exports.controllerName,
	        controllerAs: 'breadcrumb',
	        scope: {},
	        bindToController: {
	            steps: '=',
	            numbered: '=',
	        },
	    };
	}
	angular.module(exports.moduleName, [__object.moduleName])
	    .directive(exports.directiveName, multiStepIndicator)
	    .controller(exports.controllerName, MultiStepIndicatorController);
	//# sourceMappingURL=multiStepIndicator.js.map

/***/ },
/* 101 */
/***/ function(module, exports) {

	module.exports = "<div class=\"multi-step checked\" ng-class=\"{ 'numbered': breadcrumb.numbered }\">\r\n\t<ol>\r\n\t\t<li ng-repeat=\"step in breadcrumb.steps\" ng-click=\"breadcrumb.onClick(step)\"\r\n\t\t\tng-class=\"{ 'completed': step.getCompleted(), 'current': step.isCurrent, 'active': !step.inactive && !breadcrumb.anyLoading() }\">\r\n\t\t\t<div class=\"wrap\">\r\n\t\t\t\t<p class=\"badge\" ng-show=\"step.hasCount\">{{step.count()}}</p>\r\n\t\t\t\t<p class=\"error\" ng-hide=\"step.getValid()\"><i class=\"fa fa-exclamation-triangle text-danger validation-icon\"></i></p>\r\n\t\t\t\t<p class=\"title\">{{step.title}} <rl-busy loading=\"step.loading\"></rl-busy></p>\r\n\t\t\t\t<p class=\"subtitle\">{{step.subtitle}}</p>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ol>\r\n</div>"

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var radioGroup_1 = __webpack_require__(103);
	exports.radioGroupDirectiveName = radioGroup_1.directiveName;
	exports.radioGroup = radioGroup_1.radioGroup;
	exports.radioGroupControllerName = radioGroup_1.controllerName;
	exports.RadioGroupController = radioGroup_1.RadioGroupController;
	var radio_1 = __webpack_require__(104);
	exports.radioDirectiveName = radio_1.directiveName;
	exports.radio = radio_1.radio;
	exports.radioControllerName = radio_1.controllerName;
	exports.RadioController = radio_1.RadioController;
	exports.moduleName = 'rl21.components.radio';
	angular.module(exports.moduleName, [__object.moduleName])
	    .directive(radioGroup_1.directiveName, radioGroup_1.radioGroup)
	    .controller(radioGroup_1.controllerName, radioGroup_1.RadioGroupController)
	    .directive(radio_1.directiveName, radio_1.radio)
	    .controller(radio_1.controllerName, radio_1.RadioController);
	//# sourceMappingURL=radio.module.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	exports.directiveName = 'rlRadioGroup';
	exports.controllerName = 'RadioGroupController';
	var RadioGroup = (function () {
	    function RadioGroup($scope, ngModel, name) {
	        var _this = this;
	        this.name = name;
	        $scope.$watch(function () { return ngModel.$viewValue; }, function (value) {
	            _this.selection = value;
	        });
	        $scope.$watch(function () { return _this.selection; }, function (value) {
	            ngModel.$setViewValue(value);
	        });
	    }
	    return RadioGroup;
	})();
	exports.RadioGroup = RadioGroup;
	var RadioGroupController = (function () {
	    function RadioGroupController($scope, $attrs, $element, object) {
	        var name;
	        if (!object.isNullOrWhitespace($attrs.rlRadioGroup)) {
	            name = $attrs.rlRadioGroup;
	        }
	        else if (!object.isNullOrWhitespace($attrs.name)) {
	            name = $attrs.name;
	        }
	        else {
	            name = 'RadioGroup' + this.getNextId();
	        }
	        var ngModel = $element.controller('ngModel');
	        this.group = new RadioGroup($scope, ngModel, name);
	    }
	    RadioGroupController.prototype.registerButton = function () {
	        return this.group;
	    };
	    RadioGroupController.prototype.getNextId = function () {
	        var nextId = RadioGroupController.nextId.toString();
	        RadioGroupController.nextId++;
	        return nextId;
	    };
	    RadioGroupController.nextId = 1;
	    RadioGroupController.$inject = ['$scope', '$attrs', '$element', __object.serviceName];
	    return RadioGroupController;
	})();
	exports.RadioGroupController = RadioGroupController;
	function radioGroup() {
	    'use strict';
	    return {
	        restrict: 'AE',
	        require: 'ngModel',
	        controller: exports.controllerName,
	    };
	}
	exports.radioGroup = radioGroup;
	//# sourceMappingURL=radioGroup.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var radioGroup_1 = __webpack_require__(103);
	exports.directiveName = 'rlRadio';
	exports.controllerName = 'RadioController';
	var RadioController = (function () {
	    function RadioController($scope, $element) {
	        var radioGroupController = $element.controller('rlRadioGroup');
	        if (radioGroupController != null) {
	            this.radioGroup = radioGroupController.registerButton();
	        }
	        else {
	            var ngModel = $element.controller('ngModel');
	            this.radioGroup = new radioGroup_1.RadioGroup($scope, ngModel);
	        }
	    }
	    RadioController.$inject = ['$scope', '$element'];
	    return RadioController;
	})();
	exports.RadioController = RadioController;
	function radio() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: ['?^^rlRadioGroup', '?ngModel'],
	        transclude: true,
	        template: "\n\t\t\t<label>\n\t\t\t\t<input id=\"radio\" type=\"radio\" name=\"{{radio.radioGroup.name}}\" ng-model=\"radio.radioGroup.selection\" ng-value=\"radio.value\" />\n\t\t\t\t<span ng-transclude></div>\n\t\t\t</label>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'radio',
	        scope: true,
	        bindToController: {
	            value: '=',
	        },
	    };
	}
	exports.radio = radio;
	//# sourceMappingURL=radio.js.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var ratingBarBackgrounds_service_1 = __webpack_require__(106);
	var ratingBarClass_service_1 = __webpack_require__(107);
	exports.moduleName = 'rl.ui.components.ratingBar';
	exports.directiveName = 'rlRatingBar';
	exports.controllerName = 'RatingBarController';
	var RatingBarController = (function () {
	    function RatingBarController($scope) {
	        var _this = this;
	        this.$scope = $scope;
	        var ratingBarBackgrounds = new ratingBarBackgrounds_service_1.RatingBarBackgroundService;
	        this.ratingBarClass = new ratingBarClass_service_1.RatingBarClassService;
	        this.backgroundClass = ratingBarBackgrounds.getBackground(this.background);
	        if (this.value == null) {
	            this.value = 0;
	        }
	        $scope.$watch(function () { return _this.value; }, function (newValue) {
	            _this.updateValue(newValue);
	        });
	        $scope.$watch(function () { return _this.totalWidth; }, function (newWidth) {
	            _this.dimensions = {
	                width: newWidth + 2,
	                height: _this.height + 2,
	            };
	            _this.updateValue(_this.value);
	        });
	    }
	    RatingBarController.prototype.updateValue = function (newValue) {
	        var confidenceScore = (newValue - this.min) / (this.max - this.min);
	        this.barClass = this.ratingBarClass.getClass(confidenceScore);
	        this.width = Math.round(confidenceScore * this.totalWidth);
	    };
	    RatingBarController.$inject = ['$scope'];
	    return RatingBarController;
	})();
	exports.RatingBarController = RatingBarController;
	function ratingBar() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<div class=\"rating-bar\">\n\t\t\t\t<div class=\"{{ratingBar.backgroundClass}}\" ng-class=\"{ empty: ratingBar.value == min }\" ng-style=\"ratingBar.dimensions\">\n\t\t\t\t\t<div ng-class=\"ratingBar.barClass\" ng-style=\"{ width: ratingBar.width, height: ratingBar.height }\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'ratingBar',
	        scope: {},
	        bindToController: {
	            totalWidth: '=width',
	            height: '=',
	            value: '=',
	            min: '=',
	            max: '=',
	            background: '=',
	        },
	    };
	}
	exports.ratingBar = ratingBar;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, ratingBar)
	    .controller(exports.controllerName, RatingBarController);
	//# sourceMappingURL=ratingBar.js.map

/***/ },
/* 106 */
/***/ function(module, exports) {

	'use strict';
	var RatingBarBackgroundService = (function () {
	    function RatingBarBackgroundService() {
	        this.standard = {
	            type: 'standard',
	            class: 'background',
	        };
	        this.dark = {
	            type: 'dark',
	            class: 'background-dark',
	        };
	        this.transparent = {
	            type: 'transparent',
	            class: 'background-transparent',
	        };
	    }
	    RatingBarBackgroundService.prototype.getBackground = function (type) {
	        if (type === this.dark.type) {
	            return this.dark.class;
	        }
	        else if (type === this.transparent.type) {
	            return this.transparent.class;
	        }
	        else {
	            return this.standard.class;
	        }
	    };
	    return RatingBarBackgroundService;
	})();
	exports.RatingBarBackgroundService = RatingBarBackgroundService;
	//# sourceMappingURL=ratingBarBackgrounds.service.js.map

/***/ },
/* 107 */
/***/ function(module, exports) {

	'use strict';
	var RatingBarClassService = (function () {
	    function RatingBarClassService() {
	    }
	    RatingBarClassService.prototype.getClass = function (confidence) {
	        if (confidence >= 0.8) {
	            return 'very-high';
	        }
	        else if (confidence >= 0.6) {
	            return 'high';
	        }
	        else if (confidence >= 0.4) {
	            return 'medium';
	        }
	        else if (confidence >= 0.2) {
	            return 'low';
	        }
	        else {
	            return 'very-low';
	        }
	    };
	    return RatingBarClassService;
	})();
	exports.RatingBarClassService = RatingBarClassService;
	//# sourceMappingURL=ratingBarClass.service.js.map

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	__webpack_require__(109);
	__webpack_require__(111);
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	var richTextEditor_config_1 = __webpack_require__(112);
	var headerButton_1 = __webpack_require__(113);
	var paragraphButton_1 = __webpack_require__(114);
	var externalProviderName = richTextEditor_config_1.providerName + 'Provider';
	exports.providerName = externalProviderName;
	exports.moduleName = 'rl.ui.components.richTextEditor';
	exports.directiveName = 'rlRichTextEditor';
	exports.controllerName = 'RichTextEditorController';
	var RichTextEditorController = (function () {
	    function RichTextEditorController(object, provider) {
	        this.toolbar = 'h1, paragraph, bold, italic, underline, list1, list2, indent, outdent';
	        if (!object.isNullOrEmpty(this.customButtons)) {
	            this.toolbar += ', ' + this.customButtons;
	        }
	    }
	    RichTextEditorController.$inject = [__object.serviceName, richTextEditor_config_1.providerName];
	    return RichTextEditorController;
	})();
	exports.RichTextEditorController = RichTextEditorController;
	function richTextEditor() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(115),
	        controller: exports.controllerName,
	        controllerAs: 'editor',
	        scope: {},
	        bindToController: {
	            ngModel: '=',
	            customButtons: '=',
	        },
	    };
	}
	exports.richTextEditor = richTextEditor;
	angular.module(exports.moduleName, ['ngWig', __object.moduleName])
	    .directive(exports.directiveName, richTextEditor)
	    .controller(exports.controllerName, RichTextEditorController)
	    .directive(headerButton_1.headerButtonDirectiveName, headerButton_1.headerButton)
	    .directive(paragraphButton_1.paragraphButtonDirectiveName, paragraphButton_1.paragraphButton)
	    .provider(richTextEditor_config_1.providerName, richTextEditor_config_1.richTextEditorProvider);
	//# sourceMappingURL=richTextEditor.js.map

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(110);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./ng-wig.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./ng-wig.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	exports.push([module.id, "@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);", ""]);
	
	// module
	exports.push([module.id, "/* -------- NG-WIG -------- */\n/**\n *\n *  RESET BOX MODEL\n *\n */\n.ng-wig,\n[class^=\"nw-\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n\n/**\n *   main wrapper for the editor\n *\n *  .ng-wig\n *\n */\n.ng-wig {\n  display: block;\n  padding: 0;\n  margin: 0;\n}\n\n\n/**\n *  styling for toolbar and its items\n *\n *  .nw-toolbar\n *    &__item\n *\n */\n.nw-toolbar {\n  display: block;\n  margin: 0 !important;\n  padding: 0 !important;\n  list-style: none !important;\n  font-size: 12px;\n  color: #6B7277;\n\n  background: -webkit-linear-gradient(90deg, #ffffff 0%, #f9f9f9 100%);\n  background:    -moz-linear-gradient(90deg, #ffffff 0%, #f9f9f9 100%);\n  background:         linear-gradient(180deg, #ffffff 0%, #f9f9f9 100%);\n  border: 1px solid #CCCCCC;\n  border-radius: 3px 3px 0 0;\n}\n\n.nw-toolbar__item {\n  display: inline-block;\n  vertical-align: top;\n\n  border-right: 1px solid #DEDEDE;\n}\n\n.nw-toolbar label {\n  line-height: 30px;\n  display: inline-block;\n  padding: 0 6px 0 3px;\n}\n\n.nw-toolbar input[type=checkbox] {\n  vertical-align: -3px;\n  margin-right: -1px;\n}\n\n/**\n *  styling for the editor part: source code (original textarea) and resulting div\n *\n *  .nw-editor\n *    &__src\n *    &__res\n *\n */\n.nw-editor {\n  display: block;\n  position: relative;\n  overflow-y: auto;\n  padding: 0 8px;\n  /* Default when height is not set */\n  min-height: 300px;\n  background: #fff;\n  cursor: text;\n}\n\n.nw-invisible {\n  display: none;\n}\n\n.nw-editor-container {\n  border: 1px solid #CCCCCC;\n  border-top: none;\n  border-radius: 0 0 3px 3px;\n}\n\n.nw-editor__res {\n  min-height: 100%;\n  margin: -1px 0;\n  padding: 1px 0;\n}\n\n.nw-editor__src,\n.nw-editor__res {\n  width: 100%;\n  outline: none;\n  box-sizing: border-box;\n  border: none;\n}\n\n.nw-editor__src {\n  resize: none;\n  display: block;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 8px;\n}\n\n\n/**\n *  styling for toolbar button, has two modifiers: active and type of icon for background\n *\n *  .nw-button\n *    &--active\n *    &--{button type}\n *\n */\n.nw-button {\n  -webkit-appearance: none;\n  -moz-appearance:    none;\n  appearance:         none;\n\n  display: block;\n  width: 30px;\n  height: 30px;\n  margin: 0;\n  padding: 0;\n  opacity: 0.5;\n\n  background-color: transparent;\n  background-position: center center;\n  background-repeat: no-repeat;\n  border: none;\n  border-radius: 2px;\n\n  cursor: pointer;\n}\n\n.nw-button:focus {\n  outline: none;\n}\n\n.nw-button:hover,\n.nw-button.nw-button--active {\n  opacity: 1\n}\n\n.nw-button--active {\n  background-color: #EEEEEE;\n}\n\n/**\n *  styling & formatting of content inside contenteditable div\n *\n *  .nw-content\n *\n */\n.nw-content {\n  padding: 12px;\n  margin: 0;\n\n  font-family: sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n}\n\n.nw-select {\n  height: 30px;\n  padding: 6px;\n  color: #555;\n  background-color: inherit;\n  border: 0;\n}\n\n.nw-select:focus { outline: none; }\n\n", ""]);
	
	// exports


/***/ },
/* 111 */
/***/ function(module, exports) {

	/**
	 * version: 2.2.0
	 */
	angular.module('ngWig', ['ngwig-app-templates']);
	
	angular.module('ngWig')
	  .directive('ngWig', ["$window", "$document", "ngWigToolbar", function ($window, $document, ngWigToolbar) {
	
	    return {
	      scope: {
	        content: '=ngWig',
	        onPaste: '='
	      },
	      restrict: 'A',
	      replace: true,
	      templateUrl: 'ng-wig/views/ng-wig.html',
	      link: function (scope, element, attrs) {
	
	        scope.editMode = false;
	        scope.autoexpand = !('autoexpand' in attrs) || attrs['autoexpand'] !== 'off';
	        scope.toolbarButtons = ngWigToolbar.getToolbarButtons(attrs.buttons && string2array(attrs.buttons));
	
	        function string2array(keysString){
	          return keysString.split(',').map(Function.prototype.call, String.prototype.trim);
	        }
	
	        scope.toggleEditMode = function () {
	          scope.editMode = !scope.editMode;
	
	          if ($window.getSelection().removeAllRanges) {
	            $window.getSelection().removeAllRanges();
	          }
	        };
	
	        scope.execCommand = function (command, options) {
	          if(scope.editMode ) return false;
	
	          if (command === 'createlink') {
	            options = prompt('Please enter the URL', 'http://');
	            if(!options) {
	              return;
	            }
	          }
	          scope.$broadcast('execCommand', {command: command, options: options});
	        };
	      }
	    }
	  }]
	);
	
	
	angular.module('ngWig')
	  .directive('ngWigEditable', ["$document", function ($document) {
	    function init(scope, $element, attrs, ngModelController) {
	
	      $element.attr('contenteditable', true);
	
	      //model --> view
	      ngModelController.$render = function () {
	        $element.html(ngModelController.$viewValue || '');
	      };
	
	      //view --> model
	      function viewToModel() {
	        ngModelController.$setViewValue($element.html());
	      }
	
	      var eventsToBind = [
	        'blur',
	        'keyup',
	        'change',
	        'focus',
	        'click'
	      ];
	
	      if (angular.isFunction(scope.onPaste)) {
	        $element.on('paste', function(e) {
	          scope.onPaste(e, $element.html()).then(function(val) {
	            $element.html(val);
	          })
	        });
	      }else{
	        eventsToBind.push('paste');
	      }
	
	      $element.bind(eventsToBind.join(' '), function() {
	        viewToModel();
	        scope.$applyAsync();
	      });
	
	      scope.isEditorActive = function () {
	        return $element[0] === $document[0].activeElement;
	      };
	
	      scope.$on('execCommand', function (event, params) {
	        $element[0].focus();
	
	        var ieStyleTextSelection = $document[0].selection,
	          command = params.command,
	          options = params.options;
	
	        if (ieStyleTextSelection) {
	          var textRange = ieStyleTextSelection.createRange();
	        }
	
	        if ($document[0].queryCommandSupported && !$document[0].queryCommandSupported(command)) {
	          throw 'The command "' + command + '" is not supported';
	        }
	
	        $document[0].execCommand(command, false, options);
	
	        if (ieStyleTextSelection) {
	          textRange.collapse(false);
	          textRange.select();
	        }
	
	        viewToModel();
	      });
	    }
	
	    return {
	      restrict: 'A',
	      require: 'ngModel',
	      replace: true,
	      link: init
	    }
	  }]
	);
	
	angular.module('ngWig')
	    .directive('ngWigPlugin', ["$compile", function ($compile) {
	        return {
	            restrict: 'E',
	            link: function(scope, element) {
	                var template = '<' + scope.button.pluginName + ' />',
	                    compiled = $compile(template)(scope);
	
	                element.replaceWith(compiled);
	            }
	        }
	    }]);
	
	angular.module('ngWig').provider('ngWigToolbar', function () {
	
	  var buttonLibrary = {
	    list1: {title: 'Unordered List', command: 'insertunorderedlist', styleClass: 'fa-list-ul'},
	    list2: {title: 'Ordered List', command: 'insertorderedlist', styleClass: 'fa-list-ol'},
	    bold: {title: 'Bold', command: 'bold', styleClass: 'fa-bold'},
	    italic: {title: 'Italic', command: 'italic', styleClass: 'fa-italic'},
	    link: {title: 'Link', command: 'createlink', styleClass: 'fa-link'}
	  };
	
	  var defaultButtonsList = ['list1', 'list2', 'bold', 'italic', 'link'];
	
	  var isButtonActive = function () {
	    return this.command && document.queryCommandState(this.command);
	  };
	
	  this.setButtons = function(buttons) {
	    if(!angular.isArray(buttons)) {
	      throw 'Argument "buttons" should be an array';
	    }
	
	    defaultButtonsList = buttons;
	  };
	
	  this.addStandardButton = function (name, title, command, styleClass) {
	    if(!name || !title || !command) {
	      throw 'Arguments "name", "title" and "command" are required';
	    }
	
	    styleClass = styleClass || '';
	    buttonLibrary[name] = {title: title, command: command, styleClass: styleClass}
	    defaultButtonsList.push(name);
	  };
	
	  this.addCustomButton = function (name, pluginName) {
	    if(!name || !pluginName) {
	      throw 'Arguments "name" and "pluginName" are required';
	    }
	
	    buttonLibrary[name] = {pluginName: pluginName, isComplex: true};
	    defaultButtonsList.push(name);
	  };
	
	  this.$get = function () {
	    return {
	      getToolbarButtons: function(list) {
	        var toolbarButtons = [];
	        (list || defaultButtonsList).forEach(function(buttonKey) {
	          if(!buttonLibrary[buttonKey]) {
	            throw 'There is no "' + buttonKey + '" in your library. Possible variants: ' + Object.keys(buttonLibrary);
	          }
	
	          var button = angular.copy(buttonLibrary[buttonKey]);
	
	          if(!angular.isFunction(button.isActive)) {
	            button.isActive = isButtonActive;
	          }
	
	          toolbarButtons.push(button);
	        });
	        return toolbarButtons;
	      }
	    };
	  };
	
	
	});
	angular.module('ngWig')
	    .config(['ngWigToolbarProvider', function (ngWigToolbarProvider) {
	       ngWigToolbarProvider.addCustomButton('formats', 'nw-formats-button');
	    }])
	    .directive('nwFormatsButton', function() {
	        return {
	            restrict: 'E',
	            replace: true,
	            template: '<select class="nw-select" ng-model="format" ng-change="execCommand(\'formatblock\', format.value)" ng-options="format.name for format in formats" ng-disabled="editMode"></select>',
	            link: function (scope) {
	                scope.formats = [
	                    {name: 'Normal text', value: 'p'},
	                    {name: 'Header 1', value: 'h1'},
	                    {name: 'Header 2', value: 'h2'},
	                    {name: 'Header 3', value: 'h3'}
	                ];
	
	                scope.format = scope.formats[0];
	            }
	        };
	    });
	
	
	angular.module('ngwig-app-templates', ['ng-wig/views/ng-wig.html']);
	
	angular.module("ng-wig/views/ng-wig.html", []).run(["$templateCache", function($templateCache) {
	  $templateCache.put("ng-wig/views/ng-wig.html",
	    "<div class=\"ng-wig\">\n" +
	    "  <ul class=\"nw-toolbar\">\n" +
	    "    <li class=\"nw-toolbar__item\" ng-repeat=\"button in toolbarButtons\" >\n" +
	    "        <div ng-if=\"!button.isComplex\">\n" +
	    "          <button type=\"button\" class=\"nw-button\" title=\"{{button.title}}\" ng-click=\"execCommand(button.command)\" ng-class=\"{ 'nw-button--active': isEditorActive() && button.isActive() }\" ng-disabled=\"editMode\">\n" +
	    "            <i class=\"fa {{button.styleClass}}\"></i>\n" +
	    "          </button>\n" +
	    "        </div>\n" +
	    "        <div ng-if=\"button.isComplex\">\n" +
	    "          <ng-wig-plugin plugin=\"{{button}}\"></ng-wig-plugin>\n" +
	    "        </div>\n" +
	    "    </li><!--\n" +
	    "    --><li class=\"nw-toolbar__item\">\n" +
	    "      <button type=\"button\" class=\"nw-button nw-button--source\" ng-class=\"{ 'nw-button--active': editMode }\" ng-click=\"toggleEditMode()\"><i class=\"fa fa-pencil\"></i></button>\n" +
	    "    </li>\n" +
	    "  </ul>\n" +
	    "\n" +
	    "  <div class=\"nw-editor-container\">\n" +
	    "    <div class=\"nw-editor\">\n" +
	    "      <textarea  class=\"nw-editor__src\" ng-show=\"editMode\" ng-model=\"content\"></textarea>\n" +
	    "      <div tabindex=\"-1\" ng-class=\"{'nw-invisible': editMode, 'nw-autoexpand': autoexpand}\" class=\"nw-editor__res\" ng-model=\"content\" ng-wig-editable on-paste=\"onPaste\"></div>\n" +
	    "    </div>\n" +
	    "  </div>\n" +
	    "</div>\n" +
	    "");
	}]);


/***/ },
/* 112 */
/***/ function(module, exports) {

	'use strict';
	exports.providerName = 'richTextEditor';
	richTextEditorProvider.$inject = ['ngWigToolbarProvider'];
	function richTextEditorProvider(ngWigToolbarProvider) {
	    'use strict';
	    return {
	        addCustomButton: function (name, component) {
	            ngWigToolbarProvider.addCustomButton(name, component);
	        },
	        addStandardButton: function (name, tooltip, command, icon) {
	            ngWigToolbarProvider.addStandardButton(name, toolbar, command, 'fa-' + icon);
	        },
	        $get: function () {
	            ngWigToolbarProvider.addCustomButton('paragraph', 'rl-paragraph-button');
	            ngWigToolbarProvider.addCustomButton('h1', 'rl-header-button');
	            ngWigToolbarProvider.addStandardButton('underline', 'Underline', 'underline', 'fa-underline');
	            ngWigToolbarProvider.addStandardButton('indent', 'Indent', 'indent', 'fa-indent');
	            ngWigToolbarProvider.addStandardButton('outdent', 'Outdent', 'outdent', 'fa-outdent');
	        },
	    };
	}
	exports.richTextEditorProvider = richTextEditorProvider;
	//# sourceMappingURL=richTextEditor.config.js.map

/***/ },
/* 113 */
/***/ function(module, exports) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	exports.headerButtonDirectiveName = 'rlHeaderButton';
	function headerButton() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<button type=\"button\" class=\"nw-button\" ng-click=\"trigger()\" ng-disabled=\"editMode\" title=\"Header 1\">\n\t\t\t\t<i class=\"fa fa-header\"></i>\n\t\t\t</button>\n\t\t",
	        link: function (scope) {
	            scope.trigger = function () {
	                scope.execCommand('formatblock', 'h1');
	            };
	        },
	    };
	}
	exports.headerButton = headerButton;
	//# sourceMappingURL=headerButton.js.map

/***/ },
/* 114 */
/***/ function(module, exports) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	exports.paragraphButtonDirectiveName = 'rlParagraphButton';
	function paragraphButton() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<button type=\"button\" class=\"nw-button\" ng-click=\"trigger()\" ng-disabled=\"editMode\" title=\"paragraph\">\n\t\t\t\t<i class=\"fa fa-paragraph\"></i>\n\t\t\t</button>\n\t\t",
	        link: function (scope) {
	            scope.trigger = function () {
	                scope.execCommand('formatblock', 'p');
	            };
	        },
	    };
	}
	exports.paragraphButton = paragraphButton;
	//# sourceMappingURL=paragraphButton.js.map

/***/ },
/* 115 */
/***/ function(module, exports) {

	module.exports = "<textarea class=\"rich-text-editor\" ng-wig=\"editor.ngModel\" buttons=\"{{editor.toolbar}}\"></textarea>"

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	__webpack_require__(117);
	__webpack_require__(118);
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var componentValidator_service_1 = __webpack_require__(87);
	exports.moduleName = 'rl.ui.components.select';
	exports.directiveName = 'rlSelect';
	exports.controllerName = 'SelectController';
	var SelectController = (function () {
	    function SelectController($element, $scope, $q, componentValidatorFactory) {
	        var _this = this;
	        this.$q = $q;
	        this.ngModel = $element.controller('ngModel');
	        if (_.isUndefined(this.options)) {
	            this.loading = true;
	            this.loadItems().then(function (options) {
	                _this.options = options;
	                _this.loading = false;
	            });
	        }
	        if (!_.isUndefined(this.validator)) {
	            this.selectValidator = componentValidatorFactory.getInstance({
	                ngModel: this.ngModel,
	                $scope: $scope,
	                validators: [this.validator],
	            });
	        }
	    }
	    Object.defineProperty(SelectController.prototype, "selection", {
	        get: function () {
	            return this.ngModel.$viewValue;
	        },
	        set: function (value) {
	            this.ngModel.$setViewValue(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    SelectController.prototype.getDisplayName = function (item) {
	        if (item == null) {
	            return null;
	        }
	        return _.isFunction(this.selector)
	            ? this.selector(item)
	            : item[this.selector];
	    };
	    SelectController.prototype.loadItems = function () {
	        if (_.isFunction(this.getOptions)) {
	            return this.getOptions();
	        }
	        else {
	            return this.$q.when(this.options);
	        }
	    };
	    SelectController.$inject = ['$element', '$scope', '$q', componentValidator_service_1.factoryName];
	    return SelectController;
	})();
	exports.SelectController = SelectController;
	function select() {
	    return {
	        restrict: 'E',
	        require: 'ngModel',
	        template: __webpack_require__(120),
	        controller: exports.controllerName,
	        controllerAs: 'select',
	        scope: {},
	        bindToController: {
	            options: '=',
	            getOptions: '&',
	            selector: '=',
	            validator: '=',
	            label: '@',
	            ngDisabled: '=',
	        },
	    };
	}
	exports.select = select;
	angular.module(exports.moduleName, ['ui.select', componentValidator_service_1.moduleName])
	    .directive(exports.directiveName, select)
	    .controller(exports.controllerName, SelectController);
	//# sourceMappingURL=select.js.map

/***/ },
/* 117 */
/***/ function(module, exports) {

	/*!
	 * ui-select
	 * http://github.com/angular-ui/ui-select
	 * Version: 0.13.2 - 2015-10-09T15:34:24.040Z
	 * License: MIT
	 */
	
	
	(function () { 
	"use strict";
	
	var KEY = {
	    TAB: 9,
	    ENTER: 13,
	    ESC: 27,
	    SPACE: 32,
	    LEFT: 37,
	    UP: 38,
	    RIGHT: 39,
	    DOWN: 40,
	    SHIFT: 16,
	    CTRL: 17,
	    ALT: 18,
	    PAGE_UP: 33,
	    PAGE_DOWN: 34,
	    HOME: 36,
	    END: 35,
	    BACKSPACE: 8,
	    DELETE: 46,
	    COMMAND: 91,
	
	    MAP: { 91 : "COMMAND", 8 : "BACKSPACE" , 9 : "TAB" , 13 : "ENTER" , 16 : "SHIFT" , 17 : "CTRL" , 18 : "ALT" , 19 : "PAUSEBREAK" , 20 : "CAPSLOCK" , 27 : "ESC" , 32 : "SPACE" , 33 : "PAGE_UP", 34 : "PAGE_DOWN" , 35 : "END" , 36 : "HOME" , 37 : "LEFT" , 38 : "UP" , 39 : "RIGHT" , 40 : "DOWN" , 43 : "+" , 44 : "PRINTSCREEN" , 45 : "INSERT" , 46 : "DELETE", 48 : "0" , 49 : "1" , 50 : "2" , 51 : "3" , 52 : "4" , 53 : "5" , 54 : "6" , 55 : "7" , 56 : "8" , 57 : "9" , 59 : ";", 61 : "=" , 65 : "A" , 66 : "B" , 67 : "C" , 68 : "D" , 69 : "E" , 70 : "F" , 71 : "G" , 72 : "H" , 73 : "I" , 74 : "J" , 75 : "K" , 76 : "L", 77 : "M" , 78 : "N" , 79 : "O" , 80 : "P" , 81 : "Q" , 82 : "R" , 83 : "S" , 84 : "T" , 85 : "U" , 86 : "V" , 87 : "W" , 88 : "X" , 89 : "Y" , 90 : "Z", 96 : "0" , 97 : "1" , 98 : "2" , 99 : "3" , 100 : "4" , 101 : "5" , 102 : "6" , 103 : "7" , 104 : "8" , 105 : "9", 106 : "*" , 107 : "+" , 109 : "-" , 110 : "." , 111 : "/", 112 : "F1" , 113 : "F2" , 114 : "F3" , 115 : "F4" , 116 : "F5" , 117 : "F6" , 118 : "F7" , 119 : "F8" , 120 : "F9" , 121 : "F10" , 122 : "F11" , 123 : "F12", 144 : "NUMLOCK" , 145 : "SCROLLLOCK" , 186 : ";" , 187 : "=" , 188 : "," , 189 : "-" , 190 : "." , 191 : "/" , 192 : "`" , 219 : "[" , 220 : "\\" , 221 : "]" , 222 : "'"
	    },
	
	    isControl: function (e) {
	        var k = e.which;
	        switch (k) {
	        case KEY.COMMAND:
	        case KEY.SHIFT:
	        case KEY.CTRL:
	        case KEY.ALT:
	            return true;
	        }
	
	        if (e.metaKey) return true;
	
	        return false;
	    },
	    isFunctionKey: function (k) {
	        k = k.which ? k.which : k;
	        return k >= 112 && k <= 123;
	    },
	    isVerticalMovement: function (k){
	      return ~[KEY.UP, KEY.DOWN].indexOf(k);
	    },
	    isHorizontalMovement: function (k){
	      return ~[KEY.LEFT,KEY.RIGHT,KEY.BACKSPACE,KEY.DELETE].indexOf(k);
	    }
	  };
	
	/**
	 * Add querySelectorAll() to jqLite.
	 *
	 * jqLite find() is limited to lookups by tag name.
	 * TODO This will change with future versions of AngularJS, to be removed when this happens
	 *
	 * See jqLite.find - why not use querySelectorAll? https://github.com/angular/angular.js/issues/3586
	 * See feat(jqLite): use querySelectorAll instead of getElementsByTagName in jqLite.find https://github.com/angular/angular.js/pull/3598
	 */
	if (angular.element.prototype.querySelectorAll === undefined) {
	  angular.element.prototype.querySelectorAll = function(selector) {
	    return angular.element(this[0].querySelectorAll(selector));
	  };
	}
	
	/**
	 * Add closest() to jqLite.
	 */
	if (angular.element.prototype.closest === undefined) {
	  angular.element.prototype.closest = function( selector) {
	    var elem = this[0];
	    var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;
	
	    while (elem) {
	      if (matchesSelector.bind(elem)(selector)) {
	        return elem;
	      } else {
	        elem = elem.parentElement;
	      }
	    }
	    return false;
	  };
	}
	
	var latestId = 0;
	
	var uis = angular.module('ui.select', [])
	
	.constant('uiSelectConfig', {
	  theme: 'bootstrap',
	  searchEnabled: true,
	  sortable: false,
	  placeholder: '', // Empty by default, like HTML tag <select>
	  refreshDelay: 1000, // In milliseconds
	  closeOnSelect: true,
	  dropdownPosition: 'auto',
	  generateId: function() {
	    return latestId++;
	  },
	  appendToBody: false
	})
	
	// See Rename minErr and make it accessible from outside https://github.com/angular/angular.js/issues/6913
	.service('uiSelectMinErr', function() {
	  var minErr = angular.$$minErr('ui.select');
	  return function() {
	    var error = minErr.apply(this, arguments);
	    var message = error.message.replace(new RegExp('\nhttp://errors.angularjs.org/.*'), '');
	    return new Error(message);
	  };
	})
	
	// Recreates old behavior of ng-transclude. Used internally.
	.directive('uisTranscludeAppend', function () {
	  return {
	    link: function (scope, element, attrs, ctrl, transclude) {
	        transclude(scope, function (clone) {
	          element.append(clone);
	        });
	      }
	    };
	})
	
	/**
	 * Highlights text that matches $select.search.
	 *
	 * Taken from AngularUI Bootstrap Typeahead
	 * See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L340
	 */
	.filter('highlight', function() {
	  function escapeRegexp(queryToEscape) {
	    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	  }
	
	  return function(matchItem, query) {
	    return query && matchItem ? matchItem.replace(new RegExp(escapeRegexp(query), 'gi'), '<span class="ui-select-highlight">$&</span>') : matchItem;
	  };
	})
	
	/**
	 * A read-only equivalent of jQuery's offset function: http://api.jquery.com/offset/
	 *
	 * Taken from AngularUI Bootstrap Position:
	 * See https://github.com/angular-ui/bootstrap/blob/master/src/position/position.js#L70
	 */
	.factory('uisOffset',
	  ['$document', '$window',
	  function ($document, $window) {
	
	  return function(element) {
	    var boundingClientRect = element[0].getBoundingClientRect();
	    return {
	      width: boundingClientRect.width || element.prop('offsetWidth'),
	      height: boundingClientRect.height || element.prop('offsetHeight'),
	      top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
	      left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
	    };
	  };
	}]);
	
	uis.directive('uiSelectChoices',
	  ['uiSelectConfig', 'uisRepeatParser', 'uiSelectMinErr', '$compile',
	  function(uiSelectConfig, RepeatParser, uiSelectMinErr, $compile) {
	
	  return {
	    restrict: 'EA',
	    require: '^uiSelect',
	    replace: true,
	    transclude: true,
	    templateUrl: function(tElement) {
	      // Gets theme attribute from parent (ui-select)
	      var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
	      return theme + '/choices.tpl.html';
	    },
	
	    compile: function(tElement, tAttrs) {
	
	      if (!tAttrs.repeat) throw uiSelectMinErr('repeat', "Expected 'repeat' expression.");
	
	      return function link(scope, element, attrs, $select, transcludeFn) {
	
	        // var repeat = RepeatParser.parse(attrs.repeat);
	        var groupByExp = attrs.groupBy;
	        var groupFilterExp = attrs.groupFilter;
	
	        $select.parseRepeatAttr(attrs.repeat, groupByExp, groupFilterExp); //Result ready at $select.parserResult
	
	        $select.disableChoiceExpression = attrs.uiDisableChoice;
	        $select.onHighlightCallback = attrs.onHighlight;
	
	        $select.dropdownPosition = attrs.position ? attrs.position.toLowerCase() : uiSelectConfig.dropdownPosition;
	
	        if(groupByExp) {
	          var groups = element.querySelectorAll('.ui-select-choices-group');
	          if (groups.length !== 1) throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-group but got '{0}'.", groups.length);
	          groups.attr('ng-repeat', RepeatParser.getGroupNgRepeatExpression());
	        }
	
	        var choices = element.querySelectorAll('.ui-select-choices-row');
	        if (choices.length !== 1) {
	          throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row but got '{0}'.", choices.length);
	        }
	
	        choices.attr('ng-repeat', $select.parserResult.repeatExpression(groupByExp))
	            .attr('ng-if', '$select.open') //Prevent unnecessary watches when dropdown is closed
	            .attr('ng-click', '$select.select(' + $select.parserResult.itemName + ',false,$event)');
	
	        var rowsInner = element.querySelectorAll('.ui-select-choices-row-inner');
	        if (rowsInner.length !== 1) throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row-inner but got '{0}'.", rowsInner.length);
	        rowsInner.attr('uis-transclude-append', ''); //Adding uisTranscludeAppend directive to row element after choices element has ngRepeat
	
	        $compile(element, transcludeFn)(scope); //Passing current transcludeFn to be able to append elements correctly from uisTranscludeAppend
	
	        scope.$watch('$select.search', function(newValue) {
	          if(newValue && !$select.open && $select.multiple) $select.activate(false, true);
	          $select.activeIndex = $select.tagging.isActivated ? -1 : 0;
	          $select.refresh(attrs.refresh);
	        });
	
	        attrs.$observe('refreshDelay', function() {
	          // $eval() is needed otherwise we get a string instead of a number
	          var refreshDelay = scope.$eval(attrs.refreshDelay);
	          $select.refreshDelay = refreshDelay !== undefined ? refreshDelay : uiSelectConfig.refreshDelay;
	        });
	      };
	    }
	  };
	}]);
	
	/**
	 * Contains ui-select "intelligence".
	 *
	 * The goal is to limit dependency on the DOM whenever possible and
	 * put as much logic in the controller (instead of the link functions) as possible so it can be easily tested.
	 */
	uis.controller('uiSelectCtrl',
	  ['$scope', '$element', '$timeout', '$filter', 'uisRepeatParser', 'uiSelectMinErr', 'uiSelectConfig', '$parse',
	  function($scope, $element, $timeout, $filter, RepeatParser, uiSelectMinErr, uiSelectConfig, $parse) {
	
	  var ctrl = this;
	
	  var EMPTY_SEARCH = '';
	
	  ctrl.placeholder = uiSelectConfig.placeholder;
	  ctrl.searchEnabled = uiSelectConfig.searchEnabled;
	  ctrl.sortable = uiSelectConfig.sortable;
	  ctrl.refreshDelay = uiSelectConfig.refreshDelay;
	
	  ctrl.removeSelected = false; //If selected item(s) should be removed from dropdown list
	  ctrl.closeOnSelect = true; //Initialized inside uiSelect directive link function
	  ctrl.search = EMPTY_SEARCH;
	
	  ctrl.activeIndex = 0; //Dropdown of choices
	  ctrl.items = []; //All available choices
	
	  ctrl.open = false;
	  ctrl.focus = false;
	  ctrl.disabled = false;
	  ctrl.selected = undefined;
	
	  ctrl.dropdownPosition = 'auto';
	
	  ctrl.focusser = undefined; //Reference to input element used to handle focus events
	  ctrl.resetSearchInput = true;
	  ctrl.multiple = undefined; // Initialized inside uiSelect directive link function
	  ctrl.disableChoiceExpression = undefined; // Initialized inside uiSelectChoices directive link function
	  ctrl.tagging = {isActivated: false, fct: undefined};
	  ctrl.taggingTokens = {isActivated: false, tokens: undefined};
	  ctrl.lockChoiceExpression = undefined; // Initialized inside uiSelectMatch directive link function
	  ctrl.clickTriggeredSelect = false;
	  ctrl.$filter = $filter;
	
	  ctrl.searchInput = $element.querySelectorAll('input.ui-select-search');
	  if (ctrl.searchInput.length !== 1) {
	    throw uiSelectMinErr('searchInput', "Expected 1 input.ui-select-search but got '{0}'.", ctrl.searchInput.length);
	  }
	  
	  ctrl.isEmpty = function() {
	    return angular.isUndefined(ctrl.selected) || ctrl.selected === null || ctrl.selected === '';
	  };
	
	  // Most of the time the user does not want to empty the search input when in typeahead mode
	  function _resetSearchInput() {
	    if (ctrl.resetSearchInput || (ctrl.resetSearchInput === undefined && uiSelectConfig.resetSearchInput)) {
	      ctrl.search = EMPTY_SEARCH;
	      //reset activeIndex
	      if (ctrl.selected && ctrl.items.length && !ctrl.multiple) {
	        ctrl.activeIndex = ctrl.items.indexOf(ctrl.selected);
	      }
	    }
	  }
	
	    function _groupsFilter(groups, groupNames) {
	      var i, j, result = [];
	      for(i = 0; i < groupNames.length ;i++){
	        for(j = 0; j < groups.length ;j++){
	          if(groups[j].name == [groupNames[i]]){
	            result.push(groups[j]);
	          }
	        }
	      }
	      return result;
	    }
	
	  // When the user clicks on ui-select, displays the dropdown list
	  ctrl.activate = function(initSearchValue, avoidReset) {
	    if (!ctrl.disabled  && !ctrl.open) {
	      if(!avoidReset) _resetSearchInput();
	
	      $scope.$broadcast('uis:activate');
	
	      ctrl.open = true;
	
	      ctrl.activeIndex = ctrl.activeIndex >= ctrl.items.length ? 0 : ctrl.activeIndex;
	
	      // ensure that the index is set to zero for tagging variants
	      // that where first option is auto-selected
	      if ( ctrl.activeIndex === -1 && ctrl.taggingLabel !== false ) {
	        ctrl.activeIndex = 0;
	      }
	
	      // Give it time to appear before focus
	      $timeout(function() {
	        ctrl.search = initSearchValue || ctrl.search;
	        ctrl.searchInput[0].focus();
	        if(!ctrl.tagging.isActivated && ctrl.items.length > 1) {
	          _ensureHighlightVisible();
	        }
	      });
	    }
	  };
	
	  ctrl.findGroupByName = function(name) {
	    return ctrl.groups && ctrl.groups.filter(function(group) {
	      return group.name === name;
	    })[0];
	  };
	
	  ctrl.parseRepeatAttr = function(repeatAttr, groupByExp, groupFilterExp) {
	    function updateGroups(items) {
	      var groupFn = $scope.$eval(groupByExp);
	      ctrl.groups = [];
	      angular.forEach(items, function(item) {
	        var groupName = angular.isFunction(groupFn) ? groupFn(item) : item[groupFn];
	        var group = ctrl.findGroupByName(groupName);
	        if(group) {
	          group.items.push(item);
	        }
	        else {
	          ctrl.groups.push({name: groupName, items: [item]});
	        }
	      });
	      if(groupFilterExp){
	        var groupFilterFn = $scope.$eval(groupFilterExp);
	        if( angular.isFunction(groupFilterFn)){
	          ctrl.groups = groupFilterFn(ctrl.groups);
	        } else if(angular.isArray(groupFilterFn)){
	          ctrl.groups = _groupsFilter(ctrl.groups, groupFilterFn);
	        }
	      }
	      ctrl.items = [];
	      ctrl.groups.forEach(function(group) {
	        ctrl.items = ctrl.items.concat(group.items);
	      });
	    }
	
	    function setPlainItems(items) {
	      ctrl.items = items;
	    }
	
	    ctrl.setItemsFn = groupByExp ? updateGroups : setPlainItems;
	
	    ctrl.parserResult = RepeatParser.parse(repeatAttr);
	
	    ctrl.isGrouped = !!groupByExp;
	    ctrl.itemProperty = ctrl.parserResult.itemName;
	
	    //If collection is an Object, convert it to Array
	
	    var originalSource = ctrl.parserResult.source;
	    
	    //When an object is used as source, we better create an array and use it as 'source'
	    var createArrayFromObject = function(){
	      var origSrc = originalSource($scope);
	      $scope.$uisSource = Object.keys(origSrc).map(function(v){
	        var result = {};
	        result[ctrl.parserResult.keyName] = v;
	        result.value = origSrc[v];
	        return result;
	      });
	    };
	
	    if (ctrl.parserResult.keyName){ // Check for (key,value) syntax
	      createArrayFromObject();
	      ctrl.parserResult.source = $parse('$uisSource' + ctrl.parserResult.filters);
	      $scope.$watch(originalSource, function(newVal, oldVal){
	        if (newVal !== oldVal) createArrayFromObject();
	      }, true);
	    }
	
	    ctrl.refreshItems = function (data){
	      data = data || ctrl.parserResult.source($scope);
	      var selectedItems = ctrl.selected;
	      //TODO should implement for single mode removeSelected
	      if (ctrl.isEmpty() || (angular.isArray(selectedItems) && !selectedItems.length) || !ctrl.removeSelected) {
	        ctrl.setItemsFn(data);
	      }else{
	        if ( data !== undefined ) {
	          var filteredItems = data.filter(function(i) {return selectedItems && selectedItems.indexOf(i) < 0;});
	          ctrl.setItemsFn(filteredItems);
	        }
	      }
	      if (ctrl.dropdownPosition === 'auto' || ctrl.dropdownPosition === 'up'){
	        $scope.calculateDropdownPos();
	      }
	    };
	
	    // See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L259
	    $scope.$watchCollection(ctrl.parserResult.source, function(items) {
	      if (items === undefined || items === null) {
	        // If the user specifies undefined or null => reset the collection
	        // Special case: items can be undefined if the user did not initialized the collection on the scope
	        // i.e $scope.addresses = [] is missing
	        ctrl.items = [];
	      } else {
	        if (!angular.isArray(items)) {
	          throw uiSelectMinErr('items', "Expected an array but got '{0}'.", items);          
	        } else {
	          //Remove already selected items (ex: while searching)
	          //TODO Should add a test
	          ctrl.refreshItems(items);
	          ctrl.ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
	        }
	      }
	    });
	
	  };
	
	  var _refreshDelayPromise;
	
	  /**
	   * Typeahead mode: lets the user refresh the collection using his own function.
	   *
	   * See Expose $select.search for external / remote filtering https://github.com/angular-ui/ui-select/pull/31
	   */
	  ctrl.refresh = function(refreshAttr) {
	    if (refreshAttr !== undefined) {
	
	      // Debounce
	      // See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L155
	      // FYI AngularStrap typeahead does not have debouncing: https://github.com/mgcrea/angular-strap/blob/v2.0.0-rc.4/src/typeahead/typeahead.js#L177
	      if (_refreshDelayPromise) {
	        $timeout.cancel(_refreshDelayPromise);
	      }
	      _refreshDelayPromise = $timeout(function() {
	        $scope.$eval(refreshAttr);
	      }, ctrl.refreshDelay);
	    }
	  };
	
	  ctrl.isActive = function(itemScope) {
	    if ( !ctrl.open ) {
	      return false;
	    }
	    var itemIndex = ctrl.items.indexOf(itemScope[ctrl.itemProperty]);
	    var isActive =  itemIndex === ctrl.activeIndex;
	
	    if ( !isActive || ( itemIndex < 0 && ctrl.taggingLabel !== false ) ||( itemIndex < 0 && ctrl.taggingLabel === false) ) {
	      return false;
	    }
	
	    if (isActive && !angular.isUndefined(ctrl.onHighlightCallback)) {
	      itemScope.$eval(ctrl.onHighlightCallback);
	    }
	
	    return isActive;
	  };
	
	  ctrl.isDisabled = function(itemScope) {
	
	    if (!ctrl.open) return;
	
	    var itemIndex = ctrl.items.indexOf(itemScope[ctrl.itemProperty]);
	    var isDisabled = false;
	    var item;
	
	    if (itemIndex >= 0 && !angular.isUndefined(ctrl.disableChoiceExpression)) {
	      item = ctrl.items[itemIndex];
	      isDisabled = !!(itemScope.$eval(ctrl.disableChoiceExpression)); // force the boolean value
	      item._uiSelectChoiceDisabled = isDisabled; // store this for later reference
	    }
	
	    return isDisabled;
	  };
	
	
	  // When the user selects an item with ENTER or clicks the dropdown
	  ctrl.select = function(item, skipFocusser, $event) {
	    if (item === undefined || !item._uiSelectChoiceDisabled) {
	
	      if ( ! ctrl.items && ! ctrl.search ) return;
	
	      if (!item || !item._uiSelectChoiceDisabled) {
	        if(ctrl.tagging.isActivated) {
	          // if taggingLabel is disabled, we pull from ctrl.search val
	          if ( ctrl.taggingLabel === false ) {
	            if ( ctrl.activeIndex < 0 ) {
	              item = ctrl.tagging.fct !== undefined ? ctrl.tagging.fct(ctrl.search) : ctrl.search;
	              if (!item || angular.equals( ctrl.items[0], item ) ) {
	                return;
	              }
	            } else {
	              // keyboard nav happened first, user selected from dropdown
	              item = ctrl.items[ctrl.activeIndex];
	            }
	          } else {
	            // tagging always operates at index zero, taggingLabel === false pushes
	            // the ctrl.search value without having it injected
	            if ( ctrl.activeIndex === 0 ) {
	              // ctrl.tagging pushes items to ctrl.items, so we only have empty val
	              // for `item` if it is a detected duplicate
	              if ( item === undefined ) return;
	
	              // create new item on the fly if we don't already have one;
	              // use tagging function if we have one
	              if ( ctrl.tagging.fct !== undefined && typeof item === 'string' ) {
	                item = ctrl.tagging.fct(ctrl.search);
	                if (!item) return;
	              // if item type is 'string', apply the tagging label
	              } else if ( typeof item === 'string' ) {
	                // trim the trailing space
	                item = item.replace(ctrl.taggingLabel,'').trim();
	              }
	            }
	          }
	          // search ctrl.selected for dupes potentially caused by tagging and return early if found
	          if ( ctrl.selected && angular.isArray(ctrl.selected) && ctrl.selected.filter( function (selection) { return angular.equals(selection, item); }).length > 0 ) {
	            ctrl.close(skipFocusser);
	            return;
	          }
	        }
	
	        $scope.$broadcast('uis:select', item);
	
	        var locals = {};
	        locals[ctrl.parserResult.itemName] = item;
	
	        $timeout(function(){
	          ctrl.onSelectCallback($scope, {
	            $item: item,
	            $model: ctrl.parserResult.modelMapper($scope, locals)
	          });
	        });
	
	        if (ctrl.closeOnSelect) {
	          ctrl.close(skipFocusser);
	        }
	        if ($event && $event.type === 'click') {
	          ctrl.clickTriggeredSelect = true;
	        }
	      }
	    }
	  };
	
	  // Closes the dropdown
	  ctrl.close = function(skipFocusser) {
	    if (!ctrl.open) return;
	    if (ctrl.ngModel && ctrl.ngModel.$setTouched) ctrl.ngModel.$setTouched();
	    _resetSearchInput();
	    ctrl.open = false;
	
	    $scope.$broadcast('uis:close', skipFocusser);
	
	  };
	
	  ctrl.setFocus = function(){
	    if (!ctrl.focus) ctrl.focusInput[0].focus();
	  };
	
	  ctrl.clear = function($event) {
	    ctrl.select(undefined);
	    $event.stopPropagation();
	    $timeout(function() {
	      ctrl.focusser[0].focus();
	    }, 0, false);
	  };
	
	  // Toggle dropdown
	  ctrl.toggle = function(e) {
	    if (ctrl.open) {
	      ctrl.close();
	      e.preventDefault();
	      e.stopPropagation();
	    } else {
	      ctrl.activate();
	    }
	  };
	
	  ctrl.isLocked = function(itemScope, itemIndex) {
	      var isLocked, item = ctrl.selected[itemIndex];
	
	      if (item && !angular.isUndefined(ctrl.lockChoiceExpression)) {
	          isLocked = !!(itemScope.$eval(ctrl.lockChoiceExpression)); // force the boolean value
	          item._uiSelectChoiceLocked = isLocked; // store this for later reference
	      }
	
	      return isLocked;
	  };
	
	  var sizeWatch = null;
	  ctrl.sizeSearchInput = function() {
	
	    var input = ctrl.searchInput[0],
	        container = ctrl.searchInput.parent().parent()[0],
	        calculateContainerWidth = function() {
	          // Return the container width only if the search input is visible
	          return container.clientWidth * !!input.offsetParent;
	        },
	        updateIfVisible = function(containerWidth) {
	          if (containerWidth === 0) {
	            return false;
	          }
	          var inputWidth = containerWidth - input.offsetLeft - 10;
	          if (inputWidth < 50) inputWidth = containerWidth;
	          ctrl.searchInput.css('width', inputWidth+'px');
	          return true;
	        };
	
	    ctrl.searchInput.css('width', '10px');
	    $timeout(function() { //Give tags time to render correctly
	      if (sizeWatch === null && !updateIfVisible(calculateContainerWidth())) {
	        sizeWatch = $scope.$watch(calculateContainerWidth, function(containerWidth) {
	          if (updateIfVisible(containerWidth)) {
	            sizeWatch();
	            sizeWatch = null;
	          }
	        });
	      }
	    });
	  };
	
	  function _handleDropDownSelection(key) {
	    var processed = true;
	    switch (key) {
	      case KEY.DOWN:
	        if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
	        else if (ctrl.activeIndex < ctrl.items.length - 1) { ctrl.activeIndex++; }
	        break;
	      case KEY.UP:
	        if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
	        else if (ctrl.activeIndex > 0 || (ctrl.search.length === 0 && ctrl.tagging.isActivated && ctrl.activeIndex > -1)) { ctrl.activeIndex--; }
	        break;
	      case KEY.TAB:
	        if (!ctrl.multiple || ctrl.open) ctrl.select(ctrl.items[ctrl.activeIndex], true);
	        break;
	      case KEY.ENTER:
	        if(ctrl.open && (ctrl.tagging.isActivated || ctrl.activeIndex >= 0)){
	          ctrl.select(ctrl.items[ctrl.activeIndex]); // Make sure at least one dropdown item is highlighted before adding if not in tagging mode
	        } else {
	          ctrl.activate(false, true); //In case its the search input in 'multiple' mode
	        }
	        break;
	      case KEY.ESC:
	        ctrl.close();
	        break;
	      default:
	        processed = false;
	    }
	    return processed;
	  }
	
	  // Bind to keyboard shortcuts
	  ctrl.searchInput.on('keydown', function(e) {
	
	    var key = e.which;
	
	    // if(~[KEY.ESC,KEY.TAB].indexOf(key)){
	    //   //TODO: SEGURO?
	    //   ctrl.close();
	    // }
	
	    $scope.$apply(function() {
	
	      var tagged = false;
	
	      if (ctrl.items.length > 0 || ctrl.tagging.isActivated) {
	        _handleDropDownSelection(key);
	        if ( ctrl.taggingTokens.isActivated ) {
	          for (var i = 0; i < ctrl.taggingTokens.tokens.length; i++) {
	            if ( ctrl.taggingTokens.tokens[i] === KEY.MAP[e.keyCode] ) {
	              // make sure there is a new value to push via tagging
	              if ( ctrl.search.length > 0 ) {
	                tagged = true;
	              }
	            }
	          }
	          if ( tagged ) {
	            $timeout(function() {
	              ctrl.searchInput.triggerHandler('tagged');
	              var newItem = ctrl.search.replace(KEY.MAP[e.keyCode],'').trim();
	              if ( ctrl.tagging.fct ) {
	                newItem = ctrl.tagging.fct( newItem );
	              }
	              if (newItem) ctrl.select(newItem, true);
	            });
	          }
	        }
	      }
	
	    });
	
	    if(KEY.isVerticalMovement(key) && ctrl.items.length > 0){
	      _ensureHighlightVisible();
	    }
	
	    if (key === KEY.ENTER || key === KEY.ESC) {
	      e.preventDefault();
	      e.stopPropagation();
	    }
	
	  });
	
	  // If tagging try to split by tokens and add items
	  ctrl.searchInput.on('paste', function (e) {
	    var data = e.originalEvent.clipboardData.getData('text/plain');
	    if (data && data.length > 0 && ctrl.taggingTokens.isActivated && ctrl.tagging.fct) {
	      var items = data.split(ctrl.taggingTokens.tokens[0]); // split by first token only
	      if (items && items.length > 0) {
	        angular.forEach(items, function (item) {
	          var newItem = ctrl.tagging.fct(item);
	          if (newItem) {
	            ctrl.select(newItem, true);
	          }
	        });
	        e.preventDefault();
	        e.stopPropagation();
	      }
	    }
	  });
	
	  ctrl.searchInput.on('tagged', function() {
	    $timeout(function() {
	      _resetSearchInput();
	    });
	  });
	
	  // See https://github.com/ivaynberg/select2/blob/3.4.6/select2.js#L1431
	  function _ensureHighlightVisible() {
	    var container = $element.querySelectorAll('.ui-select-choices-content');
	    var choices = container.querySelectorAll('.ui-select-choices-row');
	    if (choices.length < 1) {
	      throw uiSelectMinErr('choices', "Expected multiple .ui-select-choices-row but got '{0}'.", choices.length);
	    }
	
	    if (ctrl.activeIndex < 0) {
	      return;
	    }
	
	    var highlighted = choices[ctrl.activeIndex];
	    var posY = highlighted.offsetTop + highlighted.clientHeight - container[0].scrollTop;
	    var height = container[0].offsetHeight;
	
	    if (posY > height) {
	      container[0].scrollTop += posY - height;
	    } else if (posY < highlighted.clientHeight) {
	      if (ctrl.isGrouped && ctrl.activeIndex === 0)
	        container[0].scrollTop = 0; //To make group header visible when going all the way up
	      else
	        container[0].scrollTop -= highlighted.clientHeight - posY;
	    }
	  }
	
	  $scope.$on('$destroy', function() {
	    ctrl.searchInput.off('keyup keydown tagged blur paste');
	  });
	
	}]);
	
	uis.directive('uiSelect',
	  ['$document', 'uiSelectConfig', 'uiSelectMinErr', 'uisOffset', '$compile', '$parse', '$timeout',
	  function($document, uiSelectConfig, uiSelectMinErr, uisOffset, $compile, $parse, $timeout) {
	
	  return {
	    restrict: 'EA',
	    templateUrl: function(tElement, tAttrs) {
	      var theme = tAttrs.theme || uiSelectConfig.theme;
	      return theme + (angular.isDefined(tAttrs.multiple) ? '/select-multiple.tpl.html' : '/select.tpl.html');
	    },
	    replace: true,
	    transclude: true,
	    require: ['uiSelect', '^ngModel'],
	    scope: true,
	
	    controller: 'uiSelectCtrl',
	    controllerAs: '$select',
	    compile: function(tElement, tAttrs) {
	
	      //Multiple or Single depending if multiple attribute presence
	      if (angular.isDefined(tAttrs.multiple))
	        tElement.append('<ui-select-multiple/>').removeAttr('multiple');
	      else
	        tElement.append('<ui-select-single/>');
	
	      if (tAttrs.inputId)
	        tElement.querySelectorAll('input.ui-select-search')[0].id = tAttrs.inputId;
	
	      return function(scope, element, attrs, ctrls, transcludeFn) {
	
	        var $select = ctrls[0];
	        var ngModel = ctrls[1];
	
	        $select.generatedId = uiSelectConfig.generateId();
	        $select.baseTitle = attrs.title || 'Select box';
	        $select.focusserTitle = $select.baseTitle + ' focus';
	        $select.focusserId = 'focusser-' + $select.generatedId;
	
	        $select.closeOnSelect = function() {
	          if (angular.isDefined(attrs.closeOnSelect)) {
	            return $parse(attrs.closeOnSelect)();
	          } else {
	            return uiSelectConfig.closeOnSelect;
	          }
	        }();
	
	        $select.onSelectCallback = $parse(attrs.onSelect);
	        $select.onRemoveCallback = $parse(attrs.onRemove);
	
	        //Limit the number of selections allowed
	        $select.limit = (angular.isDefined(attrs.limit)) ? parseInt(attrs.limit, 10) : undefined;
	
	        //Set reference to ngModel from uiSelectCtrl
	        $select.ngModel = ngModel;
	
	        $select.choiceGrouped = function(group){
	          return $select.isGrouped && group && group.name;
	        };
	
	        if(attrs.tabindex){
	          attrs.$observe('tabindex', function(value) {
	            $select.focusInput.attr('tabindex', value);
	            element.removeAttr('tabindex');
	          });
	        }
	
	        scope.$watch('searchEnabled', function() {
	            var searchEnabled = scope.$eval(attrs.searchEnabled);
	            $select.searchEnabled = searchEnabled !== undefined ? searchEnabled : uiSelectConfig.searchEnabled;
	        });
	
	        scope.$watch('sortable', function() {
	            var sortable = scope.$eval(attrs.sortable);
	            $select.sortable = sortable !== undefined ? sortable : uiSelectConfig.sortable;
	        });
	
	        attrs.$observe('disabled', function() {
	          // No need to use $eval() (thanks to ng-disabled) since we already get a boolean instead of a string
	          $select.disabled = attrs.disabled !== undefined ? attrs.disabled : false;
	        });
	
	        attrs.$observe('resetSearchInput', function() {
	          // $eval() is needed otherwise we get a string instead of a boolean
	          var resetSearchInput = scope.$eval(attrs.resetSearchInput);
	          $select.resetSearchInput = resetSearchInput !== undefined ? resetSearchInput : true;
	        });
	
	        attrs.$observe('tagging', function() {
	          if(attrs.tagging !== undefined)
	          {
	            // $eval() is needed otherwise we get a string instead of a boolean
	            var taggingEval = scope.$eval(attrs.tagging);
	            $select.tagging = {isActivated: true, fct: taggingEval !== true ? taggingEval : undefined};
	          }
	          else
	          {
	            $select.tagging = {isActivated: false, fct: undefined};
	          }
	        });
	
	        attrs.$observe('taggingLabel', function() {
	          if(attrs.tagging !== undefined )
	          {
	            // check eval for FALSE, in this case, we disable the labels
	            // associated with tagging
	            if ( attrs.taggingLabel === 'false' ) {
	              $select.taggingLabel = false;
	            }
	            else
	            {
	              $select.taggingLabel = attrs.taggingLabel !== undefined ? attrs.taggingLabel : '(new)';
	            }
	          }
	        });
	
	        attrs.$observe('taggingTokens', function() {
	          if (attrs.tagging !== undefined) {
	            var tokens = attrs.taggingTokens !== undefined ? attrs.taggingTokens.split('|') : [',','ENTER'];
	            $select.taggingTokens = {isActivated: true, tokens: tokens };
	          }
	        });
	
	        //Automatically gets focus when loaded
	        if (angular.isDefined(attrs.autofocus)){
	          $timeout(function(){
	            $select.setFocus();
	          });
	        }
	
	        //Gets focus based on scope event name (e.g. focus-on='SomeEventName')
	        if (angular.isDefined(attrs.focusOn)){
	          scope.$on(attrs.focusOn, function() {
	              $timeout(function(){
	                $select.setFocus();
	              });
	          });
	        }
	
	        function onDocumentClick(e) {
	          if (!$select.open) return; //Skip it if dropdown is close
	
	          var contains = false;
	
	          if (window.jQuery) {
	            // Firefox 3.6 does not support element.contains()
	            // See Node.contains https://developer.mozilla.org/en-US/docs/Web/API/Node.contains
	            contains = window.jQuery.contains(element[0], e.target);
	          } else {
	            contains = element[0].contains(e.target);
	          }
	
	          if (!contains && !$select.clickTriggeredSelect) {
	            //Will lose focus only with certain targets
	            var focusableControls = ['input','button','textarea'];
	            var targetController = angular.element(e.target).controller('uiSelect'); //To check if target is other ui-select
	            var skipFocusser = targetController && targetController !== $select; //To check if target is other ui-select
	            if (!skipFocusser) skipFocusser =  ~focusableControls.indexOf(e.target.tagName.toLowerCase()); //Check if target is input, button or textarea
	            $select.close(skipFocusser);
	            scope.$digest();
	          }
	          $select.clickTriggeredSelect = false;
	        }
	
	        // See Click everywhere but here event http://stackoverflow.com/questions/12931369
	        $document.on('click', onDocumentClick);
	
	        scope.$on('$destroy', function() {
	          $document.off('click', onDocumentClick);
	        });
	
	        // Move transcluded elements to their correct position in main template
	        transcludeFn(scope, function(clone) {
	          // See Transclude in AngularJS http://blog.omkarpatil.com/2012/11/transclude-in-angularjs.html
	
	          // One day jqLite will be replaced by jQuery and we will be able to write:
	          // var transcludedElement = clone.filter('.my-class')
	          // instead of creating a hackish DOM element:
	          var transcluded = angular.element('<div>').append(clone);
	
	          var transcludedMatch = transcluded.querySelectorAll('.ui-select-match');
	          transcludedMatch.removeAttr('ui-select-match'); //To avoid loop in case directive as attr
	          transcludedMatch.removeAttr('data-ui-select-match'); // Properly handle HTML5 data-attributes
	          if (transcludedMatch.length !== 1) {
	            throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-match but got '{0}'.", transcludedMatch.length);
	          }
	          element.querySelectorAll('.ui-select-match').replaceWith(transcludedMatch);
	
	          var transcludedChoices = transcluded.querySelectorAll('.ui-select-choices');
	          transcludedChoices.removeAttr('ui-select-choices'); //To avoid loop in case directive as attr
	          transcludedChoices.removeAttr('data-ui-select-choices'); // Properly handle HTML5 data-attributes
	          if (transcludedChoices.length !== 1) {
	            throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-choices but got '{0}'.", transcludedChoices.length);
	          }
	          element.querySelectorAll('.ui-select-choices').replaceWith(transcludedChoices);
	        });
	
	        // Support for appending the select field to the body when its open
	        var appendToBody = scope.$eval(attrs.appendToBody);
	        if (appendToBody !== undefined ? appendToBody : uiSelectConfig.appendToBody) {
	          scope.$watch('$select.open', function(isOpen) {
	            if (isOpen) {
	              positionDropdown();
	            } else {
	              resetDropdown();
	            }
	          });
	
	          // Move the dropdown back to its original location when the scope is destroyed. Otherwise
	          // it might stick around when the user routes away or the select field is otherwise removed
	          scope.$on('$destroy', function() {
	            resetDropdown();
	          });
	        }
	
	        // Hold on to a reference to the .ui-select-container element for appendToBody support
	        var placeholder = null,
	            originalWidth = '';
	
	        function positionDropdown() {
	          // Remember the absolute position of the element
	          var offset = uisOffset(element);
	
	          // Clone the element into a placeholder element to take its original place in the DOM
	          placeholder = angular.element('<div class="ui-select-placeholder"></div>');
	          placeholder[0].style.width = offset.width + 'px';
	          placeholder[0].style.height = offset.height + 'px';
	          element.after(placeholder);
	
	          // Remember the original value of the element width inline style, so it can be restored
	          // when the dropdown is closed
	          originalWidth = element[0].style.width;
	
	          // Now move the actual dropdown element to the end of the body
	          $document.find('body').append(element);
	
	          element[0].style.position = 'absolute';
	          element[0].style.left = offset.left + 'px';
	          element[0].style.top = offset.top + 'px';
	          element[0].style.width = offset.width + 'px';
	        }
	
	        function resetDropdown() {
	          if (placeholder === null) {
	            // The dropdown has not actually been display yet, so there's nothing to reset
	            return;
	          }
	
	          // Move the dropdown element back to its original location in the DOM
	          placeholder.replaceWith(element);
	          placeholder = null;
	
	          element[0].style.position = '';
	          element[0].style.left = '';
	          element[0].style.top = '';
	          element[0].style.width = originalWidth;
	        }
	
	        // Hold on to a reference to the .ui-select-dropdown element for direction support.
	        var dropdown = null,
	            directionUpClassName = 'direction-up';
	
	        // Support changing the direction of the dropdown if there isn't enough space to render it.
	        scope.$watch('$select.open', function() {
	
	          if ($select.dropdownPosition === 'auto' || $select.dropdownPosition === 'up'){
	            scope.calculateDropdownPos();
	          }
	
	        });
	
	        var setDropdownPosUp = function(offset, offsetDropdown){
	
	          offset = offset || uisOffset(element);
	          offsetDropdown = offsetDropdown || uisOffset(dropdown);
	
	          dropdown[0].style.position = 'absolute';
	          dropdown[0].style.top = (offsetDropdown.height * -1) + 'px';
	          element.addClass(directionUpClassName);
	
	        };
	
	        var setDropdownPosDown = function(offset, offsetDropdown){
	
	          element.removeClass(directionUpClassName);
	
	          offset = offset || uisOffset(element);
	          offsetDropdown = offsetDropdown || uisOffset(dropdown);
	
	          dropdown[0].style.position = '';
	          dropdown[0].style.top = '';
	
	        };
	
	        scope.calculateDropdownPos = function(){
	
	          if ($select.open) {
	            dropdown = angular.element(element).querySelectorAll('.ui-select-dropdown');
	            if (dropdown.length === 0) {
	              return;
	            }
	
	            // Hide the dropdown so there is no flicker until $timeout is done executing.
	            dropdown[0].style.opacity = 0;
	
	            // Delay positioning the dropdown until all choices have been added so its height is correct.
	            $timeout(function(){
	
	              if ($select.dropdownPosition === 'up'){
	                  //Go UP
	                  setDropdownPosUp(offset, offsetDropdown);
	
	              }else{ //AUTO
	
	                element.removeClass(directionUpClassName);
	
	                var offset = uisOffset(element);
	                var offsetDropdown = uisOffset(dropdown);
	
	                //https://code.google.com/p/chromium/issues/detail?id=342307#c4
	                var scrollTop = $document[0].documentElement.scrollTop || $document[0].body.scrollTop; //To make it cross browser (blink, webkit, IE, Firefox).
	
	                // Determine if the direction of the dropdown needs to be changed.
	                if (offset.top + offset.height + offsetDropdown.height > scrollTop + $document[0].documentElement.clientHeight) {
	                  //Go UP
	                  setDropdownPosUp(offset, offsetDropdown);
	                }else{
	                  //Go DOWN
	                  setDropdownPosDown(offset, offsetDropdown);
	                }
	
	              }
	
	              // Display the dropdown once it has been positioned.
	              dropdown[0].style.opacity = 1;
	            });
	          } else {
	              if (dropdown === null || dropdown.length === 0) {
	                return;
	              }
	
	              // Reset the position of the dropdown.
	              dropdown[0].style.position = '';
	              dropdown[0].style.top = '';
	              element.removeClass(directionUpClassName);
	          }
	        };
	      };
	    }
	  };
	}]);
	
	uis.directive('uiSelectMatch', ['uiSelectConfig', function(uiSelectConfig) {
	  return {
	    restrict: 'EA',
	    require: '^uiSelect',
	    replace: true,
	    transclude: true,
	    templateUrl: function(tElement) {
	      // Gets theme attribute from parent (ui-select)
	      var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
	      var multi = tElement.parent().attr('multiple');
	      return theme + (multi ? '/match-multiple.tpl.html' : '/match.tpl.html');
	    },
	    link: function(scope, element, attrs, $select) {
	      $select.lockChoiceExpression = attrs.uiLockChoice;
	      attrs.$observe('placeholder', function(placeholder) {
	        $select.placeholder = placeholder !== undefined ? placeholder : uiSelectConfig.placeholder;
	      });
	
	      function setAllowClear(allow) {
	        $select.allowClear = (angular.isDefined(allow)) ? (allow === '') ? true : (allow.toLowerCase() === 'true') : false;
	      }
	
	      attrs.$observe('allowClear', setAllowClear);
	      setAllowClear(attrs.allowClear);
	
	      if($select.multiple){
	        $select.sizeSearchInput();
	      }
	
	    }
	  };
	}]);
	
	uis.directive('uiSelectMultiple', ['uiSelectMinErr','$timeout', function(uiSelectMinErr, $timeout) {
	  return {
	    restrict: 'EA',
	    require: ['^uiSelect', '^ngModel'],
	
	    controller: ['$scope','$timeout', function($scope, $timeout){
	
	      var ctrl = this,
	          $select = $scope.$select,
	          ngModel;
	
	      //Wait for link fn to inject it 
	      $scope.$evalAsync(function(){ ngModel = $scope.ngModel; });
	
	      ctrl.activeMatchIndex = -1;
	
	      ctrl.updateModel = function(){
	        ngModel.$setViewValue(Date.now()); //Set timestamp as a unique string to force changes
	        ctrl.refreshComponent();
	      };
	
	      ctrl.refreshComponent = function(){
	        //Remove already selected items
	        //e.g. When user clicks on a selection, the selected array changes and 
	        //the dropdown should remove that item
	        $select.refreshItems();
	        $select.sizeSearchInput();
	      };
	
	      // Remove item from multiple select
	      ctrl.removeChoice = function(index){
	
	        var removedChoice = $select.selected[index];
	
	        // if the choice is locked, can't remove it
	        if(removedChoice._uiSelectChoiceLocked) return;
	
	        var locals = {};
	        locals[$select.parserResult.itemName] = removedChoice;
	
	        $select.selected.splice(index, 1);
	        ctrl.activeMatchIndex = -1;
	        $select.sizeSearchInput();
	
	        // Give some time for scope propagation.
	        $timeout(function(){
	          $select.onRemoveCallback($scope, {
	            $item: removedChoice,
	            $model: $select.parserResult.modelMapper($scope, locals)
	          });
	        });
	
	        ctrl.updateModel();
	
	      };
	
	      ctrl.getPlaceholder = function(){
	        //Refactor single?
	        if($select.selected && $select.selected.length) return;
	        return $select.placeholder;
	      };
	
	
	    }],
	    controllerAs: '$selectMultiple',
	
	    link: function(scope, element, attrs, ctrls) {
	
	      var $select = ctrls[0];
	      var ngModel = scope.ngModel = ctrls[1];
	      var $selectMultiple = scope.$selectMultiple;
	
	      //$select.selected = raw selected objects (ignoring any property binding)
	
	      $select.multiple = true;
	      $select.removeSelected = true;
	
	      //Input that will handle focus
	      $select.focusInput = $select.searchInput;
	
	      //From view --> model
	      ngModel.$parsers.unshift(function () {
	        var locals = {},
	            result,
	            resultMultiple = [];
	        for (var j = $select.selected.length - 1; j >= 0; j--) {
	          locals = {};
	          locals[$select.parserResult.itemName] = $select.selected[j];
	          result = $select.parserResult.modelMapper(scope, locals);
	          resultMultiple.unshift(result);
	        }
	        return resultMultiple;
	      });
	
	      // From model --> view
	      ngModel.$formatters.unshift(function (inputValue) {
	        var data = $select.parserResult.source (scope, { $select : {search:''}}), //Overwrite $search
	            locals = {},
	            result;
	        if (!data) return inputValue;
	        var resultMultiple = [];
	        var checkFnMultiple = function(list, value){
	          if (!list || !list.length) return;
	          for (var p = list.length - 1; p >= 0; p--) {
	            locals[$select.parserResult.itemName] = list[p];
	            result = $select.parserResult.modelMapper(scope, locals);
	            if($select.parserResult.trackByExp){
	                var matches = /\.(.+)/.exec($select.parserResult.trackByExp);
	                if(matches.length>0 && result[matches[1]] == value[matches[1]]){
	                    resultMultiple.unshift(list[p]);
	                    return true;
	                }
	            }
	            if (angular.equals(result,value)){
	              resultMultiple.unshift(list[p]);
	              return true;
	            }
	          }
	          return false;
	        };
	        if (!inputValue) return resultMultiple; //If ngModel was undefined
	        for (var k = inputValue.length - 1; k >= 0; k--) {
	          //Check model array of currently selected items 
	          if (!checkFnMultiple($select.selected, inputValue[k])){
	            //Check model array of all items available
	            if (!checkFnMultiple(data, inputValue[k])){
	              //If not found on previous lists, just add it directly to resultMultiple
	              resultMultiple.unshift(inputValue[k]);
	            }
	          }
	        }
	        return resultMultiple;
	      });
	      
	      //Watch for external model changes 
	      scope.$watchCollection(function(){ return ngModel.$modelValue; }, function(newValue, oldValue) {
	        if (oldValue != newValue){
	          ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
	          $selectMultiple.refreshComponent();
	        }
	      });
	
	      ngModel.$render = function() {
	        // Make sure that model value is array
	        if(!angular.isArray(ngModel.$viewValue)){
	          // Have tolerance for null or undefined values
	          if(angular.isUndefined(ngModel.$viewValue) || ngModel.$viewValue === null){
	            $select.selected = [];
	          } else {
	            throw uiSelectMinErr('multiarr', "Expected model value to be array but got '{0}'", ngModel.$viewValue);
	          }
	        }
	        $select.selected = ngModel.$viewValue;
	        scope.$evalAsync(); //To force $digest
	      };
	
	      scope.$on('uis:select', function (event, item) {
	        if($select.selected.length >= $select.limit) {
	          return;
	        }
	        $select.selected.push(item);
	        $selectMultiple.updateModel();
	      });
	
	      scope.$on('uis:activate', function () {
	        $selectMultiple.activeMatchIndex = -1;
	      });
	
	      scope.$watch('$select.disabled', function(newValue, oldValue) {
	        // As the search input field may now become visible, it may be necessary to recompute its size
	        if (oldValue && !newValue) $select.sizeSearchInput();
	      });
	
	      $select.searchInput.on('keydown', function(e) {
	        var key = e.which;
	        scope.$apply(function() {
	          var processed = false;
	          // var tagged = false; //Checkme
	          if(KEY.isHorizontalMovement(key)){
	            processed = _handleMatchSelection(key);
	          }
	          if (processed  && key != KEY.TAB) {
	            //TODO Check si el tab selecciona aun correctamente
	            //Crear test
	            e.preventDefault();
	            e.stopPropagation();
	          }
	        });
	      });
	      function _getCaretPosition(el) {
	        if(angular.isNumber(el.selectionStart)) return el.selectionStart;
	        // selectionStart is not supported in IE8 and we don't want hacky workarounds so we compromise
	        else return el.value.length;
	      }
	      // Handles selected options in "multiple" mode
	      function _handleMatchSelection(key){
	        var caretPosition = _getCaretPosition($select.searchInput[0]),
	            length = $select.selected.length,
	            // none  = -1,
	            first = 0,
	            last  = length-1,
	            curr  = $selectMultiple.activeMatchIndex,
	            next  = $selectMultiple.activeMatchIndex+1,
	            prev  = $selectMultiple.activeMatchIndex-1,
	            newIndex = curr;
	
	        if(caretPosition > 0 || ($select.search.length && key == KEY.RIGHT)) return false;
	
	        $select.close();
	
	        function getNewActiveMatchIndex(){
	          switch(key){
	            case KEY.LEFT:
	              // Select previous/first item
	              if(~$selectMultiple.activeMatchIndex) return prev;
	              // Select last item
	              else return last;
	              break;
	            case KEY.RIGHT:
	              // Open drop-down
	              if(!~$selectMultiple.activeMatchIndex || curr === last){
	                $select.activate();
	                return false;
	              }
	              // Select next/last item
	              else return next;
	              break;
	            case KEY.BACKSPACE:
	              // Remove selected item and select previous/first
	              if(~$selectMultiple.activeMatchIndex){
	                $selectMultiple.removeChoice(curr);
	                return prev;
	              }
	              // Select last item
	              else return last;
	              break;
	            case KEY.DELETE:
	              // Remove selected item and select next item
	              if(~$selectMultiple.activeMatchIndex){
	                $selectMultiple.removeChoice($selectMultiple.activeMatchIndex);
	                return curr;
	              }
	              else return false;
	          }
	        }
	
	        newIndex = getNewActiveMatchIndex();
	
	        if(!$select.selected.length || newIndex === false) $selectMultiple.activeMatchIndex = -1;
	        else $selectMultiple.activeMatchIndex = Math.min(last,Math.max(first,newIndex));
	
	        return true;
	      }
	
	      $select.searchInput.on('keyup', function(e) {
	
	        if ( ! KEY.isVerticalMovement(e.which) ) {
	          scope.$evalAsync( function () {
	            $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
	          });
	        }
	        // Push a "create new" item into array if there is a search string
	        if ( $select.tagging.isActivated && $select.search.length > 0 ) {
	
	          // return early with these keys
	          if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || KEY.isVerticalMovement(e.which) ) {
	            return;
	          }
	          // always reset the activeIndex to the first item when tagging
	          $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
	          // taggingLabel === false bypasses all of this
	          if ($select.taggingLabel === false) return;
	
	          var items = angular.copy( $select.items );
	          var stashArr = angular.copy( $select.items );
	          var newItem;
	          var item;
	          var hasTag = false;
	          var dupeIndex = -1;
	          var tagItems;
	          var tagItem;
	
	          // case for object tagging via transform `$select.tagging.fct` function
	          if ( $select.tagging.fct !== undefined) {
	            tagItems = $select.$filter('filter')(items,{'isTag': true});
	            if ( tagItems.length > 0 ) {
	              tagItem = tagItems[0];
	            }
	            // remove the first element, if it has the `isTag` prop we generate a new one with each keyup, shaving the previous
	            if ( items.length > 0 && tagItem ) {
	              hasTag = true;
	              items = items.slice(1,items.length);
	              stashArr = stashArr.slice(1,stashArr.length);
	            }
	            newItem = $select.tagging.fct($select.search);
	            newItem.isTag = true;
	            // verify the the tag doesn't match the value of an existing item
	            if ( stashArr.filter( function (origItem) { return angular.equals( origItem, $select.tagging.fct($select.search) ); } ).length > 0 ) {
	              return;
	            }
	            newItem.isTag = true;
	          // handle newItem string and stripping dupes in tagging string context
	          } else {
	            // find any tagging items already in the $select.items array and store them
	            tagItems = $select.$filter('filter')(items,function (item) {
	              return item.match($select.taggingLabel);
	            });
	            if ( tagItems.length > 0 ) {
	              tagItem = tagItems[0];
	            }
	            item = items[0];
	            // remove existing tag item if found (should only ever be one tag item)
	            if ( item !== undefined && items.length > 0 && tagItem ) {
	              hasTag = true;
	              items = items.slice(1,items.length);
	              stashArr = stashArr.slice(1,stashArr.length);
	            }
	            newItem = $select.search+' '+$select.taggingLabel;
	            if ( _findApproxDupe($select.selected, $select.search) > -1 ) {
	              return;
	            }
	            // verify the the tag doesn't match the value of an existing item from
	            // the searched data set or the items already selected
	            if ( _findCaseInsensitiveDupe(stashArr.concat($select.selected)) ) {
	              // if there is a tag from prev iteration, strip it / queue the change
	              // and return early
	              if ( hasTag ) {
	                items = stashArr;
	                scope.$evalAsync( function () {
	                  $select.activeIndex = 0;
	                  $select.items = items;
	                });
	              }
	              return;
	            }
	            if ( _findCaseInsensitiveDupe(stashArr) ) {
	              // if there is a tag from prev iteration, strip it
	              if ( hasTag ) {
	                $select.items = stashArr.slice(1,stashArr.length);
	              }
	              return;
	            }
	          }
	          if ( hasTag ) dupeIndex = _findApproxDupe($select.selected, newItem);
	          // dupe found, shave the first item
	          if ( dupeIndex > -1 ) {
	            items = items.slice(dupeIndex+1,items.length-1);
	          } else {
	            items = [];
	            items.push(newItem);
	            items = items.concat(stashArr);
	          }
	          scope.$evalAsync( function () {
	            $select.activeIndex = 0;
	            $select.items = items;
	          });
	        }
	      });
	      function _findCaseInsensitiveDupe(arr) {
	        if ( arr === undefined || $select.search === undefined ) {
	          return false;
	        }
	        var hasDupe = arr.filter( function (origItem) {
	          if ( $select.search.toUpperCase() === undefined || origItem === undefined ) {
	            return false;
	          }
	          return origItem.toUpperCase() === $select.search.toUpperCase();
	        }).length > 0;
	
	        return hasDupe;
	      }
	      function _findApproxDupe(haystack, needle) {
	        var dupeIndex = -1;
	        if(angular.isArray(haystack)) {
	          var tempArr = angular.copy(haystack);
	          for (var i = 0; i <tempArr.length; i++) {
	            // handle the simple string version of tagging
	            if ( $select.tagging.fct === undefined ) {
	              // search the array for the match
	              if ( tempArr[i]+' '+$select.taggingLabel === needle ) {
	              dupeIndex = i;
	              }
	            // handle the object tagging implementation
	            } else {
	              var mockObj = tempArr[i];
	              mockObj.isTag = true;
	              if ( angular.equals(mockObj, needle) ) {
	              dupeIndex = i;
	              }
	            }
	          }
	        }
	        return dupeIndex;
	      }
	
	      $select.searchInput.on('blur', function() {
	        $timeout(function() {
	          $selectMultiple.activeMatchIndex = -1;
	        });
	      });
	
	    }
	  };
	}]);
	
	uis.directive('uiSelectSingle', ['$timeout','$compile', function($timeout, $compile) {
	  return {
	    restrict: 'EA',
	    require: ['^uiSelect', '^ngModel'],
	    link: function(scope, element, attrs, ctrls) {
	
	      var $select = ctrls[0];
	      var ngModel = ctrls[1];
	
	      //From view --> model
	      ngModel.$parsers.unshift(function (inputValue) {
	        var locals = {},
	            result;
	        locals[$select.parserResult.itemName] = inputValue;
	        result = $select.parserResult.modelMapper(scope, locals);
	        return result;
	      });
	
	      //From model --> view
	      ngModel.$formatters.unshift(function (inputValue) {
	        var data = $select.parserResult.source (scope, { $select : {search:''}}), //Overwrite $search
	            locals = {},
	            result;
	        if (data){
	          var checkFnSingle = function(d){
	            locals[$select.parserResult.itemName] = d;
	            result = $select.parserResult.modelMapper(scope, locals);
	            return result == inputValue;
	          };
	          //If possible pass same object stored in $select.selected
	          if ($select.selected && checkFnSingle($select.selected)) {
	            return $select.selected;
	          }
	          for (var i = data.length - 1; i >= 0; i--) {
	            if (checkFnSingle(data[i])) return data[i];
	          }
	        }
	        return inputValue;
	      });
	
	      //Update viewValue if model change
	      scope.$watch('$select.selected', function(newValue) {
	        if (ngModel.$viewValue !== newValue) {
	          ngModel.$setViewValue(newValue);
	        }
	      });
	
	      ngModel.$render = function() {
	        $select.selected = ngModel.$viewValue;
	      };
	
	      scope.$on('uis:select', function (event, item) {
	        $select.selected = item;
	      });
	
	      scope.$on('uis:close', function (event, skipFocusser) {
	        $timeout(function(){
	          $select.focusser.prop('disabled', false);
	          if (!skipFocusser) $select.focusser[0].focus();
	        },0,false);
	      });
	
	      scope.$on('uis:activate', function () {
	        focusser.prop('disabled', true); //Will reactivate it on .close()
	      });
	
	      //Idea from: https://github.com/ivaynberg/select2/blob/79b5bf6db918d7560bdd959109b7bcfb47edaf43/select2.js#L1954
	      var focusser = angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");
	      $compile(focusser)(scope);
	      $select.focusser = focusser;
	
	      //Input that will handle focus
	      $select.focusInput = focusser;
	
	      element.parent().append(focusser);
	      focusser.bind("focus", function(){
	        scope.$evalAsync(function(){
	          $select.focus = true;
	        });
	      });
	      focusser.bind("blur", function(){
	        scope.$evalAsync(function(){
	          $select.focus = false;
	        });
	      });
	      focusser.bind("keydown", function(e){
	
	        if (e.which === KEY.BACKSPACE) {
	          e.preventDefault();
	          e.stopPropagation();
	          $select.select(undefined);
	          scope.$apply();
	          return;
	        }
	
	        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
	          return;
	        }
	
	        if (e.which == KEY.DOWN  || e.which == KEY.UP || e.which == KEY.ENTER || e.which == KEY.SPACE){
	          e.preventDefault();
	          e.stopPropagation();
	          $select.activate();
	        }
	
	        scope.$digest();
	      });
	
	      focusser.bind("keyup input", function(e){
	
	        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || e.which == KEY.ENTER || e.which === KEY.BACKSPACE) {
	          return;
	        }
	
	        $select.activate(focusser.val()); //User pressed some regular key, so we pass it to the search input
	        focusser.val('');
	        scope.$digest();
	
	      });
	
	
	    }
	  };
	}]);
	// Make multiple matches sortable
	uis.directive('uiSelectSort', ['$timeout', 'uiSelectConfig', 'uiSelectMinErr', function($timeout, uiSelectConfig, uiSelectMinErr) {
	  return {
	    require: '^uiSelect',
	    link: function(scope, element, attrs, $select) {
	      if (scope[attrs.uiSelectSort] === null) {
	        throw uiSelectMinErr('sort', "Expected a list to sort");
	      }
	
	      var options = angular.extend({
	          axis: 'horizontal'
	        },
	        scope.$eval(attrs.uiSelectSortOptions));
	
	      var axis = options.axis,
	        draggingClassName = 'dragging',
	        droppingClassName = 'dropping',
	        droppingBeforeClassName = 'dropping-before',
	        droppingAfterClassName = 'dropping-after';
	
	      scope.$watch(function(){
	        return $select.sortable;
	      }, function(n){
	        if (n) {
	          element.attr('draggable', true);
	        } else {
	          element.removeAttr('draggable');
	        }
	      });
	
	      element.on('dragstart', function(e) {
	        element.addClass(draggingClassName);
	
	        (e.dataTransfer || e.originalEvent.dataTransfer).setData('text/plain', scope.$index);
	      });
	
	      element.on('dragend', function() {
	        element.removeClass(draggingClassName);
	      });
	
	      var move = function(from, to) {
	        /*jshint validthis: true */
	        this.splice(to, 0, this.splice(from, 1)[0]);
	      };
	
	      var dragOverHandler = function(e) {
	        e.preventDefault();
	
	        var offset = axis === 'vertical' ? e.offsetY || e.layerY || (e.originalEvent ? e.originalEvent.offsetY : 0) : e.offsetX || e.layerX || (e.originalEvent ? e.originalEvent.offsetX : 0);
	
	        if (offset < (this[axis === 'vertical' ? 'offsetHeight' : 'offsetWidth'] / 2)) {
	          element.removeClass(droppingAfterClassName);
	          element.addClass(droppingBeforeClassName);
	
	        } else {
	          element.removeClass(droppingBeforeClassName);
	          element.addClass(droppingAfterClassName);
	        }
	      };
	
	      var dropTimeout;
	
	      var dropHandler = function(e) {
	        e.preventDefault();
	
	        var droppedItemIndex = parseInt((e.dataTransfer || e.originalEvent.dataTransfer).getData('text/plain'), 10);
	
	        // prevent event firing multiple times in firefox
	        $timeout.cancel(dropTimeout);
	        dropTimeout = $timeout(function() {
	          _dropHandler(droppedItemIndex);
	        }, 20);
	      };
	
	      var _dropHandler = function(droppedItemIndex) {
	        var theList = scope.$eval(attrs.uiSelectSort),
	          itemToMove = theList[droppedItemIndex],
	          newIndex = null;
	
	        if (element.hasClass(droppingBeforeClassName)) {
	          if (droppedItemIndex < scope.$index) {
	            newIndex = scope.$index - 1;
	          } else {
	            newIndex = scope.$index;
	          }
	        } else {
	          if (droppedItemIndex < scope.$index) {
	            newIndex = scope.$index;
	          } else {
	            newIndex = scope.$index + 1;
	          }
	        }
	
	        move.apply(theList, [droppedItemIndex, newIndex]);
	
	        scope.$apply(function() {
	          scope.$emit('uiSelectSort:change', {
	            array: theList,
	            item: itemToMove,
	            from: droppedItemIndex,
	            to: newIndex
	          });
	        });
	
	        element.removeClass(droppingClassName);
	        element.removeClass(droppingBeforeClassName);
	        element.removeClass(droppingAfterClassName);
	
	        element.off('drop', dropHandler);
	      };
	
	      element.on('dragenter', function() {
	        if (element.hasClass(draggingClassName)) {
	          return;
	        }
	
	        element.addClass(droppingClassName);
	
	        element.on('dragover', dragOverHandler);
	        element.on('drop', dropHandler);
	      });
	
	      element.on('dragleave', function(e) {
	        if (e.target != element) {
	          return;
	        }
	        element.removeClass(droppingClassName);
	        element.removeClass(droppingBeforeClassName);
	        element.removeClass(droppingAfterClassName);
	
	        element.off('dragover', dragOverHandler);
	        element.off('drop', dropHandler);
	      });
	    }
	  };
	}]);
	
	/**
	 * Parses "repeat" attribute.
	 *
	 * Taken from AngularJS ngRepeat source code
	 * See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L211
	 *
	 * Original discussion about parsing "repeat" attribute instead of fully relying on ng-repeat:
	 * https://github.com/angular-ui/ui-select/commit/5dd63ad#commitcomment-5504697
	 */
	
	uis.service('uisRepeatParser', ['uiSelectMinErr','$parse', function(uiSelectMinErr, $parse) {
	  var self = this;
	
	  /**
	   * Example:
	   * expression = "address in addresses | filter: {street: $select.search} track by $index"
	   * itemName = "address",
	   * source = "addresses | filter: {street: $select.search}",
	   * trackByExp = "$index",
	   */
	  self.parse = function(expression) {
	
	
	    var match;
	    var isObjectCollection = /\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)/.test(expression);
	    // If an array is used as collection
	
	    // if (isObjectCollection){
	      //00000000000000000000000000000111111111000000000000000222222222222220033333333333333333333330000444444444444444444000000000000000556666660000077777777777755000000000000000000000088888880000000
	    match = expression.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(([\w\.]+)?\s*(|\s*[\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);      
	
	    // 1 Alias
	    // 2 Item
	    // 3 Key on (key,value)
	    // 4 Value on (key,value)
	    // 5 Collection expresion (only used when using an array collection)
	    // 6 Object that will be converted to Array when using (key,value) syntax
	    // 7 Filters that will be applied to #6 when using (key,value) syntax
	    // 8 Track by
	
	    if (!match) {
	      throw uiSelectMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
	              expression);
	    }
	    if (!match[6] && isObjectCollection) {
	      throw uiSelectMinErr('iexp', "Expected expression in form of '_item_ as (_key_, _item_) in _ObjCollection_ [ track by _id_]' but got '{0}'.",
	              expression);
	    }
	
	    return {
	      itemName: match[4] || match[2], // (lhs) Left-hand side,
	      keyName: match[3], //for (key, value) syntax
	      source: $parse(!match[3] ? match[5] : match[6]),
	      sourceName: match[6],
	      filters: match[7],
	      trackByExp: match[8],
	      modelMapper: $parse(match[1] || match[4] || match[2]),
	      repeatExpression: function (grouped) {
	        var expression = this.itemName + ' in ' + (grouped ? '$group.items' : '$select.items');
	        if (this.trackByExp) {
	          expression += ' track by ' + this.trackByExp;
	        }
	        return expression;
	      } 
	    };
	
	  };
	
	  self.getGroupNgRepeatExpression = function() {
	    return '$group in $select.groups';
	  };
	
	}]);
	
	}());
	angular.module("ui.select").run(["$templateCache", function($templateCache) {$templateCache.put("bootstrap/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu\" role=\"listbox\" ng-show=\"$select.items.length > 0\"><li class=\"ui-select-choices-group\" id=\"ui-select-choices-{{ $select.generatedId }}\"><div class=\"divider\" ng-show=\"$select.isGrouped && $index > 0\"></div><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label dropdown-header\" ng-bind=\"$group.name\"></div><div id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\" role=\"option\"><a href=\"javascript:void(0)\" class=\"ui-select-choices-row-inner\"></a></div></li></ul>");
	$templateCache.put("bootstrap/match-multiple.tpl.html","<span class=\"ui-select-match\"><span ng-repeat=\"$item in $select.selected\"><span class=\"ui-select-match-item btn btn-default btn-xs\" tabindex=\"-1\" type=\"button\" ng-disabled=\"$select.disabled\" ng-click=\"$selectMultiple.activeMatchIndex = $index;\" ng-class=\"{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span class=\"close ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&nbsp;&times;</span> <span uis-transclude-append=\"\"></span></span></span></span>");
	$templateCache.put("bootstrap/match.tpl.html","<div class=\"ui-select-match\" ng-hide=\"$select.open\" ng-disabled=\"$select.disabled\" ng-class=\"{\'btn-default-focus\':$select.focus}\"><span tabindex=\"-1\" class=\"btn btn-default form-control ui-select-toggle\" aria-label=\"{{ $select.baseTitle }} activate\" ng-disabled=\"$select.disabled\" ng-click=\"$select.activate()\" style=\"outline: 0;\"><span ng-show=\"$select.isEmpty()\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"ui-select-match-text pull-left\" ng-class=\"{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></span> <i class=\"caret pull-right\" ng-click=\"$select.toggle($event)\"></i> <a ng-show=\"$select.allowClear && !$select.isEmpty()\" aria-label=\"{{ $select.baseTitle }} clear\" style=\"margin-right: 10px\" ng-click=\"$select.clear($event)\" class=\"btn btn-xs btn-link pull-right\"><i class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></i></a></span></div>");
	$templateCache.put("bootstrap/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control\" ng-class=\"{open: $select.open}\"><div><div class=\"ui-select-match\"></div><input type=\"text\" autocomplete=\"false\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" class=\"ui-select-search input-xs\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-hide=\"$select.disabled\" ng-click=\"$select.activate()\" ng-model=\"$select.search\" role=\"combobox\" aria-label=\"{{ $select.baseTitle }}\" ondrop=\"return false;\"></div><div class=\"ui-select-choices\"></div></div>");
	$templateCache.put("bootstrap/select.tpl.html","<div class=\"ui-select-container ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\"><div class=\"ui-select-match\"></div><input type=\"text\" autocomplete=\"false\" tabindex=\"-1\" aria-expanded=\"true\" aria-label=\"{{ $select.baseTitle }}\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"form-control ui-select-search\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-show=\"$select.searchEnabled && $select.open\"><div class=\"ui-select-choices\"></div></div>");
	$templateCache.put("selectize/choices.tpl.html","<div ng-show=\"$select.open\" class=\"ui-select-choices ui-select-dropdown selectize-dropdown single\"><div class=\"ui-select-choices-content selectize-dropdown-content\"><div class=\"ui-select-choices-group optgroup\" role=\"listbox\"><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label optgroup-header\" ng-bind=\"$group.name\"></div><div role=\"option\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\"><div class=\"option ui-select-choices-row-inner\" data-selectable=\"\"></div></div></div></div></div>");
	$templateCache.put("selectize/match.tpl.html","<div ng-hide=\"($select.open || $select.isEmpty())\" class=\"ui-select-match\" ng-transclude=\"\"></div>");
	$templateCache.put("selectize/select.tpl.html","<div class=\"ui-select-container selectize-control single\" ng-class=\"{\'open\': $select.open}\"><div class=\"selectize-input\" ng-class=\"{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}\" ng-click=\"$select.activate()\"><div class=\"ui-select-match\"></div><input type=\"text\" autocomplete=\"false\" tabindex=\"-1\" class=\"ui-select-search ui-select-toggle\" ng-click=\"$select.toggle($event)\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-hide=\"!$select.searchEnabled || ($select.selected && !$select.open)\" ng-disabled=\"$select.disabled\" aria-label=\"{{ $select.baseTitle }}\"></div><div class=\"ui-select-choices\"></div></div>");
	$templateCache.put("select2/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content select2-results\"><li class=\"ui-select-choices-group\" ng-class=\"{\'select2-result-with-children\': $select.choiceGrouped($group) }\"><div ng-show=\"$select.choiceGrouped($group)\" class=\"ui-select-choices-group-label select2-result-label\" ng-bind=\"$group.name\"></div><ul role=\"listbox\" id=\"ui-select-choices-{{ $select.generatedId }}\" ng-class=\"{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }\"><li role=\"option\" id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}\"><div class=\"select2-result-label ui-select-choices-row-inner\"></div></li></ul></li></ul>");
	$templateCache.put("select2/match-multiple.tpl.html","<span class=\"ui-select-match\"><li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"$item in $select.selected\" ng-class=\"{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span uis-transclude-append=\"\"></span> <a href=\"javascript:;\" class=\"ui-select-match-close select2-search-choice-close\" ng-click=\"$selectMultiple.removeChoice($index)\" tabindex=\"-1\"></a></li></span>");
	$templateCache.put("select2/match.tpl.html","<a class=\"select2-choice ui-select-match\" ng-class=\"{\'select2-default\': $select.isEmpty()}\" ng-click=\"$select.toggle($event)\" aria-label=\"{{ $select.baseTitle }} select\"><span ng-show=\"$select.isEmpty()\" class=\"select2-chosen\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"select2-chosen\" ng-transclude=\"\"></span> <abbr ng-if=\"$select.allowClear && !$select.isEmpty()\" class=\"select2-search-choice-close\" ng-click=\"$select.clear($event)\"></abbr> <span class=\"select2-arrow ui-select-toggle\"><b></b></span></a>");
	$templateCache.put("select2/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple select2 select2-container select2-container-multi\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}\"><ul class=\"select2-choices\"><span class=\"ui-select-match\"></span><li class=\"select2-search-field\"><input type=\"text\" autocomplete=\"false\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"select2-input ui-select-search\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-hide=\"$select.disabled\" ng-model=\"$select.search\" ng-click=\"$select.activate()\" style=\"width: 34px;\" ondrop=\"return false;\"></li></ul><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open}\"><div class=\"ui-select-choices\"></div></div></div>");
	$templateCache.put("select2/select.tpl.html","<div class=\"ui-select-container select2 select2-container\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}\"><div class=\"ui-select-match\"></div><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open}\"><div class=\"select2-search\" ng-show=\"$select.searchEnabled\"><input type=\"text\" autocomplete=\"false\" autocorrect=\"false\" autocapitalize=\"off\" spellcheck=\"false\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"ui-select-search select2-input\" ng-model=\"$select.search\"></div><div class=\"ui-select-choices\"></div></div></div>");}]);

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(119);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./select.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./select.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * ui-select\n * http://github.com/angular-ui/ui-select\n * Version: 0.13.2 - 2015-10-09T15:34:24.045Z\n * License: MIT\n */\n\n\n/* Style when highlighting a search. */\n.ui-select-highlight {\n  font-weight: bold;\n}\n\n.ui-select-offscreen {\n  clip: rect(0 0 0 0) !important;\n  width: 1px !important;\n  height: 1px !important;\n  border: 0 !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  position: absolute !important;\n  outline: 0 !important;\n  left: 0px !important;\n  top: 0px !important;\n}\n\n\n.ui-select-choices-row:hover {\n  background-color: #f5f5f5;\n}\n\n/* Select2 theme */\n\n/* Mark invalid Select2 */\n.ng-dirty.ng-invalid > a.select2-choice {\n    border-color: #D44950;\n}\n\n.select2-result-single {\n  padding-left: 0;\n}\n\n.select2-locked > .select2-search-choice-close{\n  display:none;\n}\n\n.select-locked > .ui-select-match-close{\n    display:none;\n}\n\nbody > .select2-container.open {\n  z-index: 9999; /* The z-index Select2 applies to the select2-drop */\n}\n\n/* Handle up direction Select2 */\n.ui-select-container[theme=\"select2\"].direction-up .ui-select-match {\n    border-radius: 4px; /* FIXME hardcoded value :-/ */\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n.ui-select-container[theme=\"select2\"].direction-up .ui-select-dropdown {\n    border-radius: 4px; /* FIXME hardcoded value :-/ */\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n\n    border-top-width: 1px;  /* FIXME hardcoded value :-/ */\n    border-top-style: solid;\n\n    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.25);\n\n    margin-top: -4px; /* FIXME hardcoded value :-/ */\n}\n.ui-select-container[theme=\"select2\"].direction-up .ui-select-dropdown .select2-search {\n    margin-top: 4px; /* FIXME hardcoded value :-/ */\n}\n.ui-select-container[theme=\"select2\"].direction-up.select2-dropdown-open .ui-select-match {\n    border-bottom-color: #5897fb;\n}\n\n/* Selectize theme */\n\n/* Helper class to show styles when focus */\n.selectize-input.selectize-focus{\n  border-color: #007FBB !important;\n}\n\n/* Fix input width for Selectize theme */\n.selectize-control > .selectize-input > input {\n  width: 100%;\n}\n\n/* Fix dropdown width for Selectize theme */\n.selectize-control > .selectize-dropdown {\n  width: 100%;\n}\n\n/* Mark invalid Selectize */\n.ng-dirty.ng-invalid > div.selectize-input {\n    border-color: #D44950;\n}\n\n/* Handle up direction Selectize */\n.ui-select-container[theme=\"selectize\"].direction-up .ui-select-dropdown {\n    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.25);\n\n    margin-top: -2px; /* FIXME hardcoded value :-/ */\n}\n\n/* Bootstrap theme */\n\n/* Helper class to show styles when focus */\n.btn-default-focus {\n  color: #333;\n  background-color: #EBEBEB;\n  border-color: #ADADAD;\n  text-decoration: none;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n\n.ui-select-bootstrap .ui-select-toggle {\n  position: relative;\n}\n\n.ui-select-bootstrap .ui-select-toggle > .caret {\n  position: absolute;\n  height: 10px;\n  top: 50%;\n  right: 10px;\n  margin-top: -2px;\n}\n\n/* Fix Bootstrap dropdown position when inside a input-group */\n.input-group > .ui-select-bootstrap.dropdown {\n  /* Instead of relative */\n  position: static;\n}\n\n.input-group > .ui-select-bootstrap > input.ui-select-search.form-control {\n  border-radius: 4px; /* FIXME hardcoded value :-/ */\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group > .ui-select-bootstrap > input.ui-select-search.form-control.direction-up {\n  border-radius: 4px !important; /* FIXME hardcoded value :-/ */\n  border-top-right-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.ui-select-bootstrap > .ui-select-match > .btn{\n  /* Instead of center because of .btn */\n  text-align: left !important;\n}\n\n.ui-select-bootstrap > .ui-select-match > .caret {\n  position: absolute;\n  top: 45%;\n  right: 15px;\n}\n\n/* See Scrollable Menu with Bootstrap 3 http://stackoverflow.com/questions/19227496 */\n.ui-select-bootstrap > .ui-select-choices {\n  width: 100%;\n  height: auto;\n  max-height: 200px;\n  overflow-x: hidden;\n  margin-top: -1px;\n}\n\nbody > .ui-select-bootstrap.open {\n  z-index: 1000; /* Standard Bootstrap dropdown z-index */\n}\n\n.ui-select-multiple.ui-select-bootstrap {\n  height: auto;\n  padding: 3px 3px 0 3px;\n}\n\n.ui-select-multiple.ui-select-bootstrap input.ui-select-search {\n  background-color: transparent !important; /* To prevent double background when disabled */\n  border: none;\n  outline: none;\n  height: 1.666666em;\n  margin-bottom: 3px;\n}\n\n.ui-select-multiple.ui-select-bootstrap .ui-select-match .close {\n  font-size: 1.6em;\n  line-height: 0.75;\n}\n\n.ui-select-multiple.ui-select-bootstrap .ui-select-match-item {\n  outline: 0;\n  margin: 0 3px 3px 0;\n}\n\n.ui-select-multiple .ui-select-match-item {\n  position: relative;\n}\n\n.ui-select-multiple .ui-select-match-item.dropping-before:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 100%;\n  height: 100%;\n  margin-right: 2px;\n  border-left: 1px solid #428bca;\n}\n\n.ui-select-multiple .ui-select-match-item.dropping-after:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 100%;\n  height: 100%;\n  margin-left: 2px;\n  border-right: 1px solid #428bca;\n}\n\n.ui-select-bootstrap .ui-select-choices-row>a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: 400;\n    line-height: 1.42857143;\n    color: #333;\n    white-space: nowrap;\n}\n\n.ui-select-bootstrap .ui-select-choices-row>a:hover, .ui-select-bootstrap .ui-select-choices-row>a:focus {\n    text-decoration: none;\n    color: #262626;\n    background-color: #f5f5f5;\n}\n\n.ui-select-bootstrap .ui-select-choices-row.active>a {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    background-color: #428bca;\n}\n\n.ui-select-bootstrap .ui-select-choices-row.disabled>a,\n.ui-select-bootstrap .ui-select-choices-row.active.disabled>a {\n    color: #777;\n    cursor: not-allowed;\n    background-color: #fff;\n}\n\n/* fix hide/show angular animation */\n.ui-select-match.ng-hide-add,\n.ui-select-search.ng-hide-add {\n    display: none !important;\n}\n\n/* Mark invalid Bootstrap */\n.ui-select-bootstrap.ng-dirty.ng-invalid > button.btn.ui-select-match {\n    border-color: #D44950;\n}\n\n/* Handle up direction Bootstrap */\n.ui-select-container[theme=\"bootstrap\"].direction-up .ui-select-dropdown {\n    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.25);\n}\n", ""]);
	
	// exports


/***/ },
/* 120 */
/***/ function(module, exports) {

	module.exports = "<div class=\"validation-input-group\">\r\n\t<div class=\"field validation-input\" ng-class=\"{ 'has-error': select.ngModel.$invalid }\">\r\n\t\t<label ng-show=\"select.selection\" class=\"show-hide angular-animate\">\r\n\t\t\t{{select.label}} <span class=\"pull-right error-string\">{{select.selectValidator.error}}</span>\r\n\t\t</label>\r\n\t\t<ui-select ng-model=\"select.selection\" search-enabled=\"false\" theme=\"bootstrap\" ng-disabled=\"select.ngDisabled\">\r\n\t\t\t<ui-select-match placeholder=\"{{select.label}}\">{{select.getDisplayName($select.selected)}}</ui-select-match>\r\n\t\t\t<ui-select-choices repeat=\"option in select.options\">\r\n\t\t\t\t{{select.getDisplayName(option)}}\r\n\t\t\t</ui-select-choices>\r\n\t\t</ui-select>\r\n\t\t<rl-busy loading=\"select.loading\"></rl-busy>\r\n\t</div>\r\n\t<i class=\"fa fa-exclamation-triangle text-danger\" ng-show=\"select.ngModel.$error.required\"></i>\r\n</div>"

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var SignaturePad = __webpack_require__(13);
	exports.moduleName = 'rl.ui.components.signaturePad';
	exports.directiveName = 'rlSignaturePad';
	function signaturePad() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: 'ngModel',
	        template: "\n\t\t\t<canvas class=\"signature-pad\" ng-if=\"!ngDisabled\"></canvas>\n\t\t\t<img ng-src=\"{{ngModel.$viewValue}}\" ng-style=\"style\" ng-if=\"ngDisabled\" />\n\t\t",
	        scope: {
	            pad: '=',
	            height: '=',
	            width: '=',
	            ngDisabled: '=',
	        },
	        link: function (scope, element, attrs, ngModel) {
	            scope.$watch('ngDisabled', function (disabled) {
	                scope.ngModel = ngModel;
	                if (disabled) {
	                    scope.style = {
	                        height: scope.height != null ? scope.height : 100,
	                        width: scope.width != null ? scope.width : 200,
	                    };
	                }
	                else {
	                    var canvas = element.find('.signature-pad').get(0);
	                    var options = {
	                        backgroundColor: 'rgb(255, 255, 255)',
	                    };
	                    scope.pad = new SignaturePad(canvas, options);
	                    canvas.height = scope.height != null ? scope.height : 100;
	                    canvas.width = scope.width != null ? scope.width : 200;
	                    scope.$watch(function () { return ngModel.$viewValue; }, function (value) {
	                        if (value != null) {
	                            scope.pad.fromDataURL(value);
	                        }
	                    });
	                    scope.$watch(function () { return scope.pad.toDataURL(); }, function (value) {
	                        if (value != null) {
	                            ngModel.$setViewValue(value);
	                        }
	                    });
	                }
	            });
	        },
	    };
	}
	exports.signaturePad = signaturePad;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, signaturePad);
	//# sourceMappingURL=signaturePad.js.map

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __observable = typescript_angular_utilities_1.services.observable;
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var card = __webpack_require__(123);
	exports.simpleCard = card;
	var list = __webpack_require__(124);
	exports.simpleCardList = list;
	exports.moduleName = 'rl.ui.components.simpleCardList';
	angular.module(exports.moduleName, [__observable.moduleName, __parentChild.moduleName])
	    .directive(list.directiveName, list.simpleCardList)
	    .controller(list.controllerName, list.SimpleCardListController)
	    .directive(card.directiveName, card.simpleCard)
	    .controller(card.controllerName, card.SimpleCardController);
	//# sourceMappingURL=simpleCardList.module.js.map

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	'use strict';
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	exports.directiveName = 'rlSimpleCard';
	exports.controllerName = 'SimpleCardController';
	var SimpleCardController = (function () {
	    function SimpleCardController($scope, $element, parentChild) {
	        var _this = this;
	        this.$scope = $scope;
	        this.parentChild = parentChild;
	        this.showContent = false;
	        this.autosaveLink = {};
	        this.close = function () {
	            if (_this.showContent === false || _this.alwaysOpen) {
	                return true;
	            }
	            return _this.autosave();
	        };
	        if (this.canOpen == null) {
	            this.canOpen = true;
	        }
	        this.listController = $element.controller('rlSimpleCardList');
	        if (this.listController == null) {
	            this.listController = this.noList();
	        }
	        var behavior = {
	            autosave: this.autosave.bind(this),
	            close: this.close,
	            setAlwaysOpen: function (value) {
	                _this.alwaysOpen = value;
	            },
	        };
	        this.listController.registerCard(behavior);
	        parentChild.registerChildBehavior(this.childLink, behavior);
	        $scope.$watch(function () { return _this.alwaysOpen; }, function (value) {
	            if (value) {
	                _this.showContent = true;
	            }
	            else {
	                _this.close();
	            }
	        });
	    }
	    SimpleCardController.prototype.toggleContent = function () {
	        if (this.showContent) {
	            this.close();
	        }
	        else {
	            this.open();
	        }
	    };
	    SimpleCardController.prototype.open = function () {
	        if (this.canOpen && this.listController.openCard()) {
	            this.showContent = true;
	            this.onOpen();
	        }
	    };
	    SimpleCardController.prototype.autosave = function () {
	        var _this = this;
	        return this.parentChild.triggerChildBehavior(this.autosaveLink, function (behavior) {
	            var canClose = behavior.autosave();
	            if (canClose) {
	                _this.showContent = false;
	            }
	            return canClose;
	        });
	    };
	    SimpleCardController.prototype.noList = function () {
	        return {
	            openCard: function () {
	                return true;
	            },
	            registerCard: function (behavior) {
	                return null;
	            },
	        };
	    };
	    SimpleCardController.$inject = ['$scope', '$element', __parentChild.serviceName];
	    return SimpleCardController;
	})();
	exports.SimpleCardController = SimpleCardController;
	function simpleCard() {
	    'use strict';
	    return {
	        restrict: 'E',
	        transclude: true,
	        require: '?^^rlSimpleCardList',
	        template: "\n\t\t\t<div class=\"card col-xs-12\">\n\t\t\t\t<div class=\"header row\" ng-class=\"{ 'active': card.canOpen && !card.alwaysOpen }\" ng-click=\"card.toggleContent()\">\n\t\t\t\t\t<div class=\"header-template\"></div>\n\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t</div>\n\n\t\t\t\t<ng-form rl-autosave=\"card.autosaveLink\" validate=\"card.validate()\" save=\"card.save()\">\n\t\t\t\t\t<div ng-show=\"card.showContent || card.alwaysOpen\">\n\t\t\t\t\t\t<div class=\"body row\">\n\t\t\t\t\t\t\t<div class=\"content-template\"></div>\n\t\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-form>\n\t\t\t\t<div ng-show=\"hasFooter && card.showContent\">\n\t\t\t\t\t<div class=\"footer row\">\n\t\t\t\t\t\t<div class=\"footer-template\"></div>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'card',
	        scope: {},
	        bindToController: {
	            onOpen: '&',
	            canOpen: '=',
	            alwaysOpen: '=',
	            childLink: '=',
	            validate: '&',
	            save: '&',
	        },
	        link: function (scope, element, attrs, controller, transclude) {
	            transclude(function (clone) {
	                var header = clone.filter('rl-card-header');
	                var content = clone.filter('rl-card-content');
	                var footer = clone.filter('rl-card-footer');
	                var headerArea = element.find('.header-template');
	                headerArea.append(header);
	                var contentArea = element.find('.content-template');
	                contentArea.append(content);
	                scope.hasFooter = (footer.length > 0);
	                if (scope.hasFooter) {
	                    var footerArea = element.find('.footer-template');
	                    footerArea.append(footer);
	                }
	            });
	        },
	    };
	}
	exports.simpleCard = simpleCard;
	//# sourceMappingURL=simpleCard.js.map

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __observable = typescript_angular_utilities_1.services.observable;
	exports.directiveName = 'rlSimpleCardList';
	exports.controllerName = 'SimpleCardListController';
	var SimpleCardListController = (function () {
	    function SimpleCardListController($scope, $attrs, $parse, observableFactory) {
	        var _this = this;
	        this.observable = observableFactory.getInstance();
	        $scope.$watch(function () { return $parse($attrs.alwaysOpen)($scope); }, function (value) {
	            _this.alwaysOpen = value;
	            _this.observable.fire('alwaysOpen', value);
	        });
	    }
	    SimpleCardListController.prototype.registerCard = function (behavior) {
	        behavior.setAlwaysOpen(this.alwaysOpen);
	        var unregisterFunctions = [];
	        unregisterFunctions.push(this.observable.register(behavior.close, 'close'));
	        unregisterFunctions.push(this.observable.register(behavior.setAlwaysOpen, 'alwaysOpen'));
	        return function () {
	            _.each(unregisterFunctions, function (unregister) {
	                unregister();
	            });
	        };
	    };
	    SimpleCardListController.prototype.openCard = function () {
	        return _.all(this.observable.fire('close'));
	    };
	    SimpleCardListController.$inject = ['$scope', '$attrs', '$parse', __observable.factoryName];
	    return SimpleCardListController;
	})();
	exports.SimpleCardListController = SimpleCardListController;
	function simpleCardList() {
	    'use strict';
	    return {
	        restrict: 'AE',
	        controller: exports.controllerName,
	    };
	}
	exports.simpleCardList = simpleCardList;
	//# sourceMappingURL=simpleCardList.js.map

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/bootstrap-touchspin/bootstrap-touchspin.d.ts' />
	// /// <reference path='../../../typings/jquery/jquery.d.ts' />
	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	__webpack_require__(126);
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __string = typescript_angular_utilities_1.services.string;
	var __number = typescript_angular_utilities_1.services.number;
	var componentValidator_service_1 = __webpack_require__(87);
	exports.moduleName = 'rl.ui.components.spinner';
	exports.directiveName = 'rlSpinner';
	exports.controllerName = 'SpinnerController';
	exports.defaultMaxValue = 100000000000000000000;
	var SpinnerController = (function () {
	    function SpinnerController($scope, componentValidatorFactory) {
	        var _this = this;
	        var unregister = $scope.$watch(function () { return _this.ngModel; }, function (value) {
	            if (!_.isUndefined(_this.validator)) {
	                _this.spinnerValidator = componentValidatorFactory.getInstance({
	                    ngModel: _this.ngModel,
	                    $scope: $scope,
	                    validators: [_this.validator],
	                });
	            }
	            unregister();
	        });
	    }
	    SpinnerController.$inject = ['$scope', componentValidator_service_1.factoryName];
	    return SpinnerController;
	})();
	exports.SpinnerController = SpinnerController;
	spinner.$inject = ['$timeout', __string.serviceName, __number.serviceName];
	function spinner($timeout, stringUtility, numberUtility) {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(130),
	        require: '?^ngModel',
	        controller: exports.controllerName,
	        controllerAs: 'spinner',
	        scope: {},
	        bindToController: {
	            min: '=',
	            max: '=',
	            step: '=',
	            decimals: '=',
	            prefix: '@',
	            postfix: '@',
	            roundToStep: '=',
	            ngDisabled: '=',
	            spinnerId: '@',
	            name: '@',
	        },
	        link: function (scope, element, attrs, ngModel) {
	            var spinner = scope.spinner;
	            spinner.ngModel = ngModel;
	            var unbindWatches;
	            scope.$watch('ngDisabled', function (disabled) {
	                if (disabled) {
	                    if (_.isFunction(unbindWatches)) {
	                        unbindWatches();
	                    }
	                }
	                else {
	                    // Initialize the spinner after $timeout to give angular a chance initialize ngModel
	                    $timeout(function () {
	                        var touchspin = element.find('input.spinner').TouchSpin({
	                            min: (spinner.min != null ? spinner.min : 0),
	                            max: (spinner.max != null ? spinner.max : exports.defaultMaxValue),
	                            step: spinner.step,
	                            prefix: spinner.prefix,
	                            postfix: spinner.postfix,
	                            decimals: spinner.decimals,
	                            initval: ngModel.$viewValue,
	                            forcestepdivisibility: spinner.roundToStep ? 'round' : 'none',
	                        });
	                        touchspin.on('change', function () {
	                            scope.$apply(function () {
	                                var spinValue = touchspin.val();
	                                ngModel.$setViewValue(stringUtility.toNumber(spinValue));
	                            });
	                        });
	                        var unbindViewWatch = scope.$watch(function () {
	                            return ngModel.$viewValue;
	                        }, function (newValue) {
	                            touchspin.val(newValue != null ? newValue.toString() : '');
	                        });
	                        var unbindModelWatch = scope.$watch(function () {
	                            return ngModel.$modelValue;
	                        }, function (newModel) {
	                            ngModel.$modelValue = round(newModel);
	                        });
	                        unbindWatches = function () {
	                            unbindViewWatch();
	                            unbindModelWatch();
	                        };
	                    });
	                }
	            });
	            function round(num) {
	                if (num != null && spinner.roundToStep) {
	                    num = numberUtility.roundToStep(num, spinner.step);
	                    num = numberUtility.preciseRound(num, spinner.decimals);
	                }
	                return num;
	            }
	        }
	    };
	}
	angular.module(exports.moduleName, [__string.moduleName, componentValidator_service_1.moduleName])
	    .directive(exports.directiveName, spinner)
	    .controller(exports.controllerName, SpinnerController);
	//# sourceMappingURL=spinner.js.map

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	jQuery = __webpack_require__(12);
	
	__webpack_require__(127);
	__webpack_require__(129);

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(128);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./jquery.bootstrap-touchspin.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./jquery.bootstrap-touchspin.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n *  Bootstrap TouchSpin - v3.0.1\r\n *  A mobile and touch friendly input spinner component for Bootstrap 3.\r\n *  http://www.virtuosoft.eu/code/bootstrap-touchspin/\r\n *\r\n *  Made by István Ujj-Mészáros\r\n *  Under Apache License v2.0 License\r\n */\r\n\r\n.bootstrap-touchspin .input-group-btn-vertical {\r\n  position: relative;\r\n  white-space: nowrap;\r\n  width: 1%;\r\n  vertical-align: middle;\r\n  display: table-cell;\r\n}\r\n\r\n.bootstrap-touchspin .input-group-btn-vertical > .btn {\r\n  display: block;\r\n  float: none;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  padding: 8px 10px;\r\n  margin-left: -1px;\r\n  position: relative;\r\n}\r\n\r\n.bootstrap-touchspin .input-group-btn-vertical .bootstrap-touchspin-up {\r\n  border-radius: 0;\r\n  border-top-right-radius: 4px;\r\n}\r\n\r\n.bootstrap-touchspin .input-group-btn-vertical .bootstrap-touchspin-down {\r\n  margin-top: -2px;\r\n  border-radius: 0;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n\r\n.bootstrap-touchspin .input-group-btn-vertical i {\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 5px;\r\n  font-size: 9px;\r\n  font-weight: normal;\r\n}\r\n", ""]);
	
	// exports


/***/ },
/* 129 */
/***/ function(module, exports) {

	/*
	 *  Bootstrap TouchSpin - v3.0.1
	 *  A mobile and touch friendly input spinner component for Bootstrap 3.
	 *  http://www.virtuosoft.eu/code/bootstrap-touchspin/
	 *
	 *  Made by István Ujj-Mészáros
	 *  Under Apache License v2.0 License
	 */
	(function($) {
	  'use strict';
	
	  var _currentSpinnerId = 0;
	
	  function _scopedEventName(name, id) {
	    return name + '.touchspin_' + id;
	  }
	
	  function _scopeEventNames(names, id) {
	    return $.map(names, function(name) {
	      return _scopedEventName(name, id);
	    });
	  }
	
	  $.fn.TouchSpin = function(options) {
	
	    if (options === 'destroy') {
	      this.each(function() {
	        var originalinput = $(this),
	            originalinput_data = originalinput.data();
	        $(document).off(_scopeEventNames([
	          'mouseup',
	          'touchend',
	          'touchcancel',
	          'mousemove',
	          'touchmove',
	          'scroll',
	          'scrollstart'], originalinput_data.spinnerid).join(' '));
	      });
	      return;
	    }
	
	    var defaults = {
	      min: 0,
	      max: 100,
	      initval: '',
	      step: 1,
	      decimals: 0,
	      stepinterval: 100,
	      forcestepdivisibility: 'round', // none | floor | round | ceil
	      stepintervaldelay: 500,
	      verticalbuttons: false,
	      verticalupclass: 'glyphicon glyphicon-chevron-up',
	      verticaldownclass: 'glyphicon glyphicon-chevron-down',
	      prefix: '',
	      postfix: '',
	      prefix_extraclass: '',
	      postfix_extraclass: '',
	      booster: true,
	      boostat: 10,
	      maxboostedstep: false,
	      mousewheel: true,
	      buttondown_class: 'btn btn-default',
	      buttonup_class: 'btn btn-default',
		  buttondown_txt: '-',
		  buttonup_txt: '+'
	    };
	
	    var attributeMap = {
	      min: 'min',
	      max: 'max',
	      initval: 'init-val',
	      step: 'step',
	      decimals: 'decimals',
	      stepinterval: 'step-interval',
	      verticalbuttons: 'vertical-buttons',
	      verticalupclass: 'vertical-up-class',
	      verticaldownclass: 'vertical-down-class',
	      forcestepdivisibility: 'force-step-divisibility',
	      stepintervaldelay: 'step-interval-delay',
	      prefix: 'prefix',
	      postfix: 'postfix',
	      prefix_extraclass: 'prefix-extra-class',
	      postfix_extraclass: 'postfix-extra-class',
	      booster: 'booster',
	      boostat: 'boostat',
	      maxboostedstep: 'max-boosted-step',
	      mousewheel: 'mouse-wheel',
	      buttondown_class: 'button-down-class',
	      buttonup_class: 'button-up-class',
		  buttondown_txt: 'button-down-txt',
		  buttonup_txt: 'button-up-txt'
	    };
	
	    return this.each(function() {
	
	      var settings,
	          originalinput = $(this),
	          originalinput_data = originalinput.data(),
	          container,
	          elements,
	          value,
	          downSpinTimer,
	          upSpinTimer,
	          downDelayTimeout,
	          upDelayTimeout,
	          spincount = 0,
	          spinning = false;
	
	      init();
	
	
	      function init() {
	        if (originalinput.data('alreadyinitialized')) {
	          return;
	        }
	
	        originalinput.data('alreadyinitialized', true);
	        _currentSpinnerId += 1;
	        originalinput.data('spinnerid', _currentSpinnerId);
	
	
	        if (!originalinput.is('input')) {
	          console.log('Must be an input.');
	          return;
	        }
	
	        _initSettings();
	        _setInitval();
	        _checkValue();
	        _buildHtml();
	        _initElements();
	        _hideEmptyPrefixPostfix();
	        _bindEvents();
	        _bindEventsInterface();
	        elements.input.css('display', 'block');
	      }
	
	      function _setInitval() {
	        if (settings.initval !== '' && originalinput.val() === '') {
	          originalinput.val(settings.initval);
	        }
	      }
	
	      function changeSettings(newsettings) {
	        _updateSettings(newsettings);
	        _checkValue();
	
	        var value = elements.input.val();
	
	        if (value !== '') {
	          value = Number(elements.input.val());
	          elements.input.val(value.toFixed(settings.decimals));
	        }
	      }
	
	      function _initSettings() {
	        settings = $.extend({}, defaults, originalinput_data, _parseAttributes(), options);
	      }
	
	      function _parseAttributes() {
	        var data = {};
	        $.each(attributeMap, function(key, value) {
	          var attrName = 'bts-' + value + '';
	          if (originalinput.is('[data-' + attrName + ']')) {
	            data[key] = originalinput.data(attrName);
	          }
	        });
	        return data;
	      }
	
	      function _updateSettings(newsettings) {
	        settings = $.extend({}, settings, newsettings);
	      }
	
	      function _buildHtml() {
	        var initval = originalinput.val(),
	            parentelement = originalinput.parent();
	
	        if (initval !== '') {
	          initval = Number(initval).toFixed(settings.decimals);
	        }
	
	        originalinput.data('initvalue', initval).val(initval);
	        originalinput.addClass('form-control');
	
	        if (parentelement.hasClass('input-group')) {
	          _advanceInputGroup(parentelement);
	        }
	        else {
	          _buildInputGroup();
	        }
	      }
	
	      function _advanceInputGroup(parentelement) {
	        parentelement.addClass('bootstrap-touchspin');
	
	        var prev = originalinput.prev(),
	            next = originalinput.next();
	
	        var downhtml,
	            uphtml,
	            prefixhtml = '<span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span>',
	            postfixhtml = '<span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span>';
	
	        if (prev.hasClass('input-group-btn')) {
	          downhtml = '<button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button>';
	          prev.append(downhtml);
	        }
	        else {
	          downhtml = '<span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span>';
	          $(downhtml).insertBefore(originalinput);
	        }
	
	        if (next.hasClass('input-group-btn')) {
	          uphtml = '<button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button>';
	          next.prepend(uphtml);
	        }
	        else {
	          uphtml = '<span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span>';
	          $(uphtml).insertAfter(originalinput);
	        }
	
	        $(prefixhtml).insertBefore(originalinput);
	        $(postfixhtml).insertAfter(originalinput);
	
	        container = parentelement;
	      }
	
	      function _buildInputGroup() {
	        var html;
	
	        if (settings.verticalbuttons) {
	          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn-vertical"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-up" type="button"><i class="' + settings.verticalupclass + '"></i></button><button class="' + settings.buttonup_class + ' bootstrap-touchspin-down" type="button"><i class="' + settings.verticaldownclass + '"></i></button></span></div>';
	        }
	        else {
	          html = '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' + settings.buttondown_class + ' bootstrap-touchspin-down" type="button">' + settings.buttondown_txt + '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' + settings.prefix + '</span><span class="input-group-addon bootstrap-touchspin-postfix">' + settings.postfix + '</span><span class="input-group-btn"><button class="' + settings.buttonup_class + ' bootstrap-touchspin-up" type="button">' + settings.buttonup_txt + '</button></span></div>';
	        }
	
	        container = $(html).insertBefore(originalinput);
	
	        $('.bootstrap-touchspin-prefix', container).after(originalinput);
	
	        if (originalinput.hasClass('input-sm')) {
	          container.addClass('input-group-sm');
	        }
	        else if (originalinput.hasClass('input-lg')) {
	          container.addClass('input-group-lg');
	        }
	      }
	
	      function _initElements() {
	        elements = {
	          down: $('.bootstrap-touchspin-down', container),
	          up: $('.bootstrap-touchspin-up', container),
	          input: $('input', container),
	          prefix: $('.bootstrap-touchspin-prefix', container).addClass(settings.prefix_extraclass),
	          postfix: $('.bootstrap-touchspin-postfix', container).addClass(settings.postfix_extraclass)
	        };
	      }
	
	      function _hideEmptyPrefixPostfix() {
	        if (settings.prefix === '') {
	          elements.prefix.hide();
	        }
	
	        if (settings.postfix === '') {
	          elements.postfix.hide();
	        }
	      }
	
	      function _bindEvents() {
	        originalinput.on('keydown', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 38) {
	            if (spinning !== 'up') {
	              upOnce();
	              startUpSpin();
	            }
	            ev.preventDefault();
	          }
	          else if (code === 40) {
	            if (spinning !== 'down') {
	              downOnce();
	              startDownSpin();
	            }
	            ev.preventDefault();
	          }
	        });
	
	        originalinput.on('keyup', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 38) {
	            stopSpin();
	          }
	          else if (code === 40) {
	            stopSpin();
	          }
	        });
	
	        originalinput.on('blur', function() {
	          _checkValue();
	        });
	
	        elements.down.on('keydown', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            if (spinning !== 'down') {
	              downOnce();
	              startDownSpin();
	            }
	            ev.preventDefault();
	          }
	        });
	
	        elements.down.on('keyup', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            stopSpin();
	          }
	        });
	
	        elements.up.on('keydown', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            if (spinning !== 'up') {
	              upOnce();
	              startUpSpin();
	            }
	            ev.preventDefault();
	          }
	        });
	
	        elements.up.on('keyup', function(ev) {
	          var code = ev.keyCode || ev.which;
	
	          if (code === 32 || code === 13) {
	            stopSpin();
	          }
	        });
	
	        elements.down.on('mousedown.touchspin', function(ev) {
	          elements.down.off('touchstart.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          downOnce();
	          startDownSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.down.on('touchstart.touchspin', function(ev) {
	          elements.down.off('mousedown.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          downOnce();
	          startDownSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.up.on('mousedown.touchspin', function(ev) {
	          elements.up.off('touchstart.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          upOnce();
	          startUpSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.up.on('touchstart.touchspin', function(ev) {
	          elements.up.off('mousedown.touchspin');  // android 4 workaround
	
	          if (originalinput.is(':disabled')) {
	            return;
	          }
	
	          upOnce();
	          startUpSpin();
	
	          ev.preventDefault();
	          ev.stopPropagation();
	        });
	
	        elements.up.on('mouseout touchleave touchend touchcancel', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          stopSpin();
	        });
	
	        elements.down.on('mouseout touchleave touchend touchcancel', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          stopSpin();
	        });
	
	        elements.down.on('mousemove touchmove', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          ev.preventDefault();
	        });
	
	        elements.up.on('mousemove touchmove', function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.stopPropagation();
	          ev.preventDefault();
	        });
	
	        $(document).on(_scopeEventNames(['mouseup', 'touchend', 'touchcancel'], _currentSpinnerId).join(' '), function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.preventDefault();
	          stopSpin();
	        });
	
	        $(document).on(_scopeEventNames(['mousemove', 'touchmove', 'scroll', 'scrollstart'], _currentSpinnerId).join(' '), function(ev) {
	          if (!spinning) {
	            return;
	          }
	
	          ev.preventDefault();
	          stopSpin();
	        });
	
	        originalinput.on('mousewheel DOMMouseScroll', function(ev) {
	          if (!settings.mousewheel || !originalinput.is(':focus')) {
	            return;
	          }
	
	          var delta = ev.originalEvent.wheelDelta || -ev.originalEvent.deltaY || -ev.originalEvent.detail;
	
	          ev.stopPropagation();
	          ev.preventDefault();
	
	          if (delta < 0) {
	            downOnce();
	          }
	          else {
	            upOnce();
	          }
	        });
	      }
	
	      function _bindEventsInterface() {
	        originalinput.on('touchspin.uponce', function() {
	          stopSpin();
	          upOnce();
	        });
	
	        originalinput.on('touchspin.downonce', function() {
	          stopSpin();
	          downOnce();
	        });
	
	        originalinput.on('touchspin.startupspin', function() {
	          startUpSpin();
	        });
	
	        originalinput.on('touchspin.startdownspin', function() {
	          startDownSpin();
	        });
	
	        originalinput.on('touchspin.stopspin', function() {
	          stopSpin();
	        });
	
	        originalinput.on('touchspin.updatesettings', function(e, newsettings) {
	          changeSettings(newsettings);
	        });
	      }
	
	      function _forcestepdivisibility(value) {
	        switch (settings.forcestepdivisibility) {
	          case 'round':
	            return (Math.round(value / settings.step) * settings.step).toFixed(settings.decimals);
	          case 'floor':
	            return (Math.floor(value / settings.step) * settings.step).toFixed(settings.decimals);
	          case 'ceil':
	            return (Math.ceil(value / settings.step) * settings.step).toFixed(settings.decimals);
	          default:
	            return value;
	        }
	      }
	
	      function _checkValue() {
	        var val, parsedval, returnval;
	
	        val = originalinput.val();
	
	        if (val === '') {
	          return;
	        }
	
	        if (settings.decimals > 0 && val === '.') {
	          return;
	        }
	
	        parsedval = parseFloat(val);
	
	        if (isNaN(parsedval)) {
	          parsedval = 0;
	        }
	
	        returnval = parsedval;
	
	        if (parsedval.toString() !== val) {
	          returnval = parsedval;
	        }
	
	        if (parsedval < settings.min) {
	          returnval = settings.min;
	        }
	
	        if (parsedval > settings.max) {
	          returnval = settings.max;
	        }
	
	        returnval = _forcestepdivisibility(returnval);
	
	        if (Number(val).toString() !== returnval.toString()) {
	          originalinput.val(returnval);
	          originalinput.trigger('change');
	        }
	      }
	
	      function _getBoostedStep() {
	        if (!settings.booster) {
	          return settings.step;
	        }
	        else {
	          var boosted = Math.pow(2, Math.floor(spincount / settings.boostat)) * settings.step;
	
	          if (settings.maxboostedstep) {
	            if (boosted > settings.maxboostedstep) {
	              boosted = settings.maxboostedstep;
	              value = Math.round((value / boosted)) * boosted;
	            }
	          }
	
	          return Math.max(settings.step, boosted);
	        }
	      }
	
	      function upOnce() {
	        _checkValue();
	
	        value = parseFloat(elements.input.val());
	        if (isNaN(value)) {
	          value = 0;
	        }
	
	        var initvalue = value,
	            boostedstep = _getBoostedStep();
	
	        value = value + boostedstep;
	
	        if (value > settings.max) {
	          value = settings.max;
	          originalinput.trigger('touchspin.on.max');
	          stopSpin();
	        }
	
	        elements.input.val(Number(value).toFixed(settings.decimals));
	
	        if (initvalue !== value) {
	          originalinput.trigger('change');
	        }
	      }
	
	      function downOnce() {
	        _checkValue();
	
	        value = parseFloat(elements.input.val());
	        if (isNaN(value)) {
	          value = 0;
	        }
	
	        var initvalue = value,
	            boostedstep = _getBoostedStep();
	
	        value = value - boostedstep;
	
	        if (value < settings.min) {
	          value = settings.min;
	          originalinput.trigger('touchspin.on.min');
	          stopSpin();
	        }
	
	        elements.input.val(value.toFixed(settings.decimals));
	
	        if (initvalue !== value) {
	          originalinput.trigger('change');
	        }
	      }
	
	      function startDownSpin() {
	        stopSpin();
	
	        spincount = 0;
	        spinning = 'down';
	
	        originalinput.trigger('touchspin.on.startspin');
	        originalinput.trigger('touchspin.on.startdownspin');
	
	        downDelayTimeout = setTimeout(function() {
	          downSpinTimer = setInterval(function() {
	            spincount++;
	            downOnce();
	          }, settings.stepinterval);
	        }, settings.stepintervaldelay);
	      }
	
	      function startUpSpin() {
	        stopSpin();
	
	        spincount = 0;
	        spinning = 'up';
	
	        originalinput.trigger('touchspin.on.startspin');
	        originalinput.trigger('touchspin.on.startupspin');
	
	        upDelayTimeout = setTimeout(function() {
	          upSpinTimer = setInterval(function() {
	            spincount++;
	            upOnce();
	          }, settings.stepinterval);
	        }, settings.stepintervaldelay);
	      }
	
	      function stopSpin() {
	        clearTimeout(downDelayTimeout);
	        clearTimeout(upDelayTimeout);
	        clearInterval(downSpinTimer);
	        clearInterval(upSpinTimer);
	
	        switch (spinning) {
	          case 'up':
	            originalinput.trigger('touchspin.on.stopupspin');
	            originalinput.trigger('touchspin.on.stopspin');
	            break;
	          case 'down':
	            originalinput.trigger('touchspin.on.stopdownspin');
	            originalinput.trigger('touchspin.on.stopspin');
	            break;
	        }
	
	        spincount = 0;
	        spinning = false;
	      }
	
	    });
	
	  };
	
	})(jQuery);


/***/ },
/* 130 */
/***/ function(module, exports) {

	module.exports = "<rl-generic-container selector=\"spinner.ngDisabled\">\r\n\t<template default>\r\n\t\t<div class=\"validation-input-group\">\r\n\t\t\t<label class=\"pull-right error-string\">{{spinner.spinnerValidator.error}}</label>\r\n\t\t\t<div class=\"validation-input\" ng-class=\"{ 'has-error': spinner.ngModel.$invalid }\">\r\n\t\t\t\t<input name=\"{{spinner.name}}\" class=\"spinner\" id=\"{{spinner.spinnerId}}\" type=\"text\" />\r\n\t\t\t</div>\r\n\t\t\t<i class=\"fa fa-exclamation-triangle text-danger validation-icon\" ng-show=\"spinner.ngModel.$error.required\"></i>\r\n\t\t</div>\r\n\t</template>\r\n\t<template when-selector=\"true\">\r\n\t\t<div class=\"input-group\" ng-show=\"spinner.prefix != null && spinner.postfix != null\">\r\n\t\t\t<span class=\"input-group-addon\">{{spinner.prefix}}</span>\r\n\t\t\t<input disabled=\"true\" type=\"text\" ng-model=\"spinner.ngModel.$viewValue\" class=\"form-control\" />\r\n\t\t\t<span class=\"input-group-addon\">{{spinner.postfix}}</span>\r\n\t\t</div>\r\n\t\t<div class=\"input-group\" ng-show=\"spinner.prefix != null && spinner.postfix == null\">\r\n\t\t\t<span class=\"input-group-addon\">{{spinner.prefix}}</span>\r\n\t\t\t<input disabled=\"true\" type=\"text\" ng-model=\"spinner.ngModel.$viewValue\" class=\"form-control\" />\r\n\t\t</div>\r\n\t\t<div class=\"input-group\" ng-show=\"spinner.prefix == null && spinner.postfix != null\">\r\n\t\t\t<input disabled=\"true\" type=\"text\" ng-model=\"spinner.ngModel.$viewValue\" class=\"form-control\" />\r\n\t\t\t<span class=\"input-group-addon\">{{spinner.postfix}}</span>\r\n\t\t</div>\r\n\t\t<div class=\"input-group\" ng-show=\"spinner.prefix == null && spinner.postfix == null\">\r\n\t\t\t<input disabled=\"true\" type=\"text\" ng-model=\"spinner.ngModel.$viewValue\" class=\"form-control\" />\r\n\t\t</div>\r\n\t</template>\r\n</rl-generic-container>"

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __object = typescript_angular_utilities_1.services.object;
	exports.moduleName = 'rl.ui.components.stringWithWatermark';
	exports.directiveName = 'rlStringWithWatermark';
	exports.controllerName = 'StringWithWatermarkController';
	var StringWithWatermarkController = (function () {
	    function StringWithWatermarkController($scope, objectUtility) {
	        var _this = this;
	        $scope.$watch(function () { return _this.string; }, function (value) {
	            _this.hasString = objectUtility.isNullOrEmpty(value) === false;
	        });
	    }
	    StringWithWatermarkController.$inject = ['$scope', __object.serviceName];
	    return StringWithWatermarkController;
	})();
	exports.StringWithWatermarkController = StringWithWatermarkController;
	function stringWithWatermark() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: "\n\t\t\t<span>\n\t\t\t\t<span ng-show=\"controller.hasString\">{{controller.string}}</span>\n\t\t\t\t<span ng-hide=\"controller.hasString\" class=\"watermark\">{{controller.watermark}}</span>\n\t\t\t</span>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'controller',
	        scope: {},
	        bindToController: {
	            string: '@',
	            watermark: '@',
	        }
	    };
	}
	exports.stringWithWatermark = stringWithWatermark;
	angular.module(exports.moduleName, [__object.moduleName])
	    .directive(exports.directiveName, stringWithWatermark)
	    .controller(exports.controllerName, StringWithWatermarkController);
	//# sourceMappingURL=stringWithWatermark.js.map

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var tab_1 = __webpack_require__(133);
	exports.tabDirectiveName = tab_1.directiveName;
	exports.tab = tab_1.tab;
	exports.tabControllerName = tab_1.controllerName;
	exports.TabController = tab_1.TabController;
	var tabset_1 = __webpack_require__(135);
	exports.tabsetDirectiveName = tabset_1.directiveName;
	exports.tabset = tabset_1.tabset;
	exports.tabsetControllerName = tabset_1.controllerName;
	exports.TabsetController = tabset_1.TabsetController;
	exports.moduleName = 'rl.ui.components.tabs';
	angular.module(exports.moduleName, [])
	    .directive(tab_1.directiveName, tab_1.tab)
	    .controller(tab_1.controllerName, tab_1.TabController)
	    .directive(tabset_1.directiveName, tabset_1.tabset)
	    .controller(tabset_1.controllerName, tabset_1.TabsetController);
	//# sourceMappingURL=tabs.module.js.map

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	exports.directiveName = 'rlTab';
	exports.controllerName = 'TabController';
	var TabController = (function () {
	    function TabController($scope) {
	        var _this = this;
	        $scope.$watch('tabForm.$valid', function (isValid) {
	            _this.header.isValid = isValid != null ? isValid : true;
	        });
	    }
	    TabController.$inject = ['$scope'];
	    return TabController;
	})();
	exports.TabController = TabController;
	function tab() {
	    return {
	        restrict: 'E',
	        transclude: true,
	        require: ['^^rlTabset', 'rlTab'],
	        template: __webpack_require__(134),
	        controller: exports.controllerName,
	        controllerAs: 'tab',
	        scope: {},
	        bindToController: {},
	        link: function (scope, element, attrs, controllers, transclude) {
	            transclude(function (clone) {
	                var header = clone.filter('rl-tab-header');
	                var content = clone.filter('rl-tab-content');
	                var footer = clone.filter('rl-tab-footer');
	                var tabset = controllers[0];
	                var tab = controllers[1];
	                tab.header = {
	                    template: header.html(),
	                    isValid: true,
	                };
	                tabset.registerTab(element, tab.header);
	                var contentArea = element.find('.content-template');
	                contentArea.append(content);
	                scope.hasFooter = (footer.length > 0);
	                if (scope.hasFooter) {
	                    var footerArea = element.find('.footer-template');
	                    footerArea.append(footer);
	                }
	            });
	        },
	    };
	}
	exports.tab = tab;
	//# sourceMappingURL=tab.js.map

/***/ },
/* 134 */
/***/ function(module, exports) {

	module.exports = "<div class=\"tab-pane\" ng-class=\"{ 'active': tab.header.isVisible }\">\r\n\t<div class=\"tab-body\">\r\n\t\t<div class=\"content-template\" ng-form=\"tabForm\"></div>\r\n\t\t<div class=\"clearfix\"></div>\r\n\t</div>\r\n\t<div class=\"tab-footer\" ng-show=\"hasFooter\">\r\n\t\t<div class=\"footer-template\"></div>\r\n\t\t<div class=\"clearfix\"></div>\r\n\t</div>\r\n</div>"

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var _ = __webpack_require__(25);
	exports.directiveName = 'rlTabset';
	exports.controllerName = 'TabsetController';
	var TabsetController = (function () {
	    function TabsetController() {
	        this.tabHeaders = [];
	    }
	    TabsetController.prototype.registerTab = function (element, header) {
	        var index = this.findPosition(element);
	        this.tabHeaders[index] = header;
	        header.isVisible = (index === 0);
	    };
	    TabsetController.prototype.select = function (tab) {
	        _.each(this.tabHeaders, function (otherTab) {
	            otherTab.isVisible = false;
	        });
	        tab.isVisible = true;
	    };
	    return TabsetController;
	})();
	exports.TabsetController = TabsetController;
	function tabset() {
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: __webpack_require__(136),
	        controller: exports.controllerName,
	        controllerAs: 'tabset',
	        scope: {},
	        link: {
	            pre: function (scope, element, attrs, tabset) {
	                tabset.findPosition = function (tabElement) {
	                    // find the position of the specified element by iterating over the tabs and finding a matching element
	                    var tabs = element.find('rl-tab');
	                    var num;
	                    _.each(tabs, function (elem, index) {
	                        if (tabElement[0] === elem) {
	                            num = index;
	                            return false;
	                        }
	                    });
	                    return num;
	                };
	            },
	        },
	    };
	}
	exports.tabset = tabset;
	//# sourceMappingURL=tabset.js.map

/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "<div class=\"nav-tabs-dropshadow\">\r\n\t<ul class=\"nav nav-tabs\">\r\n\t\t<li ng-repeat=\"tabHeader in tabset.tabHeaders\" ng-click=\"tabset.select(tabHeader)\"\r\n\t\t\tng-class=\"{ 'active': tabHeader.isVisible }\">\r\n\t\t\t<span ng-bind-html=\"tabHeader.template\"></span>\r\n\t\t\t<i class=\"fa fa-exclamation-triangle text-danger validation-icon\" ng-hide=\"tabHeader.isValid\"></i>\r\n\t\t</li>\r\n\t</ul>\r\n\t<div class=\"tab-content\">\r\n\t\t<div ng-transclude></div>\r\n\t</div>\r\n</div>"

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var componentValidator_service_1 = __webpack_require__(87);
	exports.moduleName = 'rl.ui.components.textarea';
	exports.directiveName = 'rlTextarea';
	exports.controllerName = 'TextareaController';
	var TextareaController = (function () {
	    function TextareaController($element, $scope, componentValidatorFactory) {
	        this.ngModel = $element.controller('ngModel');
	        if (!_.isUndefined(this.validator)) {
	            this.textareaValidator = componentValidatorFactory.getInstance({
	                ngModel: this.ngModel,
	                $scope: $scope,
	                validators: [this.validator],
	            });
	        }
	    }
	    Object.defineProperty(TextareaController.prototype, "text", {
	        get: function () {
	            return this.ngModel.$viewValue;
	        },
	        set: function (value) {
	            this.ngModel.$setViewValue(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextareaController.$inject = ['$element', '$scope', componentValidator_service_1.factoryName];
	    return TextareaController;
	})();
	exports.TextareaController = TextareaController;
	function textarea() {
	    return {
	        restrict: 'E',
	        require: 'ngModel',
	        template: __webpack_require__(138),
	        controller: exports.controllerName,
	        controllerAs: 'textarea',
	        scope: {},
	        bindToController: {
	            name: '@',
	            rows: '=',
	            ngDisabled: '=',
	            label: '@',
	            validator: '=',
	        },
	    };
	}
	exports.textarea = textarea;
	angular.module(exports.moduleName, [componentValidator_service_1.moduleName])
	    .directive(exports.directiveName, textarea)
	    .controller(exports.controllerName, TextareaController);
	//# sourceMappingURL=textarea.js.map

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = "<div class=\"validation-input-group\">\r\n\t<div class=\"field validation-input\" ng-class=\"{ 'has-error': textarea.ngModel.$invalid }\">\r\n\t\t<label ng-show=\"textarea.text\" class=\"show-hide angular-animate\">\r\n\t\t\t{{textarea.label}} <span class=\"pull-right error-string\">{{textarea.textareaValidator.error}}</span>\r\n\t\t</label>\r\n\t\t<textarea class=\"form-control\" ng-model=\"textarea.text\" name=\"{{textarea.name}}\" rows=\"{{textarea.rows}}\" ng-disabled=\"textarea.ngDisabled\" placeholder=\"{{textarea.label}}\"></textarea>\r\n\t</div>\r\n\t<i class=\"fa fa-exclamation-triangle text-danger validation-icon\" ng-show=\"textarea.ngModel.$error.required\"></i>\r\n</div>"

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var componentValidator_service_1 = __webpack_require__(87);
	exports.moduleName = 'rl.ui.components.textbox';
	exports.directiveName = 'rlTextbox';
	exports.controllerName = 'TextboxController';
	var TextboxController = (function () {
	    function TextboxController($element, $scope, componentValidatorFactory) {
	        this.ngModel = $element.controller('ngModel');
	        if (!_.isUndefined(this.validator)) {
	            this.textboxValidator = componentValidatorFactory.getInstance({
	                ngModel: this.ngModel,
	                $scope: $scope,
	                validators: [this.validator],
	            });
	        }
	    }
	    Object.defineProperty(TextboxController.prototype, "text", {
	        get: function () {
	            return this.ngModel.$viewValue;
	        },
	        set: function (value) {
	            this.ngModel.$setViewValue(value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TextboxController.$inject = ['$element', '$scope', componentValidator_service_1.factoryName];
	    return TextboxController;
	})();
	exports.TextboxController = TextboxController;
	function textbox() {
	    return {
	        restrict: 'E',
	        require: 'ngModel',
	        template: __webpack_require__(140),
	        controller: exports.controllerName,
	        controllerAs: 'textbox',
	        scope: {},
	        bindToController: {
	            validator: '=',
	            label: '@',
	        },
	    };
	}
	exports.textbox = textbox;
	angular.module(exports.moduleName, [componentValidator_service_1.moduleName])
	    .directive(exports.directiveName, textbox)
	    .controller(exports.controllerName, TextboxController);
	//# sourceMappingURL=textbox.js.map

/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "<div class=\"validation-input-group\">\r\n\t<div class=\"field validation-input\" ng-class=\"{ 'has-error': textbox.ngModel.$invalid }\">\r\n\t\t<label ng-show=\"textbox.text\" class=\"show-hide angular-animate\">\r\n\t\t\t{{textbox.label}} <span class=\"pull-right error-string\">{{textbox.textboxValidator.error}}</span>\r\n\t\t</label>\r\n\t\t<input  type=\"text\" class=\"form-control angular-animate\" ng-model=\"textbox.text\" placeholder=\"{{textbox.label}}\"/>\r\n\t</div>\r\n\t<i class=\"fa fa-exclamation-triangle text-danger validation-icon\" ng-show=\"textbox.ngModel.$error.required\"></i>\r\n</div>"

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __parentChild = typescript_angular_utilities_1.services.parentChildBehavior;
	var __genericSearch = typescript_angular_utilities_1.services.genericSearchFilter;
	var __objectUtility = typescript_angular_utilities_1.services.object;
	var __arrayUtility = typescript_angular_utilities_1.services.array;
	var __promiseUtility = typescript_angular_utilities_1.services.promise;
	exports.moduleName = 'rl.ui.components.typeahead';
	exports.directiveName = 'rlTypeahead';
	exports.controllerName = 'TypeaheadController';
	var TypeaheadController = (function () {
	    function TypeaheadController($scope, $attrs, $q, parentChild, genericSearchFactory, object, array, promise) {
	        var _this = this;
	        this.$scope = $scope;
	        this.$q = $q;
	        this.parentChild = parentChild;
	        this.array = array;
	        this.promise = promise;
	        this.loading = false;
	        this.addItem = function (item) {
	            if (_this.cachedItems != null) {
	                _this.cachedItems.push(item);
	            }
	        };
	        this.removeItem = function (item) {
	            if (_this.cachedItems != null) {
	                _this.array.remove(_this.cachedItems, item);
	            }
	        };
	        this.searchFilter = genericSearchFactory.getInstance();
	        this.loadDelay = this.useClientSearching ? 100 : 500;
	        this.selection = this.selectionBinding;
	        if (this.hasSelection == null) {
	            this.hasSelection = false;
	        }
	        if (this.placeholder == null) {
	            this.placeholder = 'Search';
	        }
	        if (this.showSearch == null) {
	            this.showSearch = true;
	        }
	        this.useScopeSelection = object.isNullOrEmpty($attrs.selection) === false;
	        this.hasTransform = object.isNullOrEmpty($attrs.transform) === false;
	        this.useApply = object.isNullOrEmpty($attrs.apply) === false;
	        this.parentChild.registerChildBehavior(this.childLink, {
	            add: this.addItem,
	            remove: this.removeItem,
	        });
	        $scope.$watch(function () { return _this.selection; }, function (value) {
	            _this.hasSelection = _.isObject(value);
	            _this.setSelection(value);
	        });
	        $scope.$watch(function () { return _this.selectionBinding; }, function (value) {
	            if (value == null) {
	                _this.selection = null;
	            }
	        });
	    }
	    TypeaheadController.prototype.setSelection = function (object) {
	        if (this.hasSelection != null) {
	            this.hasSelection = this.hasSelection;
	        }
	        if (this.useScopeSelection) {
	            this.selection = object;
	        }
	        if (_.isFunction(this.select)) {
	            this.select({ value: object, hasSelection: this.hasSelection });
	        }
	    };
	    TypeaheadController.prototype.transform = function (object) {
	        if (this.hasTransform && object != null) {
	            return this.transformInParent({
	                value: object,
	            });
	        }
	        return object;
	    };
	    TypeaheadController.prototype.getItems = function (search) {
	        var _this = this;
	        if (!this.useClientSearching) {
	            return this.getItemsInParent({
	                search: search,
	            });
	        }
	        else {
	            this.searchFilter.searchText = search;
	            if (this.cachedItems != null) {
	                return this.$q.when(this.filter(this.cachedItems));
	            }
	            else {
	                return this.$q.when(this.getItemsInParent()).then(function (data) {
	                    _this.cachedItems = data;
	                    return _this.filter(data);
	                });
	            }
	        }
	    };
	    TypeaheadController.prototype.applyItem = function () {
	        var _this = this;
	        if (this.useApply && this.hasSelection) {
	            var request = this.apply({ value: this.selection });
	            if (this.promise.isPromise(request)) {
	                return request.then(function () {
	                    _this.removeItem(_this.selection);
	                    _this.selection = null;
	                });
	            }
	            else if (!_.isUndefined(request)) {
	                this.removeItem(this.selection);
	                this.selection = null;
	            }
	        }
	        return this.$q.when();
	    };
	    TypeaheadController.prototype.filter = function (list) {
	        var _this = this;
	        return _.filter(list, function (item) { return _this.searchFilter.filter(item); });
	    };
	    TypeaheadController.$inject = ['$scope',
	        '$attrs',
	        '$q',
	        __parentChild.serviceName,
	        __genericSearch.factoryName,
	        __objectUtility.serviceName,
	        __arrayUtility.serviceName,
	        __promiseUtility.serviceName];
	    return TypeaheadController;
	})();
	exports.TypeaheadController = TypeaheadController;
	function typeahead() {
	    'use strict';
	    return {
	        restrict: 'E',
	        template: __webpack_require__(142),
	        controller: exports.controllerName,
	        controllerAs: 'typeahead',
	        scope: {},
	        bindToController: {
	            childLink: '=',
	            selectionBinding: '=selection',
	            hasSelection: '=',
	            select: '&',
	            transformInParent: '&transform',
	            getItemsInParent: '&getItems',
	            placeholder: '@',
	            useClientSearching: '=',
	            hasError: '=',
	            showSearch: '=',
	            apply: '&',
	        },
	    };
	}
	exports.typeahead = typeahead;
	angular.module(exports.moduleName, [
	    __parentChild.moduleName,
	    __genericSearch.moduleName,
	    __objectUtility.moduleName,
	    __arrayUtility.moduleName,
	    __promiseUtility.moduleName])
	    .directive(exports.directiveName, typeahead)
	    .controller(exports.controllerName, TypeaheadController);
	//# sourceMappingURL=typeahead.js.map

/***/ },
/* 142 */
/***/ function(module, exports) {

	module.exports = "<div class=\"input-group\" ng-class=\"{ 'has-error': typeahead.hasError }\">\r\n\t<input type=\"text\" ng-model=\"typeahead.selection\" class=\"form-control\"\r\n\t\tplaceholder=\"{{typeahead.placeholder}}\" typeahead=\"object as typeahead.transform(object) for object in typeahead.getItems($viewValue)\"\r\n\t\ttypeahead-loading=\"typeahead.loading\" typeahead-wait-ms=\"typeahead.loadDelay\" />\r\n\t<div class=\"input-group-addon\" ng-if=\"typeahead.showSearch\">\r\n\t\t<rl-busy loading=\"typeahead.loading\"></rl-busy>\r\n\t\t<span ng-hide=\"typeahead.loading\">\r\n\t\t\t<i class=\"fa fa-search\" ng-hide=\"typeahead.hasSelection\"></i>\r\n\t\t\t<i class=\"fa fa-check\" ng-show=\"typeahead.hasSelection\"></i>\r\n\t\t</span>\r\n\t</div>\r\n\t<div class=\"input-group-btn\" ng-if=\"typeahead.useApply\">\r\n\t\t<rl-button-async type=\"default\" action=\"typeahead.applyItem()\" right-aligned=\"true\" ng-disabled=\"!typeahead.hasSelection\">\r\n\t\t\t<i class=\"fa fa-plus new\"></i>\r\n\t\t</rl-button-async>\r\n\t</div>\r\n</div>"

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	exports.moduleName = 'rl.components.userRating';
	exports.directiveName = 'rlUserRating';
	exports.controllerName = 'UserRatingController';
	var UserRatingController = (function () {
	    function UserRatingController($scope) {
	        var _this = this;
	        this.$scope = $scope;
	        this.stars = [];
	        var rangeSize = this.$scope.range != null ? this.$scope.range : 5;
	        // css style requires the stars to show right to left. Reverse the list so the highest value is first
	        var range = _.range(1, rangeSize + 1).reverse();
	        _.each(range, function (rating) {
	            _this.stars.push({
	                value: rating,
	                filled: false,
	            });
	        });
	        var unbind = this.$scope.$watch('ngModel', function (value) {
	            _this.updateStarView(_this.$scope.ngModel.$viewValue);
	            unbind();
	        });
	    }
	    UserRatingController.prototype.setRating = function (rating) {
	        this.$scope.ngModel.$setViewValue(rating);
	        this.updateStarView(rating);
	    };
	    UserRatingController.prototype.updateStarView = function (rating) {
	        _.each(this.stars, function (star) {
	            if (star.value <= rating) {
	                star.filled = true;
	            }
	            else {
	                star.filled = false;
	            }
	        });
	    };
	    UserRatingController.$inject = ['$scope'];
	    return UserRatingController;
	})();
	exports.UserRatingController = UserRatingController;
	function userRating() {
	    'use strict';
	    return {
	        restrict: 'E',
	        require: 'ngModel',
	        template: "\n\t\t\t<span class=\"rating\">\n\t\t\t\t<span class=\"star\" ng-repeat=\"star in userRating.stars\" ng-class=\"{ 'filled': star.filled }\" ng-click=\"userRating.setRating(star.value)\"></span>\n\t\t\t</span>\n\t\t",
	        controller: exports.controllerName,
	        controllerAs: 'userRating',
	        scope: {
	            range: '=',
	        },
	        link: function (scope, element, attrs, ngModel) {
	            scope.ngModel = ngModel;
	        },
	    };
	}
	exports.userRating = userRating;
	angular.module(exports.moduleName, [])
	    .directive(exports.directiveName, userRating)
	    .controller(exports.controllerName, UserRatingController);
	//# sourceMappingURL=userRating.js.map

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path='../../../typings/commonjs.d.ts' />
	'use strict';
	var angular = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var componentValidator_service_1 = __webpack_require__(87);
	exports.moduleName = 'rl.ui.components.validationGroup';
	exports.directiveName = 'rlValidationGroup';
	exports.controllerName = 'ValidationGroupController';
	var ValidationGroupController = (function () {
	    function ValidationGroupController($scope, componentValidatorFactory) {
	        var _this = this;
	        var unbind = $scope.$watch('validationGroupForm', function (form) {
	            if (!_.isUndefined(_this.validator)) {
	                _this.groupValidator = componentValidatorFactory.getInstance({
	                    form: $scope.validationGroupForm,
	                    $scope: $scope,
	                    validators: [_this.validator],
	                    alwaysValidate: true,
	                });
	            }
	            unbind();
	        });
	    }
	    ValidationGroupController.$inject = ['$scope', componentValidator_service_1.factoryName];
	    return ValidationGroupController;
	})();
	exports.ValidationGroupController = ValidationGroupController;
	function validationGroup() {
	    return {
	        restrict: 'E',
	        transclude: true,
	        template: __webpack_require__(145),
	        controller: exports.controllerName,
	        controllerAs: 'group',
	        scope: {},
	        bindToController: {
	            validator: '=',
	        },
	    };
	}
	exports.validationGroup = validationGroup;
	angular.module(exports.moduleName, [componentValidator_service_1.moduleName])
	    .directive(exports.directiveName, validationGroup)
	    .controller(exports.controllerName, ValidationGroupController);
	//# sourceMappingURL=validationGroup.js.map

/***/ },
/* 145 */
/***/ function(module, exports) {

	module.exports = "<div ng-form=\"validationGroupForm\">\r\n\t<div ng-show=\"validationGroupForm.$error.customValidation\">\r\n\t\t<i class=\"fa fa-exclamation-triangle text-danger validation-icon\"></i>\r\n\t\t<label class=\"error-string\">{{group.groupValidator.error}}</label>\r\n\t</div>\r\n\t<div ng-transclude></div>\r\n</div>"

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var autosaveDialog = __webpack_require__(147);
	exports.autosaveDialog = autosaveDialog;
	var breakpoints = __webpack_require__(154);
	exports.breakpoints = breakpoints;
	var componentValidator = __webpack_require__(87);
	exports.componentValidator = componentValidator;
	var contentProvider = __webpack_require__(158);
	exports.contentProvider = contentProvider;
	var dialog = __webpack_require__(149);
	exports.dialog = dialog;
	var documentWrapper = __webpack_require__(159);
	exports.documentWrapper = documentWrapper;
	var jquery = __webpack_require__(90);
	exports.jquery = jquery;
	var templateLoader = __webpack_require__(91);
	exports.templateLoader = templateLoader;
	var windowWrapper = __webpack_require__(155);
	exports.windowWrapper = windowWrapper;
	exports.moduleName = 'rl.ui.services';
	angular.module(exports.moduleName, [
	    autosaveDialog.moduleName,
	    breakpoints.moduleName,
	    componentValidator.moduleName,
	    contentProvider.moduleName,
	    dialog.moduleName,
	    documentWrapper.moduleName,
	    jquery.moduleName,
	    templateLoader.moduleName,
	    windowWrapper.moduleName,
	]);
	//# sourceMappingURL=services.module.js.map

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __promise = typescript_angular_utilities_1.services.promise;
	var autosaveDialog_service_1 = __webpack_require__(148);
	var autosaveDialog_controller_1 = __webpack_require__(153);
	__export(__webpack_require__(148));
	__export(__webpack_require__(153));
	exports.moduleName = 'rl.ui.services.autosaveDialog';
	angular.module(exports.moduleName, [__promise.moduleName])
	    .service(autosaveDialog_service_1.serviceName, autosaveDialog_service_1.AutosaveDialogService)
	    .controller(autosaveDialog_controller_1.controllerName, autosaveDialog_controller_1.AutosaveDialogController);
	//# sourceMappingURL=autosaveDialog.module.js.map

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var dialog_service_1 = __webpack_require__(149);
	var autosaveDialog_controller_1 = __webpack_require__(153);
	exports.serviceName = 'autosaveDialog';
	var __autosave = typescript_angular_utilities_1.services.autosave;
	var __promise = typescript_angular_utilities_1.services.promise;
	var AutosaveDialogService = (function () {
	    function AutosaveDialogService($rootScope, dialog, autosaveFactory, promise) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.dialog = dialog;
	        this.autosaveFactory = autosaveFactory;
	        this.promise = promise;
	        this.autosaveCloseHandler = function (explicit) {
	            if (explicit) {
	                return true;
	            }
	            return _this.autosave.autosave(_this.data);
	        };
	        this.setForm = function (form) {
	            _this.autosave.contentForm = form;
	        };
	    }
	    AutosaveDialogService.prototype.open = function (options) {
	        var _this = this;
	        this.promise.resolvePromises(options.resolve).then(function (resolveData) {
	            var scope = options.scope;
	            if (scope == null) {
	                scope = _this.$rootScope.$new();
	                options.scope = scope;
	            }
	            if (options.data == null) {
	                options.data = {};
	            }
	            _this.autosave = _this.autosaveFactory.getInstance({
	                save: options.save,
	                validate: options.validate,
	            });
	            scope.form = options.form;
	            scope.formGetter = options.formGetter;
	            scope.setForm = _this.setForm;
	            _this.data = _.extend(options.data, resolveData);
	            scope.dialog = _this.data;
	            var dialogOptions = options;
	            dialogOptions.controller = autosaveDialog_controller_1.controllerName;
	            dialogOptions.controllerAs = 'controller';
	            _this.dialog.open(options, _this.autosaveCloseHandler);
	        });
	    };
	    AutosaveDialogService.$inject = ['$rootScope', dialog_service_1.serviceName, __autosave.factoryName, __promise.serviceName];
	    return AutosaveDialogService;
	})();
	exports.AutosaveDialogService = AutosaveDialogService;
	//# sourceMappingURL=autosaveDialog.service.js.map

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ng = __webpack_require__(1);
	var baseDialog = __webpack_require__(150);
	exports.baseDialog = baseDialog;
	exports.moduleName = 'rl.ui.services.dialog';
	exports.serviceName = 'dialog';
	var DialogService = (function () {
	    function DialogService(dialog) {
	        this.dialog = dialog;
	    }
	    DialogService.prototype.open = function (options, closeHandler) {
	        return this.dialog.open(options, closeHandler);
	    };
	    return DialogService;
	})();
	exports.DialogService = DialogService;
	function dialogServiceProvider() {
	    'use strict';
	    var _this = this;
	    var provider = {
	        setImplementation: function (dialogImplementation) {
	            _this.dialogImplementation = dialogImplementation;
	        },
	        $get: function (baseDialog) {
	            var dialogImplementation = _this.dialogImplementation != null
	                ? _this.dialogImplementation
	                : baseDialog;
	            return new DialogService(dialogImplementation);
	        },
	    };
	    provider.$get.$inject = [baseDialog.serviceName];
	    return provider;
	}
	exports.dialogServiceProvider = dialogServiceProvider;
	ng.module(exports.moduleName, [baseDialog.moduleName])
	    .provider(exports.serviceName, dialogServiceProvider);
	//# sourceMappingURL=dialog.service.js.map

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __promise = typescript_angular_utilities_1.services.promise;
	var baseDialog_controller_1 = __webpack_require__(151);
	var baseDialog_service_1 = __webpack_require__(152);
	__export(__webpack_require__(151));
	__export(__webpack_require__(152));
	exports.moduleName = 'rl.ui.services.dialog.baseDialog';
	angular.module(exports.moduleName, [__promise.moduleName])
	    .controller(baseDialog_controller_1.controllerName, baseDialog_controller_1.BaseDialogController)
	    .service(baseDialog_service_1.serviceName, baseDialog_service_1.BaseDialogService);
	//# sourceMappingURL=baseDialog.module.js.map

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var baseDialog_service_1 = __webpack_require__(152);
	exports.controllerName = 'BaseDialogController';
	var BaseDialogController = (function () {
	    function BaseDialogController($scope, $controller, baseDialog) {
	        var controller;
	        if ($scope.modalController != null) {
	            var locals = $scope.resolveData || {};
	            $scope.resolveData = null;
	            locals.$scope = $scope;
	            controller = $controller($scope.modalController, locals);
	        }
	        $scope.$on('modal.closing', baseDialog.modalClosing);
	        return controller;
	    }
	    BaseDialogController.$inject = ['$scope', '$controller', baseDialog_service_1.serviceName];
	    return BaseDialogController;
	})();
	exports.BaseDialogController = BaseDialogController;
	//# sourceMappingURL=baseDialog.controller.js.map

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __promise = typescript_angular_utilities_1.services.promise;
	var baseDialog_controller_1 = __webpack_require__(151);
	exports.serviceName = 'baseDialog';
	var BaseDialogService = (function () {
	    function BaseDialogService($modal, $rootScope, promise) {
	        var _this = this;
	        this.$modal = $modal;
	        this.$rootScope = $rootScope;
	        this.promise = promise;
	        this.modalClosing = function (event, reason, explicitlyClosed) {
	            var canClose = true;
	            if (_.isFunction(_this.closeHandler)) {
	                canClose = _this.closeHandler(explicitlyClosed);
	            }
	            if (!canClose) {
	                event.preventDefault();
	            }
	        };
	    }
	    BaseDialogService.prototype.open = function (options, closeHandler) {
	        var _this = this;
	        if (options == null) {
	            options = {};
	        }
	        var dialogInstance = {
	            close: function () { },
	            dismiss: function () { },
	        };
	        this.promise.resolvePromises(options.resolve).then(function (results) {
	            _this.closeHandler = closeHandler;
	            options = _this.configureModalSettings(options, results);
	            var modalInstance = _this.$modal.open(options);
	            dialogInstance.close = modalInstance.close;
	            dialogInstance.dismiss = modalInstance.dismiss;
	        });
	        return dialogInstance;
	    };
	    BaseDialogService.prototype.configureModalSettings = function (options, resolveData) {
	        var modalScope = options.scope;
	        if (modalScope == null) {
	            modalScope = this.$rootScope.$new();
	        }
	        if (options.resolveToDialog) {
	            if (options.dialogAs != null) {
	                modalScope[options.dialogAs] = resolveData;
	            }
	            else {
	                modalScope = _.extend(modalScope, resolveData);
	            }
	        }
	        else {
	            modalScope.resolveData = resolveData;
	        }
	        modalScope.modalController = options.controller;
	        options.resolve = null;
	        options.controller = baseDialog_controller_1.controllerName;
	        options.scope = modalScope;
	        return options;
	    };
	    BaseDialogService.$inject = ['$modal', '$rootScope', __promise.serviceName];
	    return BaseDialogService;
	})();
	exports.BaseDialogService = BaseDialogService;
	//# sourceMappingURL=baseDialog.service.js.map

/***/ },
/* 153 */
/***/ function(module, exports) {

	'use strict';
	exports.controllerName = 'AutosaveDialogController';
	var AutosaveDialogController = (function () {
	    function AutosaveDialogController($scope) {
	        this.$scope = $scope;
	        if ($scope.form != null) {
	            var unbind = $scope.$watch($scope.form, function (form) {
	                if (form != null) {
	                    $scope.setForm(form);
	                    unbind();
	                }
	            });
	        }
	        else if ($scope.formGetter != null) {
	            var unbind = $scope.$watch(function () { return $scope.formGetter($scope); }, function (form) {
	                if (form != null) {
	                    $scope.setForm(form);
	                    unbind();
	                }
	            });
	        }
	    }
	    AutosaveDialogController.$inject = ['$scope'];
	    return AutosaveDialogController;
	})();
	exports.AutosaveDialogController = AutosaveDialogController;
	//# sourceMappingURL=autosaveDialog.controller.js.map

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var angular = __webpack_require__(1);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var windowWrapper_service_1 = __webpack_require__(155);
	var visibleBreakpoint_service_1 = __webpack_require__(156);
	var breakpoints_service_1 = __webpack_require__(157);
	__export(__webpack_require__(36));
	__export(__webpack_require__(156));
	__export(__webpack_require__(157));
	exports.moduleName = 'rl.ui.services.breakpoints';
	angular.module(exports.moduleName, [
	    typescript_angular_utilities_1.services.observable.moduleName,
	    windowWrapper_service_1.moduleName,
	])
	    .constant('resizeDebounceMilliseconds', 500)
	    .service(visibleBreakpoint_service_1.visibleBreakpointServiceName, visibleBreakpoint_service_1.VisibleBreakpointService)
	    .service(breakpoints_service_1.breakpointServiceName, breakpoints_service_1.BreakpointService);
	//# sourceMappingURL=breakpoints.module.js.map

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(12);
	exports.moduleName = 'rl.ui.services.windowWrapper';
	exports.serviceName = 'windowWrapper';
	var WindowService = (function () {
	    function WindowService() {
	        this.windowControl = $(window);
	    }
	    WindowService.prototype.resize = function (callback) {
	        this.windowControl.resize(callback);
	    };
	    WindowService.prototype.scrollTop = function () {
	        return this.windowControl.scrollTop();
	    };
	    WindowService.prototype.scroll = function (handler) {
	        this.windowControl.scroll(handler);
	    };
	    WindowService.prototype.height = function () {
	        return this.windowControl.height();
	    };
	    return WindowService;
	})();
	angular.module(exports.moduleName, [])
	    .service(exports.serviceName, WindowService);
	//# sourceMappingURL=windowWrapper.service.js.map

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(12);
	/*
	 * Implementation also requires the following elements to be inserted on the page:
	 *   <div class="device-xs visible-xs"></div>
	 *   <div class="device-sm visible-sm"></div>
	 *   <div class="device-md visible-md"></div>
	 *   <div class="device-lg visible-lg"></div>
	 * They have been inserted into index.html for your convenience.
	 */
	exports.visibleBreakpointServiceName = 'visibleBreakpoint';
	var VisibleBreakpointService = (function () {
	    function VisibleBreakpointService() {
	    }
	    VisibleBreakpointService.prototype.isVisible = function (breakpoint) {
	        // jquery gets the breakpoint trigger directives listed above on line 3
	        return $('.device-' + breakpoint).is(':visible');
	    };
	    return VisibleBreakpointService;
	})();
	exports.VisibleBreakpointService = VisibleBreakpointService;
	//# sourceMappingURL=visibleBreakpoint.service.js.map

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var windowWrapper_service_1 = __webpack_require__(155);
	var visibleBreakpoint_service_1 = __webpack_require__(156);
	var breakpoint_1 = __webpack_require__(36);
	exports.breakpointServiceName = 'breakpoints';
	var __observable = typescript_angular_utilities_1.services.observable;
	var BreakpointService = (function () {
	    function BreakpointService($rootScope, visibleBreakpoints, resizeDebounceMilliseconds, windowService, observableFactory) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.visibleBreakpoints = visibleBreakpoints;
	        this.updateBreakpoint = function () {
	            var newBreakPoint = _this.getBreakpoint();
	            if (newBreakPoint !== _this.currentBreakpoint) {
	                _this.$rootScope.$apply(function () {
	                    _this.currentBreakpoint = newBreakPoint;
	                    _this.observable.fire('window.breakpointChanged', _this.currentBreakpoint);
	                });
	            }
	        };
	        this.currentBreakpoint = this.getBreakpoint();
	        this.observable = observableFactory.getInstance();
	        var efficientResize = _.debounce(this.updateBreakpoint, resizeDebounceMilliseconds, {
	            leading: true,
	            trailing: true,
	            maxWait: resizeDebounceMilliseconds,
	        });
	        windowService.resize(efficientResize);
	    }
	    BreakpointService.prototype.getBreakpoint = function () {
	        if (this.visibleBreakpoints.isVisible(breakpoint_1.lg)) {
	            return breakpoint_1.lg;
	        }
	        else if (this.visibleBreakpoints.isVisible(breakpoint_1.md)) {
	            return breakpoint_1.md;
	        }
	        else if (this.visibleBreakpoints.isVisible(breakpoint_1.sm)) {
	            return breakpoint_1.sm;
	        }
	        else {
	            return breakpoint_1.xs;
	        }
	    };
	    BreakpointService.prototype.isBreakpoint = function (breakpoint) {
	        return this.currentBreakpoint === breakpoint;
	    };
	    BreakpointService.prototype.register = function (action) {
	        return this.observable.register(action, 'window.breakpointChanged');
	    };
	    BreakpointService.$inject = ['$rootScope', visibleBreakpoint_service_1.visibleBreakpointServiceName, 'resizeDebounceMilliseconds', windowWrapper_service_1.serviceName, __observable.factoryName];
	    return BreakpointService;
	})();
	exports.BreakpointService = BreakpointService;
	//# sourceMappingURL=breakpoints.service.js.map

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// /// <reference path="../../../typings/jquery/jquery.d.ts" />
	'use strict';
	var ng = __webpack_require__(1);
	var _ = __webpack_require__(25);
	var typescript_angular_utilities_1 = __webpack_require__(17);
	var __observable = typescript_angular_utilities_1.services.observable;
	exports.moduleName = 'rl.utilities.services.contentProvider';
	exports.serviceName = 'contentProviderFactory';
	var ContentProviderService = (function () {
	    function ContentProviderService(observableFactory) {
	        var _this = this;
	        this.setTranscludeContent = function (transcludeFunction) {
	            if (_.isFunction(transcludeFunction)) {
	                transcludeFunction(function (clone) {
	                    _this.setContent(clone);
	                });
	            }
	            else {
	                _this.setContent(null);
	            }
	        };
	        this.observable = observableFactory.getInstance();
	    }
	    ContentProviderService.prototype.setContent = function (content) {
	        this.content = content;
	        this.observable.fire('contentChanged');
	    };
	    ContentProviderService.prototype.register = function (action, selector) {
	        var _this = this;
	        if (this.content != null) {
	            action(this.getContent(selector));
	        }
	        return this.observable.register(function () {
	            action(_this.getContent(selector));
	        }, 'contentChanged');
	    };
	    ContentProviderService.prototype.getContent = function (selector) {
	        if (selector != null) {
	            return this.content.filter(selector);
	        }
	        return this.content;
	    };
	    return ContentProviderService;
	})();
	contentProviderServiceFactory.$inject = [__observable.factoryName];
	function contentProviderServiceFactory(observableFactory) {
	    'use strict';
	    return {
	        getInstance: function () {
	            return new ContentProviderService(observableFactory);
	        }
	    };
	}
	ng.module(exports.moduleName, [__observable.moduleName])
	    .factory(exports.serviceName, contentProviderServiceFactory);
	//# sourceMappingURL=contentProvider.service.js.map

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);
	var $ = __webpack_require__(12);
	exports.moduleName = 'rl.ui.services.documentWrapper';
	exports.serviceName = 'documentWrapper';
	var DocumentService = (function () {
	    function DocumentService() {
	        this.documentControl = $(document);
	    }
	    DocumentService.prototype.height = function () {
	        return this.documentControl.height();
	    };
	    return DocumentService;
	})();
	angular.module(exports.moduleName, [])
	    .service(exports.serviceName, DocumentService);
	//# sourceMappingURL=documentWrapper.service.js.map

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var viewData = __webpack_require__(161);
	exports.viewData = viewData;
	//# sourceMappingURL=types.module.js.map

/***/ },
/* 161 */
/***/ function(module, exports) {

	'use strict';
	//# sourceMappingURL=viewData.js.map

/***/ }
/******/ ]);