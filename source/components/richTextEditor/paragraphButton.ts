import * as ng from 'angular';

export var paragraphButtonDirectiveName: string = 'rlParagraphButton';

export interface IParagraphButtonScope extends ng.IScope {
	trigger(): void;
	execCommand(command: string, value: string): void;
}

export function paragraphButton(): ng.IDirective {
	'use strict';
	return {
		restrict: 'E',
		template: `
			<button type="button" class="nw-button paragraph" ng-click="trigger()" ng-disabled="editMode || isDisabled" title="paragraph"></button>
		`,
		link(scope: IParagraphButtonScope): void {
			scope.trigger = (): void => {
				scope.execCommand('formatblock', 'p');
			};
		},
	};
}
