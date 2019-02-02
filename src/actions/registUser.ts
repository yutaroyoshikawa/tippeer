import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export const getIdValue                 = actionCreator<string>("GET_ID_VALUE")
export const getNameValue               = actionCreator<string>("GET_NAME_VALUE")
export const getMailValue               = actionCreator<string>("GET_MAIL_VALUE")
export const getBithdayValue            = actionCreator<string>("GET_BIRTHDAY_VALUE")
export const getIconData                = actionCreator<string>("GET_ICON_DATA")

export const setTagInput                = actionCreator<string>("SET_TAG_INPUT")

export const requestAddTagData          = actionCreator<string>("REQUEST_ADD_TAG_DATA")
export const addTagData                 = actionCreator<string[]>("ADD_TAG_DATA")

export const requestRemoveTagData       = actionCreator<string>("REQUEST_REMOVE_TAG_DATA")
export const removeTagData              = actionCreator<string[]>("REMOVE_TAG_DATA")

export const setSuggestionTags          = actionCreator<string[]>("SET_SUGGESTION_TAGS")

export const setIdError                 = actionCreator<string>("SET_ID_ERROR")
export const setNameError               = actionCreator<string>("SET_NAME_ERROR")
export const setMailError               = actionCreator<string>("SET_MAIL_ERROR")

export const setIdPassing               = actionCreator('SET_ID_PASSING')
export const setNamePassing             = actionCreator('SET_NAME_PASSING')
export const setMailPassing             = actionCreator('SET_MAIL_PASSING')

export const setIdValidating            = actionCreator('SET_ID_VALIDATING')
export const setNameValidating          = actionCreator('SET_NAME_VALIDATING')
export const setMailValidating          = actionCreator('SET_MAIL_VALIDATING')

export const requestRegistUser          = actionCreator('REQUEST_REGIST_USER')
export const successRegistUser          = actionCreator('SUCCESS_REGIST_USER')
export const faildRegistUser            = actionCreator('FAILD_REGIST_USER')

export const requestCanselRegistUser    = actionCreator('REQUEST_CANSEL_REGIST_USER')
export const successCanselRegistUser    = actionCreator('SUCCESS_CANSEL_REGIST_USER')
export const faildCanselRegistUser      = actionCreator('FAILD_CANSEL_REGIST_USER')

export const requestRegistration        = actionCreator('REQUEST_REGISTRATION')

export const closeRegistRation          = actionCreator('CLOSE_RESISTRATION')