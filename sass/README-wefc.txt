Note by Apollo Tang July 29, 2012

	Each foo.sass file in /sass directory will generate a corresponding 
	foo.css file in css/ directory
	
	sass file prefix with underscore will not generate css file. These files 
	are called "partials". Partials are files that imported into another sass file.
	 
	In each sass file "_base.scss" is imported first before any sass styling source.
	In "_base.scss" styling variable is initialized and then libraries and maxin
	are imported.
