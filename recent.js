(function (window, $) {

    var CAMPAIGN_ROWS_SELECTOR = ".md-recent-campaigns tbody tr";

    function getCampaigns() {
        return $(".md-recent-campaigns tbody tr span").map(function (idx, value) {
           return {
               name: value.textContent,
               id: idx
           }
        }).toArray();
    }

    function hideCampaigns(campaigns) {
        var ids = campaigns.map(function (campaign) {
            return campaign.id;
        });

        $(CAMPAIGN_ROWS_SELECTOR).each(function (idx, row) {
           if (ids.indexOf(idx) != -1) {
               $(row).hide();
           }
        })
    }

    function showAll() {
        $(CAMPAIGN_ROWS_SELECTOR).each(function (idx, row) {
            $(row).show();
        });
    }

    function search(searchInput) {
        if (!searchString) {
            showAll();
        }

        var searchString = searchInput.toLowerCase();
        var campaigns = getCampaigns();
        var excludedCampaigns = campaigns.filter(function (campaign) {
            return campaign.name.toLowerCase().indexOf(searchString) == -1;
        });

        hideCampaigns(excludedCampaigns);
    }

    window.MD = {
        search: search
    };
})(window, $);