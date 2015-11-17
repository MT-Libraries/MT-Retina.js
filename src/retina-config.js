/**
 * @fileOverview retina config
 * @author Max
 * created at 2014-11-12 17:28
 * 
 * @revised by Thonatos.Yang
 * revised at 2015-11-17
 */

(function () {

    var Retina = window.Retina;

    // define filters
    Retina.setFilters({
        'normal': function (url, base, ratio, lang) {

            var result,
                prefix = '',
                pieces = url.split('/');
            
            // Add language support                   
            if (lang) {
                prefix = lang + '/';
            }
  
            var _postfix = pieces[pieces.length - 1].split('.');            

            // Concat File Path String
            pieces[pieces.length - 1] = prefix + _postfix[0] + '@' + ratio.param + '.' + _postfix[1];

            result = pieces.join('/');
            
            return result;
        },
        'svg': function (url, base, ratio, lang) {
            return url;
        }
    });

    // define config const
    var CONFIG_TYPE = {
        SVG: 'svg',
        NORMAL: 'normal'
    };
        
    // define configs
    var configs = {};

    configs[CONFIG_TYPE.SVG] = {
        public: {
            base: {
                postfix: 'png'
            }
        }
    };
    configs[CONFIG_TYPE.SVG].desktop = {
        filter: 'svg'
    };
    configs[CONFIG_TYPE.SVG].mobile = {
        filter: 'svg'
    };
    configs[CONFIG_TYPE.SVG]['desktop-svg-not-supported'] = {
        filter: 'svg-to-others',
        '1x': {
            param: '1x'
        },
        '2x': {
            param: '1x'
        }
    };
    configs[CONFIG_TYPE.SVG]['mobile-svg-not-supported'] = {
        filter: 'svg-to-others',
        '1x': {
            param: '1x'
        },
        '2x': {
            param: '1x'
        }
    };

    configs[CONFIG_TYPE.NORMAL] = {};
    configs[CONFIG_TYPE.NORMAL].desktop = {
        filter: 'normal',
        lang: {
            en: 'en',
            zh: ''
        },
        '1x': {
            param: '1x'
        },
        '2x': {
            param: '2x'
        }
    };
    configs[CONFIG_TYPE.NORMAL].mobile = {
        filter: 'normal',
        '1x': {
            param: '1x'
        },
        '2x': {
            param: '2x'
        }
    };

    // define platform
    var platform = {
        'desktop': {
            key: 'desktop'
        },
        'mobile': {
            key: 'mobile'
        },
        'desktop-svg-not-supported': {
            key: 'desktop-svg-not-supported',
            parent: 'desktop'
        },
        'mobile-svg-not-supported': {
            key: 'mobile-svg-not-supported',
            parent: 'mobile'
        }
    };

    // define lang const
    var CONFIG_LANG = {
        EN: 'en',
        ZH: "zh"
    };

    // define lang
    var langs = {};
    
    langs[CONFIG_LANG.EN] = {
        lang: 'en'
    };

    langs[CONFIG_LANG.ZH] = {
        lang: ''
    };

    Retina.setConfigs(detectPlatform(), platform, configs, langs);
    Retina.retinaUpdate();

    // platform detect
    function detectPlatform() {
        var result;

        var IS_MOBILE_PLATFORM = false;
        if (!!IS_MOBILE_PLATFORM) {
            result = 'mobile';
        } else {
            if (navigator.userAgent.indexOf('MSIE 8.0') != -1) {
                result = 'desktop-svg-not-supported';
            } else {
                result = 'desktop';
            }
        }

        return result;
    }
})();