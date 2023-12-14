function embedCSS() {

    var css = '.igv-navbar {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  box-sizing: border-box;\n  width: 100%;\n  color: #444;\n  font-size: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  line-height: 32px;\n  padding-left: 8px;\n  padding-right: 8px;\n  margin-top: 2px;\n  margin-bottom: 6px;\n  height: 32px;\n  border-style: solid;\n  border-radius: 3px;\n  border-width: thin;\n  border-color: #bfbfbf;\n  background-color: #f3f3f3;\n}\n.igv-navbar .igv-navbar-left-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 32px;\n  line-height: 32px;\n}\n.igv-navbar .igv-navbar-left-container .igv-logo {\n  width: 34px;\n  height: 32px;\n  margin-right: 8px;\n}\n.igv-navbar .igv-navbar-left-container .igv-current-genome {\n  height: 32px;\n  margin-left: 4px;\n  margin-right: 4px;\n  user-select: none;\n  line-height: 32px;\n  vertical-align: middle;\n  text-align: center;\n}\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n}\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-chromosome-select-widget-container {\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center;\n  height: 100%;\n  width: 125px;\n  margin-right: 4px;\n}\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-chromosome-select-widget-container select {\n  display: block;\n  cursor: pointer;\n  width: 100px;\n  height: 75%;\n  outline: none;\n  font-size: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n}\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 8px;\n  height: 22px;\n}\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group .igv-search-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 240px;\n  height: 22px;\n  line-height: 22px;\n}\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group .igv-search-container input.igv-search-input {\n  cursor: text;\n  width: 85%;\n  height: 22px;\n  line-height: 22px;\n  font-size: 12px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  text-align: left;\n  padding-left: 8px;\n  margin-right: 8px;\n  outline: none;\n  border-style: solid;\n  border-radius: 3px;\n  border-width: thin;\n  border-color: #bfbfbf;\n  background-color: white;\n}\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group .igv-search-container .igv-search-icon-container {\n  cursor: pointer;\n  height: 16px;\n  width: 16px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n}\n.igv-navbar .igv-navbar-left-container .igv-navbar-genomic-location .igv-locus-size-group .igv-windowsize-panel-container {\n  margin-left: 4px;\n  user-select: none;\n}\n.igv-navbar .igv-navbar-right-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.igv-navbar .igv-navbar-right-container .igv-navbar-toggle-button-container {\n  position: relative;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n}\n.igv-navbar .igv-navbar-right-container .igv-navbar-toggle-button-container-hidden {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget {\n  color: #737373;\n  font-size: 18px;\n  margin-left: 8px;\n  user-select: none;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget div {\n  cursor: pointer;\n  margin-left: unset;\n  margin-right: unset;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget div:first-child {\n  height: 20px;\n  width: 20px;\n  margin-left: unset;\n  margin-right: 4px;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget div:last-child {\n  height: 20px;\n  width: 20px;\n  margin-left: 4px;\n  margin-right: unset;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget div:nth-child(even) {\n  display: block;\n  height: fit-content;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget input {\n  display: block;\n  width: 125px;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget svg {\n  display: block;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 {\n  color: #737373;\n  font-size: 18px;\n  height: 32px;\n  line-height: 32px;\n  margin-left: 8px;\n  user-select: none;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 div {\n  cursor: pointer;\n  margin-left: unset;\n  margin-right: unset;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 div:first-child {\n  height: 20px;\n  width: 20px;\n  margin-left: unset;\n  margin-right: 4px;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 div:last-child {\n  height: 20px;\n  width: 20px;\n  margin-left: 4px;\n  margin-right: unset;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 div:nth-child(even) {\n  width: 0;\n  height: 0;\n  display: none;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 input {\n  width: 0;\n  height: 0;\n  display: none;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-900 svg {\n  display: block;\n}\n.igv-navbar .igv-navbar-right-container .igv-zoom-widget-hidden {\n  display: none;\n}\n\n.igv-navbar-button {\n  display: block;\n  box-sizing: unset;\n  padding-left: 6px;\n  padding-right: 6px;\n  height: 18px;\n  text-transform: capitalize;\n  user-select: none;\n  line-height: 18px;\n  text-align: center;\n  vertical-align: middle;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 11px;\n  font-weight: 200;\n  color: #737373;\n  background-color: #f3f3f3;\n  border-color: #737373;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 6px;\n}\n\n.igv-navbar-button:hover {\n  cursor: pointer;\n}\n\n.igv-navbar-button-clicked {\n  color: white;\n  background-color: #737373;\n}\n\n.igv-navbar-icon-button {\n  cursor: pointer;\n  position: relative;\n  width: 24px;\n  height: 24px;\n  margin-left: 4px;\n  margin-right: 4px;\n  border: none;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.igv-navbar-icon-button > div:first-child {\n  z-index: 512;\n  position: absolute;\n  top: 36px;\n  left: -18px;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.igv-navbar-icon-button > div:last-child {\n  z-index: 512;\n  position: absolute;\n  top: 36px;\n  left: 18px;\n  width: 24px;\n  height: 24px;\n  border: none;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.igv-navbar-text-button {\n  cursor: pointer;\n  position: relative;\n  margin-left: 2px;\n  margin-right: 2px;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.igv-navbar-text-button > div:nth-child(2) {\n  z-index: 512;\n  position: absolute;\n  top: 36px;\n  left: 0;\n  width: 38px;\n  height: 18px;\n  border: none;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.igv-navbar-text-button > div:nth-child(3) {\n  z-index: 512;\n  position: absolute;\n  top: 36px;\n  left: 42px;\n  width: 38px;\n  height: 18px;\n  border: none;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n#igv-text-button-label {\n  text-anchor: middle;\n  dominant-baseline: middle;\n}\n\n.igv-navbar-text-button-svg-inactive rect {\n  stroke: #737373;\n  fill: white;\n}\n.igv-navbar-text-button-svg-inactive text {\n  fill: #737373;\n}\n.igv-navbar-text-button-svg-inactive tspan {\n  dominant-baseline: middle;\n}\n\n.igv-navbar-text-button-svg-hover rect {\n  stroke: #737373;\n  fill: #737373;\n}\n.igv-navbar-text-button-svg-hover text {\n  fill: white;\n}\n.igv-navbar-text-button-svg-hover tspan {\n  dominant-baseline: middle;\n}\n\n#igv-save-svg-group rect {\n  stroke: #737373;\n  fill: white;\n}\n#igv-save-svg-group text {\n  fill: #737373;\n}\n\n#igv-save-svg-group:hover rect {\n  stroke: #737373;\n  fill: #737373;\n}\n#igv-save-svg-group:hover text {\n  fill: white;\n}\n\n#igv-save-png-group rect {\n  stroke: #737373;\n  fill: white;\n}\n#igv-save-png-group text {\n  fill: #737373;\n}\n\n#igv-save-png-group:hover rect {\n  stroke: #737373;\n  fill: #737373;\n}\n#igv-save-png-group:hover text {\n  fill: white;\n}\n\n.igv-zoom-in-notice-container {\n  z-index: 256;\n  position: absolute;\n  top: 8px;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n.igv-zoom-in-notice-container > div {\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  width: 100%;\n  height: 100%;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: #3f3f3f;\n}\n\n.igv-zoom-in-notice {\n  position: absolute;\n  top: 10px;\n  left: 50%;\n}\n.igv-zoom-in-notice div {\n  position: relative;\n  left: -50%;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  color: #3f3f3f;\n  background-color: rgba(255, 255, 255, 0.51);\n  z-index: 64;\n}\n\n.igv-container-spinner {\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1024;\n  width: 24px;\n  height: 24px;\n  pointer-events: none;\n  color: #737373;\n}\n\n.igv-multi-locus-close-button {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  padding-left: 2px;\n  padding-right: 2px;\n  width: 12px;\n  height: 12px;\n  color: #666666;\n  background-color: white;\n  z-index: 1000;\n}\n.igv-multi-locus-close-button > svg {\n  vertical-align: top;\n}\n\n.igv-multi-locus-close-button:hover {\n  cursor: pointer;\n  color: #434343;\n}\n\n.igv-multi-locus-ruler-label {\n  z-index: 64;\n  position: absolute;\n  top: 2px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n}\n.igv-multi-locus-ruler-label > div {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  color: rgb(16, 16, 16);\n  background-color: white;\n}\n.igv-multi-locus-ruler-label > div {\n  cursor: pointer;\n}\n\n.igv-multi-locus-ruler-label-square-dot {\n  z-index: 64;\n  position: absolute;\n  left: 50%;\n  top: 5%;\n  transform: translate(-50%, 0%);\n  background-color: white;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.igv-multi-locus-ruler-label-square-dot > div:first-child {\n  width: 14px;\n  height: 14px;\n}\n.igv-multi-locus-ruler-label-square-dot > div:last-child {\n  margin-left: 16px;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgb(16, 16, 16);\n}\n\n.igv-ruler-sweeper {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  top: 26px;\n  bottom: 0;\n  left: 0;\n  width: 0;\n  z-index: 99999;\n  background-color: rgba(68, 134, 247, 0.25);\n}\n\n.igv-ruler-tooltip {\n  pointer-events: none;\n  z-index: 128;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1px;\n  height: 32px;\n  background-color: transparent;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.igv-ruler-tooltip > div {\n  pointer-events: none;\n  width: 128px;\n  height: auto;\n  padding: 1px;\n  color: #373737;\n  font-size: 10px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  background-color: white;\n  border-style: solid;\n  border-width: thin;\n  border-color: #373737;\n}\n\n.igv-track-label {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n  width: auto;\n  height: auto;\n  max-width: 50%;\n  padding-left: 4px;\n  padding-right: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: small;\n  font-weight: 400;\n  text-align: center;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  border-color: #444;\n  border-radius: 2px;\n  border-style: solid;\n  border-width: thin;\n  background-color: white;\n  z-index: 128;\n  cursor: pointer;\n}\n\n.igv-track-label:hover,\n.igv-track-label:focus,\n.igv-track-label:active {\n  background-color: #e8e8e8;\n}\n\n.igv-track-label-popup-shim {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-top: 4px;\n}\n\n.igv-center-line {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 8;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  border-left-style: dashed;\n  border-left-width: thin;\n  border-right-style: dashed;\n  border-right-width: thin;\n}\n\n.igv-center-line-wide {\n  background-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(127, 127, 127, 0.51);\n  border-right-color: rgba(127, 127, 127, 0.51);\n}\n\n.igv-center-line-thin {\n  background-color: rgba(0, 0, 0, 0);\n  border-left-color: rgba(127, 127, 127, 0.51);\n  border-right-color: rgba(0, 0, 0, 0);\n}\n\n.igv-cursor-guide-horizontal {\n  display: none;\n  pointer-events: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 1px;\n  z-index: 1;\n  margin-left: 50px;\n  margin-right: 54px;\n  border-top-style: dotted;\n  border-top-width: thin;\n  border-top-color: rgba(127, 127, 127, 0.76);\n}\n\n.igv-cursor-guide-vertical {\n  pointer-events: none;\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 1px;\n  z-index: 1;\n  border-left-style: dotted;\n  border-left-width: thin;\n  border-left-color: rgba(127, 127, 127, 0.76);\n  display: none;\n}\n\n.igv-user-feedback {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 512px;\n  height: 360px;\n  z-index: 2048;\n  background-color: white;\n  border-color: #a2a2a2;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  color: #444;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.igv-user-feedback div:first-child {\n  position: relative;\n  height: 24px;\n  width: 100%;\n  background-color: white;\n  border-bottom-color: #a2a2a2;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n}\n.igv-user-feedback div:first-child div {\n  position: absolute;\n  top: 2px;\n  width: 16px;\n  height: 16px;\n  background-color: transparent;\n}\n.igv-user-feedback div:first-child div:first-child {\n  left: 8px;\n}\n.igv-user-feedback div:first-child div:last-child {\n  cursor: pointer;\n  right: 8px;\n}\n.igv-user-feedback div:last-child {\n  width: 100%;\n  height: calc(100% - 24px);\n  border-width: 0;\n}\n.igv-user-feedback div:last-child div {\n  width: auto;\n  height: auto;\n  margin: 8px;\n}\n\n.igv-generic-dialog-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 300px;\n  height: 200px;\n  border-color: #7F7F7F;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  z-index: 2048;\n  background-color: white;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.igv-generic-dialog-container .igv-generic-dialog-header {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  height: 24px;\n  cursor: move;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-color: #7F7F7F;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n  background-color: #eee;\n}\n.igv-generic-dialog-container .igv-generic-dialog-header div {\n  margin-right: 4px;\n  margin-bottom: 2px;\n  height: 12px;\n  width: 12px;\n  color: #7F7F7F;\n}\n.igv-generic-dialog-container .igv-generic-dialog-header div:hover {\n  cursor: pointer;\n  color: #444;\n}\n.igv-generic-dialog-container .igv-generic-dialog-one-liner {\n  color: #373737;\n  width: 95%;\n  height: 24px;\n  line-height: 24px;\n  text-align: left;\n  margin-top: 8px;\n  padding-left: 8px;\n  overflow-wrap: break-word;\n  background-color: white;\n}\n.igv-generic-dialog-container .igv-generic-dialog-label-input {\n  margin-top: 8px;\n  width: 95%;\n  height: 24px;\n  color: #373737;\n  line-height: 24px;\n  padding-left: 8px;\n  background-color: white;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.igv-generic-dialog-container .igv-generic-dialog-label-input div {\n  width: 30%;\n  height: 100%;\n  font-size: 16px;\n  text-align: right;\n  padding-right: 8px;\n  background-color: white;\n}\n.igv-generic-dialog-container .igv-generic-dialog-label-input input {\n  display: block;\n  height: 100%;\n  width: 100%;\n  padding-left: 4px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  color: #373737;\n  text-align: left;\n  outline: none;\n  border-style: solid;\n  border-width: thin;\n  border-color: #7F7F7F;\n  background-color: white;\n}\n.igv-generic-dialog-container .igv-generic-dialog-label-input input {\n  width: 50%;\n  font-size: 16px;\n}\n.igv-generic-dialog-container .igv-generic-dialog-input {\n  margin-top: 8px;\n  width: calc(100% - 16px);\n  height: 24px;\n  color: #373737;\n  line-height: 24px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center;\n}\n.igv-generic-dialog-container .igv-generic-dialog-input input {\n  display: block;\n  height: 100%;\n  width: 100%;\n  padding-left: 4px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  color: #373737;\n  text-align: left;\n  outline: none;\n  border-style: solid;\n  border-width: thin;\n  border-color: #7F7F7F;\n  background-color: white;\n}\n.igv-generic-dialog-container .igv-generic-dialog-input input {\n  font-size: 16px;\n}\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel {\n  width: 100%;\n  height: 28px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center;\n}\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div {\n  margin-top: 32px;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  width: 75px;\n  height: 28px;\n  line-height: 28px;\n  text-align: center;\n  border-color: transparent;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 2px;\n}\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div:first-child {\n  margin-left: 32px;\n  margin-right: 0;\n  background-color: #5ea4e0;\n}\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div:last-child {\n  margin-left: 0;\n  margin-right: 32px;\n  background-color: #c4c4c4;\n}\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div:first-child:hover {\n  cursor: pointer;\n  background-color: #3b5c7f;\n}\n.igv-generic-dialog-container .igv-generic-dialog-ok-cancel div:last-child:hover {\n  cursor: pointer;\n  background-color: #7f7f7f;\n}\n.igv-generic-dialog-container .igv-generic-dialog-ok {\n  width: 100%;\n  height: 36px;\n  margin-top: 32px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center;\n}\n.igv-generic-dialog-container .igv-generic-dialog-ok div {\n  width: 98px;\n  height: 36px;\n  line-height: 36px;\n  text-align: center;\n  color: white;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  border-color: white;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 4px;\n  background-color: #2B81AF;\n}\n.igv-generic-dialog-container .igv-generic-dialog-ok div:hover {\n  cursor: pointer;\n  background-color: #25597f;\n}\n\n.igv-generic-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2048;\n  background-color: white;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.igv-generic-container div:first-child {\n  cursor: move;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  width: 100%;\n  background-color: #dddddd;\n}\n.igv-generic-container div:first-child i {\n  display: block;\n  color: #5f5f5f;\n  cursor: pointer;\n  width: 14px;\n  height: 14px;\n  margin-right: 8px;\n  margin-bottom: 4px;\n}\n\n.igv-menu-popup {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: max-content;\n  z-index: 512;\n  cursor: pointer;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: small;\n  font-weight: 400;\n  color: #4b4b4b;\n  background: white;\n  border-radius: 4px;\n  border-color: #7F7F7F;\n  border-style: solid;\n  border-width: thin;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-end;\n  text-align: left;\n}\n.igv-menu-popup > div:not(:first-child) {\n  width: 100%;\n}\n.igv-menu-popup > div:not(:first-child) > div {\n  background: white;\n}\n.igv-menu-popup > div:not(:first-child) > div.context-menu {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.igv-menu-popup > div:not(:first-child) > div:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom-color: transparent;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n}\n.igv-menu-popup > div:not(:first-child) > div:hover {\n  background: #efefef;\n}\n\n.igv-menu-popup-shim {\n  padding-left: 8px;\n  padding-right: 8px;\n  padding-bottom: 1px;\n  padding-top: 1px;\n}\n\n.igv-menu-popup-header {\n  position: relative;\n  width: 100%;\n  height: 24px;\n  cursor: move;\n  border-top-color: transparent;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-color: #7F7F7F;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n  background-color: #eee;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n}\n.igv-menu-popup-header div {\n  margin-right: 4px;\n  height: 12px;\n  width: 12px;\n  color: #7F7F7F;\n}\n.igv-menu-popup-header div:hover {\n  cursor: pointer;\n  color: #444;\n}\n\n.igv-menu-popup-check-container {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 20px;\n  margin-right: 4px;\n  background-color: transparent;\n}\n.igv-menu-popup-check-container div {\n  padding-top: 2px;\n  padding-left: 8px;\n}\n.igv-menu-popup-check-container div:first-child {\n  position: relative;\n  width: 12px;\n  height: 12px;\n}\n.igv-menu-popup-check-container div:first-child svg {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n}\n\n.igv-user-feedback {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 512px;\n  height: 360px;\n  z-index: 2048;\n  background-color: white;\n  border-color: #a2a2a2;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: medium;\n  font-weight: 400;\n  color: #444;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n}\n.igv-user-feedback div:first-child {\n  position: relative;\n  height: 24px;\n  width: 100%;\n  background-color: white;\n  border-bottom-color: #a2a2a2;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n}\n.igv-user-feedback div:first-child div {\n  position: absolute;\n  top: 2px;\n  width: 16px;\n  height: 16px;\n  background-color: transparent;\n}\n.igv-user-feedback div:first-child div:first-child {\n  left: 8px;\n}\n.igv-user-feedback div:first-child div:last-child {\n  cursor: pointer;\n  right: 8px;\n}\n.igv-user-feedback div:last-child {\n  width: 100%;\n  height: calc(100% - 24px);\n  border-width: 0;\n}\n.igv-user-feedback div:last-child div {\n  width: auto;\n  height: auto;\n  margin: 8px;\n}\n\n.igv-loading-spinner-container {\n  z-index: 1024;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 32px;\n  height: 32px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n}\n.igv-loading-spinner-container > div {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 4px solid rgba(128, 128, 128, 0.5);\n  border-top-color: rgb(255, 255, 255);\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n}\n\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n.igv-roi-menu {\n  position: absolute;\n  z-index: 512;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: small;\n  font-weight: 400;\n  color: #4b4b4b;\n  background-color: white;\n  width: 192px;\n  border-radius: 4px;\n  border-color: #7F7F7F;\n  border-style: solid;\n  border-width: thin;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.igv-roi-menu > div:first-child {\n  height: 24px;\n  border-top-color: transparent;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-color: #7F7F7F;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n  background-color: #eee;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n}\n.igv-roi-menu > div:first-child > div {\n  margin-right: 4px;\n  height: 12px;\n  width: 12px;\n  color: #7F7F7F;\n}\n.igv-roi-menu > div:first-child > div:hover {\n  cursor: pointer;\n  color: #444;\n}\n.igv-roi-menu > div:last-child {\n  background-color: white;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom-color: transparent;\n  border-bottom-style: solid;\n  border-bottom-width: 0;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  text-align: start;\n  vertical-align: middle;\n}\n.igv-roi-menu > div:last-child > div {\n  height: 24px;\n  padding-left: 4px;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n  border-bottom-color: #7f7f7f;\n}\n.igv-roi-menu > div:last-child > div:not(:first-child):hover {\n  cursor: pointer;\n  background-color: rgba(127, 127, 127, 0.1);\n}\n.igv-roi-menu > div:last-child div:first-child {\n  font-style: italic;\n  text-align: center;\n  padding-right: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.igv-roi-menu > div:last-child > div:last-child {\n  border-bottom-width: 0;\n  border-bottom-color: transparent;\n}\n\n.igv-roi-placeholder {\n  font-style: normal;\n  color: rgba(75, 75, 75, 0.6);\n}\n\n.igv-roi-table {\n  position: absolute;\n  z-index: 1024;\n  width: min-content;\n  max-width: 1600px;\n  border-color: #7f7f7f;\n  border-radius: 4px;\n  border-style: solid;\n  border-width: thin;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: white;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  cursor: default;\n}\n.igv-roi-table > div {\n  height: 24px;\n  font-size: 14px;\n  text-align: start;\n  vertical-align: middle;\n  line-height: 24px;\n}\n.igv-roi-table > div:first-child {\n  border-color: transparent;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-top-width: 0;\n  border-bottom-color: #7f7f7f;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n  background-color: #eee;\n  cursor: move;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.igv-roi-table > div:first-child > div:first-child {\n  text-align: center;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-left: 4px;\n  margin-right: 4px;\n  width: calc(100% - 4px - 12px);\n}\n.igv-roi-table > div:first-child > div:last-child {\n  margin-right: 4px;\n  margin-bottom: 2px;\n  height: 12px;\n  width: 12px;\n  color: #7f7f7f;\n}\n.igv-roi-table > div:first-child > div:last-child > svg {\n  display: block;\n}\n.igv-roi-table > div:first-child > div:last-child:hover {\n  cursor: pointer;\n  color: #444;\n}\n.igv-roi-table > .igv-roi-table-description {\n  padding: 4px;\n  margin-left: 4px;\n  word-break: break-all;\n  overflow-y: auto;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  background-color: transparent;\n}\n.igv-roi-table > .igv-roi-table-goto-explainer {\n  margin-top: 5px;\n  margin-left: 4px;\n  color: #7F7F7F;\n  font-style: italic;\n  height: 24px;\n  border-top: solid lightgray;\n  background-color: transparent;\n}\n.igv-roi-table > .igv-roi-table-column-titles {\n  height: 24px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: stretch;\n  align-items: stretch;\n  padding-right: 16px;\n  background-color: white;\n  border-top-color: #7f7f7f;\n  border-top-style: solid;\n  border-top-width: thin;\n  border-bottom-color: #7f7f7f;\n  border-bottom-style: solid;\n  border-bottom-width: thin;\n}\n.igv-roi-table > .igv-roi-table-column-titles > div {\n  font-size: 14px;\n  vertical-align: middle;\n  line-height: 24px;\n  text-align: left;\n  margin-left: 4px;\n  height: 24px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-right-color: #7f7f7f;\n  border-right-style: solid;\n  border-right-width: thin;\n}\n.igv-roi-table > .igv-roi-table-column-titles > div:last-child {\n  border-right: unset;\n}\n.igv-roi-table > .igv-roi-table-row-container {\n  overflow: auto;\n  resize: both;\n  max-width: 1600px;\n  height: 360px;\n  background-color: transparent;\n  display: flex;\n  flex-flow: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.igv-roi-table > .igv-roi-table-row-container > .igv-roi-table-row {\n  height: 24px;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: stretch;\n  align-items: stretch;\n}\n.igv-roi-table > .igv-roi-table-row-container > .igv-roi-table-row > div {\n  font-size: 14px;\n  vertical-align: middle;\n  line-height: 24px;\n  text-align: left;\n  margin-left: 4px;\n  height: 24px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-right-color: transparent;\n  border-right-style: solid;\n  border-right-width: thin;\n}\n.igv-roi-table > .igv-roi-table-row-container > .igv-roi-table-row > div:last-child {\n  border-right: unset;\n}\n.igv-roi-table > .igv-roi-table-row-container > .igv-roi-table-row-hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.igv-roi-table > div:last-child {\n  height: 32px;\n  line-height: 32px;\n  border-top-color: #7f7f7f;\n  border-top-style: solid;\n  border-top-width: thin;\n  border-bottom-color: transparent;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom-width: 0;\n  background-color: #eee;\n  display: flex;\n  flex-flow: row;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.igv-roi-table-row-selected {\n  background-color: rgba(0, 0, 0, 0.125);\n}\n\n.igv-roi-table-button {\n  cursor: pointer;\n  height: 20px;\n  user-select: none;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: middle;\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 13px;\n  font-weight: 400;\n  color: black;\n  padding-left: 6px;\n  padding-right: 6px;\n  background-color: rgb(239, 239, 239);\n  border-color: black;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 3px;\n}\n\n.igv-roi-table-button:hover {\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.13);\n}\n\n.igv-roi-region {\n  z-index: 64;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  pointer-events: none;\n  overflow: visible;\n  margin-top: 44px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n}\n.igv-roi-region > div {\n  position: relative;\n  width: 100%;\n  height: 8px;\n  pointer-events: auto;\n}\n\n.igv-roi-menu-row {\n  height: 24px;\n  padding-left: 8px;\n  font-size: small;\n  text-align: start;\n  vertical-align: middle;\n  line-height: 24px;\n  background-color: white;\n}\n\n.igv-roi-menu-row-edit-description {\n  width: -webkit-fill-available;\n  font-size: small;\n  text-align: start;\n  vertical-align: middle;\n  background-color: white;\n  padding-left: 4px;\n  padding-right: 4px;\n  padding-bottom: 4px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: stretch;\n  align-items: stretch;\n}\n.igv-roi-menu-row-edit-description > label {\n  margin-left: 2px;\n  margin-bottom: 0;\n  display: block;\n  width: -webkit-fill-available;\n}\n.igv-roi-menu-row-edit-description > input {\n  display: block;\n  margin-left: 2px;\n  margin-right: 2px;\n  margin-bottom: 1px;\n  width: -webkit-fill-available;\n}\n\n[class*=container] {\n  padding: 0;\n  width: initial;\n}\n\n.igv-container {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-top: 4px;\n  padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  min-height: 160px;\n}\n\n.igv-viewport {\n  position: relative;\n  margin-top: 5px;\n  line-height: 1;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.igv-viewport-content {\n  position: relative;\n  width: 100%;\n}\n.igv-viewport-content > canvas {\n  position: relative;\n  display: block;\n}\n\n.igv-column-container {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: stretch;\n  width: 100%;\n}\n\n.igv-column-shim {\n  width: 1px;\n  margin-left: 2px;\n  margin-right: 2px;\n  background-color: #545453;\n}\n\n.igv-axis-column {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n  width: 50px;\n}\n.igv-axis-column > div {\n  position: relative;\n  margin-top: 5px;\n  width: 100%;\n}\n.igv-axis-column > div > div {\n  z-index: 512;\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  width: fit-content;\n  height: fit-content;\n  background-color: transparent;\n  display: grid;\n  align-items: start;\n  justify-items: center;\n}\n.igv-axis-column > div > div > input {\n  display: block;\n  margin: unset;\n  cursor: pointer;\n}\n\n.igv-column {\n  position: relative;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.igv-sample-info-column {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.igv-sample-name-column {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n}\n\n.igv-scrollbar-column {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n  width: 14px;\n}\n.igv-scrollbar-column > div {\n  position: relative;\n  margin-top: 5px;\n  width: 14px;\n}\n.igv-scrollbar-column > div > div {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 2px;\n  width: 8px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: #c4c4c4;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.igv-scrollbar-column > div > div:hover {\n  background-color: #c4c4c4;\n}\n\n.igv-track-drag-column {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n  width: 12px;\n  background-color: white;\n}\n.igv-track-drag-column > .igv-track-drag-handle {\n  z-index: 512;\n  position: relative;\n  cursor: pointer;\n  margin-top: 5px;\n  width: 100%;\n  border-style: solid;\n  border-width: 0;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.igv-track-drag-column .igv-track-drag-handle-color {\n  background-color: #c4c4c4;\n}\n.igv-track-drag-column .igv-track-drag-handle-hover-color {\n  background-color: #787878;\n}\n.igv-track-drag-column .igv-track-drag-handle-selected-color {\n  background-color: #0963fa;\n}\n.igv-track-drag-column > .igv-track-drag-shim {\n  position: relative;\n  margin-top: 5px;\n  width: 100%;\n  border-style: solid;\n  border-width: 0;\n}\n\n.igv-gear-menu-column {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  box-sizing: border-box;\n  height: 100%;\n  width: 28px;\n}\n.igv-gear-menu-column > div {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  margin-top: 5px;\n  width: 100%;\n  background: white;\n}\n.igv-gear-menu-column > div > div {\n  position: relative;\n  margin-top: 4px;\n  width: 16px;\n  height: 16px;\n  color: #7F7F7F;\n}\n.igv-gear-menu-column > div > div:hover {\n  cursor: pointer;\n  color: #444;\n}\n\n/*# sourceMappingURL=dom.css.map */\n'

    var style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    style.innerHTML = css

    document.head.append(style)

}

export default embedCSS
