import actionCreatorFactory from 'typescript-fsa'
const actionCreator = actionCreatorFactory()

export const getAgentInfo =    actionCreator('GET_AGENT_INFO')