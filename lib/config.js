'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ViewTypes = require('./ViewTypes');

var _ViewTypes2 = _interopRequireDefault(_ViewTypes);

var _SummaryPos = require('./SummaryPos');

var _SummaryPos2 = _interopRequireDefault(_SummaryPos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    schedulerWidth: '1000',
    schedulerMaxHeight: 0,
    tableHeaderHeight: 40,

    agendaResourceTableWidth: 160,
    agendaMaxEventWidth: 100,

    dayResourceTableWidth: 160,
    weekResourceTableWidth: 160,
    monthResourceTableWidth: 160,
    quarterResourceTableWidth: 160,
    yearResourceTableWidth: 160,
    customResourceTableWidth: 160,

    dayStationTableWidth: 50,
    weekStationTableWidth: 50,
    monthStationTableWidth: 50,
    quarterStationTableWidth: 50,
    customStationTableWidth: 50,

    dayShiftTableWidth: 10,
    weekShiftTableWidth: 10,
    monthShiftTableWidth: 10,
    quarterShiftTableWidth: 10,
    customShiftTableWidth: 10,

    dayCellWidth: 60,
    weekCellWidth: 120,
    monthCellWidth: 80,
    quarterCellWidth: 80,
    yearCellWidth: 80,
    customCellWidth: 80,

    dayMaxEvents: 99,
    weekMaxEvents: 99,
    monthMaxEvents: 99,
    quarterMaxEvents: 99,
    yearMaxEvents: 99,
    customMaxEvents: 99,

    eventItemHeight: 5,
    eventItemLineHeight: 30,
    nonAgendaSlotMinHeight: 0,
    dayStartFrom: 0,
    dayStopTo: 23,
    defaultEventBgColor: '#80C5F6',
    selectedAreaColor: '#808080',
    nonWorkingTimeHeadColor: '#000000',
    nonWorkingTimeHeadBgColor: '#FFFFFF',
    nonWorkingTimeBodyBgColor: '#E9E9E9',
    workingTimeHeadColor: '#000000',
    workingTimeHeadBgColor: '#FFFFFF',
    workingTimeBodyBgColor: '#FFFFFF',
    summaryColor: '#666',
    summaryPos: _SummaryPos2.default.TopRight,

    startResizable: true,
    endResizable: true,
    movable: true,
    creatable: true,
    crossResourceMove: true,
    checkConflict: false,
    scrollToTodayEnabled: true,
    eventItemPopoverEnabled: true,
    calendarPopoverEnabled: true,
    recurringEventsEnabled: true,
    headerEnabled: true,
    displayWeekend: true,
    relativeMove: true,

    resourceName: 'Resource Name',
    stationName:'Station Name',
    shiftName: 'Shift Name',
    taskName: 'Task Name',
    agendaViewHeader: 'Agenda',
    addMorePopoverHeaderFormat: 'MMM D, YYYY dddd',
    eventItemPopoverDateFormat: 'MMM D',
    nonAgendaDayCellHeaderFormat: 'ha',
    nonAgendaOtherCellHeaderFormat: 'ddd M/D',

    minuteStep: 60,

    views: [{ viewName: 'Day', viewType: _ViewTypes2.default.Day, showAgenda: false, isEventPerspective: false }, { viewName: 'Week', viewType: _ViewTypes2.default.Week, showAgenda: false, isEventPerspective: false }, { viewName: 'Month', viewType: _ViewTypes2.default.Month, showAgenda: false, isEventPerspective: false }, { viewName: 'Quarter', viewType: _ViewTypes2.default.Quarter, showAgenda: false, isEventPerspective: false }, { viewName: 'Year', viewType: _ViewTypes2.default.Year, showAgenda: false, isEventPerspective: false }]
};
