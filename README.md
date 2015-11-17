# Retina.js

serve high-resolution images to devices with retina displays.

## Usage

#### add lib & config

```
<script src="dist/retina.js"></script>
<script src="src/retina-config.js"></script>  
```

#### set tags

```
<img 
	data-retina-url="assets/images/test/retina.png" 
	data-img-type="normal" 
	data-img-lang="en" 
	alt="img">	
```

#### add assets

```
> tree -L 4                                           
.
└── images
    └── test
        ├── en
        │   ├── retina@1x.png
        │   └── retina@2x.png
        ├── retina@1x.png
        └── retina@2x.png

3 directories, 4 files
```

## Config

#### customize
Customize the rules for assets can be found in the retina-config.js .

```
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
```

#### modifyRetinaImg()

```
modifyRetinaImg(target,src);
Retina.retinaUpdate();
```

## About

- @Author Max
- @Revised Thonatos.Yang

## License

The MIT License (MIT)

Copyright (c) 2015 [Magic Term](https://github.com/MT-Libraries) Libraries

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

