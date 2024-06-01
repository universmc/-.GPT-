##----------------------------##
#	   MAGIC MAKEFILE    	   #
##----------------------------##
# MENU#						   #
#	[]CODEX  	     		   #
#	[]BUID	   				   #
#	[]CLEAN					   #
#							   #
#							   #
#							   #
##----------------------------##
#							   #
##----------------------------##



all: mkRF complation build codex

codex:
	@bash models/codex.sh


# Build Repertoires & FIchiers

mkB:
	@bash build.sh

complation: Co-r Co-R

codex:
	@bash models/codex.sh

Co-R:
	@node models/Co-R.js
	
Co-r:
	@node models/Comp.js

models:
	@bash codex.sh

buildHtml:
	@node models/html.js
buildCss:
	@node models/css.js
buildJS:
	@node models/javascript.js

buildJson:
	@node models/json.js

build:  buildHtml buildCss buildJS buildJson


#CLEAN UP

clean-r:
	@rm -rf data/* build/* src/*
clean-R:
	@rm -rf data/ build/ src/
clean: clean-r clean-R