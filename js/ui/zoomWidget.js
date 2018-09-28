/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2016 University of California San Diego
 * Author: Jim Robinson
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Created by dat on 9/1/16.
 */
var igv = (function (igv) {

    "use strict";

    igv.ZoomWidget = function (browser, $parent) {

        let $div,
            svg;

        browser.$zoomContainer = $('<div class="igv-zoom-widget">');
        $parent.append(browser.$zoomContainer);

        // zoom out
        $div = $('<div>');
        browser.$zoomContainer.append($div);

        svg = igv.createIcon("minus-circle");
        $div.append(svg);

        $div.on('click', function () {
            browser.zoomOut();
        });

        // Range slider
        $div = $('<div>');
        browser.$zoomContainer.append($div);

        this.$slider = $('<input type="range"/>');
        $div.append(this.$slider);

        this.$slider.on('change', function (e) {
            browser.zoomWithRangePercentage(e.target.value/100.0);
        });

        // zoom in
        $div = $('<div>');
        browser.$zoomContainer.append($div);

        svg = igv.createIcon("plus-circle");
        $div.append(svg);

        $div.on('click', function () {
            browser.zoomIn();
        });

        this.currentChr = undefined;

        const self = this;
        browser.on('locuschange', function () {
            self.updateSlider(browser);
        })
    };

    igv.ZoomWidget.prototype.updateSlider = function (browser) {

        const viewport = browser.trackViews[0].viewports[0];
        const referenceFrame = viewport.genomicState.referenceFrame;

        const chromosomeLengthBP = browser.getChromosomeLengthBP(browser.genome, referenceFrame);

        const a = chromosomeLengthBP/viewport.$viewport.width();
        const b = browser.minimumBases()/viewport.$viewport.width();
        const percentage = referenceFrame.bpPerPixel/ Math.abs(a - browser.minimumBases()/viewport.$viewport.width());

        const value = Math.round(100 * (1.0 - percentage));

        this.$slider.val(value);

    };

    return igv;

})(igv || {});
