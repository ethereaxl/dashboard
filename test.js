/* global visApi */
class DashboardController {
    constructor(id) {
        this.dashboardId = id;
    }

    applyFilter(widgetId, filterValue) {
        if (typeof visApi !== 'undefined') {
            visApi().setFilterSelectedValues(widgetId, [[filterValue]]);
        }
    }
}

const firstDashboard = new DashboardController("Melnikov");
firstDashboard.applyFilter("testwidget","testvalue");