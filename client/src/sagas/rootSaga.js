import {takeLatest, takeLeading, takeEvery} from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {registerSaga, loginSaga} from './authSagas';
import {privateSaga, updateUserData, notAuthorizeSaga, headerRequest} from './userSaga';
import {paymentSaga, cashoutSaga} from './paymentSaga';
import {
    activeContestsSaga,
    customerContestsSaga,
    updateContestSaga,
    dataForContestSaga,
    getContestByIdSaga,
    downloadContestFileSaga
} from './contestsSagas'
import {
    changeMarkSaga,
    setOfferStatusSaga,
    addOfferSaga,
    getModerationOffersSaga,
    moderationResolvingSaga, moderationRejectingSaga
} from './offerSagas';
import {
    previewSaga,
    getDialog,
    sendMessage,
    changeChatFavorite,
    changeChatBlock,
    getCatalogListSaga,
    addChatToCatalog,
    createCatalog,
    deleteCatalog,
    removeChatFromCatalogSaga,
    changeCatalogName
} from './chatSagas';
import {getUserTransactionsSaga, getUserTransactionStatementsSaga} from "./transactionSagas";
import {
    confirmResetPasswordSaga,
    sendEmailForResetPasswordSaga,
} from "./resetPasswordSagas";

function* rootSaga() {
    yield  takeLatest(ACTION.AUTH_ACTION_REGISTER, registerSaga);
    yield  takeLatest(ACTION.AUTH_ACTION_LOGIN, loginSaga);
    yield  takeEvery(ACTION.GET_USER_ACTION, privateSaga);
    yield  takeEvery(ACTION.GET_DATA_FOR_CONTEST_ACTION, dataForContestSaga);
    yield  takeLatest(ACTION.PAYMENT_ACTION, paymentSaga);
    yield  takeLatest(ACTION.CASHOUT_ACTION, cashoutSaga);
    yield  takeLeading(ACTION.GET_CONTESTS_FOR_CUSTOMER, customerContestsSaga);
    yield  takeLatest(ACTION.GET_CONTEST_BY_ID_ACTION, getContestByIdSaga);
    yield  takeEvery(ACTION.GET_CONTESTS_FOR_CREATIVE, activeContestsSaga);
    yield  takeLatest(ACTION.DOWNLOAD_CONTEST_FILE_ACTION, downloadContestFileSaga);
    yield  takeLatest(ACTION.UPDATE_CONTEST_ACTION, updateContestSaga);
    yield  takeEvery(ACTION.SET_OFFER_ACTION, addOfferSaga);
    yield  takeLatest(ACTION.SET_OFFER_STATUS_ACTION, setOfferStatusSaga);
    yield  takeLatest(ACTION.CHANGE_MARK_ACTION, changeMarkSaga);
    yield  takeLatest(ACTION.UPDATE_USER_DATA, updateUserData);
    yield  takeLatest(ACTION.ONLY_FOR_NOT_AUTHORIZE_USERS, notAuthorizeSaga);
    yield  takeLatest(ACTION.HEADER_REQUEST_AUTHORIZE, headerRequest);
    yield  takeLatest(ACTION.GET_PREVIEW_CHAT_ASYNC, previewSaga);
    yield  takeLatest(ACTION.GET_DIALOG_MESSAGES_ASYNC, getDialog);
    yield  takeLatest(ACTION.SEND_MESSAGE_ACTION, sendMessage);
    yield  takeLatest(ACTION.SET_CHAT_FAVORITE_FLAG, changeChatFavorite);
    yield  takeLatest(ACTION.SET_CHAT_BLOCK_FLAG, changeChatBlock);
    yield  takeLatest(ACTION.GET_CATALOG_LIST_ASYNC, getCatalogListSaga);
    yield  takeLatest(ACTION.ADD_CHAT_TO_CATALOG_ASYNC, addChatToCatalog);
    yield  takeLatest(ACTION.CREATE_CATALOG_REQUEST, createCatalog);
    yield  takeLatest(ACTION.DELETE_CATALOG_REQUEST,deleteCatalog);
    yield  takeLatest(ACTION.REMOVE_CHAT_FROM_CATALOG_REQUEST,removeChatFromCatalogSaga);
    yield  takeLatest(ACTION.CHANGE_CATALOG_NAME_REQUEST,changeCatalogName);
    yield takeLatest(ACTION.GET_USER_TRANSACTIONS_HISTORY_REQUEST, getUserTransactionsSaga);
    yield takeLatest(ACTION.GET_USER_TRANSACTION_STATEMENTS_REQUEST, getUserTransactionStatementsSaga);
    yield takeLatest(ACTION.SEND_EMAIL_FOR_RESET_PASSWORD_REQUEST, sendEmailForResetPasswordSaga);
    yield takeLatest(ACTION.CONFIRM_RESET_PASSWORD_REQUEST, confirmResetPasswordSaga);
    yield takeLatest(ACTION.GET_MODERATION_OFFERS_REQUEST, getModerationOffersSaga);
    yield takeLatest(ACTION.OFFER_MODERATION_RESOLVING_REQUEST, moderationResolvingSaga);
    yield takeLatest(ACTION.OFFER_MODERATION_REJECTING_REQUEST, moderationRejectingSaga);
}

export default rootSaga;