// Projects
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const FETCH_PROJECT = 'FETCH_PROJECT';
export const FETCH_SHARED_PROJECT = 'FETCH_SHARED_PROJECT';
export const FETCH_PROJECT_ASSETS = 'FETCH_PROJECT_ASSETS';
export const RESET_CREATE_PROJECT = 'RESET_CREATE_PROJECT';
export const CHANGE_PROJECT_NAME = 'CHANGE_PROJECT_NAME';
export const DELETE_PROJECTS = 'DELETE_PROJECTS';
export const RESET_DELETE_PROJECTS = 'RESET_DELETE_PROJECTS';
export const ARCHIVE_PROJECTS = 'ARCHIVE_PROJECTS';
export const RESET_ARCHIVE_PROJECTS = 'RESET_ARCHIVE_PROJECTS';
export const UNARCHIVE_PROJECTS = 'UNARCHIVE_PROJECTS';
export const RESET_UNARCHIVE_PROJECTS = 'RESET_UNARCHIVE_PROJECTS';
export const SET_PROJECT_RUSH_PRIORITY = 'SET_PROJECT_RUSH_PRIORITY';
export const UNSET_PROJECT_RUSH_PRIORITY = 'UNSET_PROJECT_RUSH_PRIORITY';
export const MARK_PROJECT_ASSETS_AS_SEEN = 'MARK_PROJECT_ASSETS_AS_SEEN';
export const SET_PROJECTS_VIEW_ITEMS_SIZE = 'SET_PROJECTS_VIEW_ITEMS_SIZE';
export const UPDATE_PROJECT_SETTINGS = 'UPDATE_PROJECT_SETTINGS';
export const GET_PROJECT_SETTINGS = 'GET_PROJECT_SETTINGS';
export const UNMARK_PROJECT_AS_NEW = 'UNMARK_PROJECT_AS_NEW';

// Assets
export const DELETE_ASSET = 'DELETE_ASSET';
export const CREATE_ASSETS = 'CREATE_ASSETS';
export const RESET_CREATE_ASSETS = 'RESET_CREATE_ASSETS';
export const RESET_DELETE_ASSET = 'RESET_DELETE_ASSET';
export const CHANGE_ASSET_FILE_NAME = 'CHANGE_ASSET_FILE_NAME';
export const SET_ASSET_RUSH_PRIORITY = 'SET_ASSET_RUSH_PRIORITY';
export const UNSET_ASSET_RUSH_PRIORITY = 'UNSET_ASSET_RUSH_PRIORITY';
export const MARK_ASSETS_AS_APPROVED = 'MARK_ASSETS_AS_APPROVED';
export const UNMARK_ASSETS_AS_APPROVED = 'UNMARK_ASSETS_AS_APPROVED';
export const SET_ASSETS_VIEW_SIZE = 'SET_ASSETS_VIEW_SIZE';
export const DELETE_ASSETS = 'DELETE_ASSETS';
export const RESET_MARK_ASSETS_AS_APPROVED = 'RESET_MARK_ASSETS_AS_APPROVED';
export const RESET_UNMARK_ASSETS_AS_APPROVED = 'RESET_UNMARK_ASSETS_AS_APPROVED';
export const DOWNLOAD_ASSETS = 'DOWNLOAD_ASSETS';
export const RESET_DOWNLOAD_ASSETS = 'RESET_DOWNLOAD_ASSETS';
export const SET_ASSETS_CUSTOM_SORT = 'SET_ASSETS_CUSTOM_SORT';
export const CREATE_ASSET_FROM_DIRECT_UPLOAD = 'CREATE_ASSET_FROM_DIRECT_UPLOAD';

// Asset Uploads
export const CREATE_ASSETS_UPLOADS = 'CREATE_ASSETS_UPLOADS';
export const UPDATE_ASSET_UPLOAD_PROGRESS = 'UPDATE_ASSET_UPLOAD_PROGRESS';
export const UPDATE_ASSET_UPLOAD_STATUS = 'UPDATE_ASSET_UPLOAD_STATUS';
export const CANCEL_ALL_ASSET_UPLOADS = 'CANCEL_ALL_ASSET_UPLOADS';

// Comments
export const FETCH_ASSET_COMMENTS = 'FETCH_ASSET_COMMENTS';
export const CREATE_COMMENT_FOR_ASSET = 'CREATE_COMMENT_FOR_ASSET';
export const RESET_CREATE_COMMENT_FOR_ASSET = 'RESET_CREATE_COMMENT_FOR_ASSET';
export const SET_CURRENT_ACTIVE_MARKUP_COMMENT = 'SET_CURRENT_ACTIVE_MARKUP_COMMENT';
export const CLEAR_CURRENT_ACTIVE_MARKUP_COMMENT = 'CLEAR_CURRENT_ACTIVE_MARKUP_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_MARKUP_COMMENT = 'UPDATE_MARKUP_COMMENT';
export const RESET_UPDATE_MARKUP_COMMENT = 'RESET_UPDATE_MARKUP_COMMENT';
export const START_WRITING_COMMENT = 'START_WRITING_COMMENT';
export const STOP_WRITING_COMMENT = 'STOP_WRITING_COMMENT';

