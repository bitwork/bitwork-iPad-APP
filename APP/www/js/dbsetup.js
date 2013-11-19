(function($){

    var modelDependencies = [
            "js/model/calendar.js",
            "js/model/contacts.js",
            "js/model/link.js",
            "js/model/mplstammdaten.js",
            "js/model/news.js",
            "js/model/productfamilies.js",
            "js/model/productgroups.js",
            "js/model/productoptions.js",
            "js/model/productplatforms.js",
            "js/model/products.js"
        ],
        dbReady = false,
        loadCounter = 0,
        jsLoadHelper = function(){
            loadCounter++;
            if(loadCounter === modelDependencies.length){
                dbReady = true;
                $('body').trigger('js-model-ready');
            }
        };

    for(var i=0; i<modelDependencies.length; i++) {
        $.getScript(modelDependencies[i],jsLoadHelper);
    }

    var dbSetup = function(){
        //setup DB connection
        persistence.store.websql.config(persistence, "bitwork_ipadapp", 'bitwork iPadApp database', 5 * 1024 * 1024);
        //create DB schema
        persistence.schemaSync();

        //Sync with sharepoint
        NewsModel.sharePointSync();
        CalendarModel.sharePointSync();
        equipmentproductsModel.sharePointSync();
        LinkModel.sharePointSync();
        ContactsModel.sharePointSync();

        ProductGroupsModel.sharePointSync();
        ProductFamiliesModel.sharePointSync();
        ProductPlatformsModel.sharePointSync();
        ProductsModel.sharePointSync();

        productoptionsModel.sharePointSync();
        //documentsUtils.sharePointSync();
    };

    //DB setup when model is ready to load
    $('body').on('js-model-ready', dbSetup);
})(jQuery)