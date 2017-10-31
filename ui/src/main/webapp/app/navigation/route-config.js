/*
 * Copyright 2017 Crown Copyright
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

angular.module('app').config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false)

    $routeProvider
        .when('/graph', {
            template: '<graph-view></graph-view>',
            title: 'Graph'
        })
        .when('/settings', {
            template: '<settings-view></settings-view>',
            title: 'Settings'
        })
        .when('/raw', {
            template: '<raw></raw>',
            title: 'Raw'
        })
        .when('/table', {
            template: '<results-table></results-table>',
            title: 'Table'
        })
        .when('/', {
            redirectTo: '/graph'
        });
}]);