// Notifications
export const FETCH_NOTIFICATIONS = 'FETCH_NOTIFICATIONS';
export const MARK_NOTIFICATIONS_AS_SEEN = 'MARK_NOTIFICATIONS_AS_SEEN';

// Tasks
export const FETCH_PROJECT_TASKS = 'FETCH_PROJECT_TASKS';
export const MARK_PROJECT_TASK_AS_COMPLETED = 'MARK_PROJECT_TASK_AS_COMPLETED';
export const UNMARK_PROJECT_TASK_AS_COMPLETED = 'UNMARK_PROJECT_TASK_AS_COMPLETED';
export const CREATE_TASK = 'CREATE_TASK';
export const RESET_CREATE_TASK = 'RESET_CREATE_TASK';
export const SET_EDITING_TASK = 'SET_EDITING_TASK';
export const CANCEL_TASK_EDIT = 'CANCEL_TASK_EDIT';
export const UPDATE_TASK = 'UPDATE_TASK';

// Authentication
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const LOGOUT = 'LOGOUT';

// Project members
export const FETCH_PROJECT_MEMBERS = 'FETCH_PROJECT_MEMBERS';
export const INVITE_PROJECT_MEMBER = 'INVITE_PROJECT_MEMBER';
export const UPDATE_PROJECT_MEMBER_ROLE = 'UPDATE_PROJECT_MEMBER_ROLE';
export const DELETE_PROJECT_MEMBER = 'DELETE_PROJECT_MEMBER';

// Info Messages
export const SHOW_SUCCESS_INFO_MESSAGE = 'SHOW_SUCCESS_INFO_MESSAGE';
export const SHOW_ERROR_INFO_MESSAGE = 'SHOW_ERROR_INFO_MESSAGE';
export const CLEAN_CURRENT_INFO_MESSAGE = 'CLEAN_CURRENT_INFO_MESSAGE';

// Markup Editor
export const START_DRAWING_MARKUP = 'START_DRAWING_MARKUP';
export const ADD_SHAPE_TO_CURRENT_DRAWING_MARKUP = 'ADD_SHAPE_TO_CURRENT_DRAWING_MARKUP';
export const REMOVE_LAST_SHAPE_FROM_CURRENT_DRAWING_MARKUP = 'REMOVE_LAST_SHAPE_FROM_CURRENT_DRAWING_MARKUP';
export const STOP_DRAWING_MARKUP = 'STOP_DRAWING_MARKUP';
export const SET_MARKUP_EDITING_TOOL = 'SET_MARKUP_EDITING_TOOL';
export const SET_MARKUP_EDITING_COLOR = 'SET_MARKUP_EDITING_COLOR';
export const SET_MARKUP_EDITING_SIZE = 'SET_MARKUP_EDITING_SIZE';

// Users
export const EDIT_USER = 'EDIT_USER';
export const CHANGE_USER_PASSWORD = 'CHANGE_USER_PASSWORD';

// Notifications Preferences
export const EDIT_NOTIFICATIONS_PREFERENCES = 'EDIT_NOTIFICATIONS_PREFERENCES';
export const RESET_EDIT_NOTIFICATIONS_PREFERENCES = 'RESET_EDIT_NOTIFICATIONS_PREFERENCES';
export const FETCH_NOTIFICATIONS_PREFERENCES = 'FETCH_NOTIFICATIONS_PREFERENCES';

// Projects View Options
export const SET_PROJECTS_VIEW_SORT = 'SET_PROJECTS_VIEW_SORT';
export const SET_PROJECTS_CUSTOM_SORT = 'SET_PROJECTS_CUSTOM_SORT';
export const SET_PROJECTS_VIEW_FILTER = 'SET_PROJECTS_VIEW_FILTER';

// Assets View Options
export const SET_ASSETS_VIEW_SORT = 'SET_ASSETS_VIEW_SORT';
export const SET_ASSETS_VIEW_FILTER = 'SET_ASSETS_VIEW_FILTER';

// Confirmation Dialog
export const SHOW_CONFIRMATION_DIALOG = 'SHOW_CONFIRMATION_DIALOG';
export const HIDE_CONFIRMATION_DIALOG = 'HIDE_CONFIRMATION_DIALOG';

// Activities
export const FETCH_PROJECT_ACTIVITIES = 'FETCH_PROJECT_ACTIVITIES';

// Asset Versions
export const FETCH_ASSET_VERSIONS = 'FETCH_ASSET_VERSIONS';
export const SET_SELECTED_ASSET_VERSION_ID = 'SET_SELECTED_ASSET_VERSION_ID';
export const CLEAR_SELECTED_ASSET_VERSION_ID = 'CLEAR_SELECTED_ASSET_VERSION_ID';

// User Activity
export const UPDATE_USER_ACTIVITY_STATUS = 'UPDATE_USER_ACTIVITY_STATUS';
