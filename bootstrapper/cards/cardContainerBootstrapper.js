"use strict";
var angular = require('angular');
var _ = require('lodash');
var cardContainerBuilder_service_1 = require('../../source/components/cardContainer/cardContainerBuilder.service');
var CardTestController = (function () {
    function CardTestController(cardContainerBuilderFactory) {
        var items = _.map(_.range(1, 101), function (num) {
            return { name: 'Item' + num, value: Math.floor(Math.random() * 2) + 1 };
        });
        this.builder = cardContainerBuilderFactory.getInstance();
        this.builder.dataSource.buildSimpleDataSource(items);
        this.builder.usePaging();
        this.builder.addColumn({
            label: 'Name',
            size: 6,
            getValue: 'name',
        });
        this.builder.addColumn({
            label: 'Value',
            size: 6,
            getValue: 'value',
            template: '<b>{{myItem.value}}</b>',
        });
        this.builder.renderFilters();
        this.builder.filters.buildModeFilterGroup({
            label: 'Mode Filter',
            type: 'modeFilter',
            getValue: 'value',
            options: [
                {
                    label: 'All',
                    displayAll: true,
                },
                {
                    label: '1',
                    value: 1,
                },
                {
                    label: '2',
                    value: 2,
                },
            ],
        });
    }
    CardTestController.$inject = [cardContainerBuilder_service_1.factoryName];
    return CardTestController;
}());
angular.module('app')
    .controller('CardTestController', CardTestController);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZENvbnRhaW5lckJvb3RzdHJhcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcmRDb250YWluZXJCb290c3RyYXBwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLElBQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBRTVCLDZDQUFtRyxvRUFBb0UsQ0FBQyxDQUFBO0FBT3hLO0lBSUMsNEJBQVksMkJBQXlEO1FBQ3BFLElBQU0sS0FBSyxHQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLFVBQUMsR0FBVztZQUM3RCxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLDJCQUEyQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDdEIsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3RCLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUseUJBQXlCO1NBQ25DLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7WUFDekMsS0FBSyxFQUFFLGFBQWE7WUFDcEIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsUUFBUSxFQUFFLE9BQU87WUFDakIsT0FBTyxFQUFFO2dCQUNSO29CQUNDLEtBQUssRUFBRSxLQUFLO29CQUNaLFVBQVUsRUFBRSxJQUFJO2lCQUNoQjtnQkFDRDtvQkFDQyxLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsQ0FBQztpQkFDUjtnQkFDRDtvQkFDQyxLQUFLLEVBQUUsR0FBRztvQkFDVixLQUFLLEVBQUUsQ0FBQztpQkFDUjthQUNEO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXhDTSwwQkFBTyxHQUFhLENBQUMsMENBQWMsQ0FBQyxDQUFDO0lBeUM3Qyx5QkFBQztBQUFELENBQUMsQUE1Q0QsSUE0Q0M7QUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNuQixVQUFVLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyJ9