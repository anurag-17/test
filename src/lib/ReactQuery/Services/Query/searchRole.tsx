import axios from 'axios';
import { HEADERS } from '../../../Config';
import { FIND_ROLE } from '../../apiRoutes';
import { ISearchRole } from '../../../../Interface/postRoleInterface';

const handleGetFindRole = async (query: ISearchRole) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}${FIND_ROLE}?gender=${
      query.gender
    }&languages=${query.languages}&location=${query.location}&maxAge=${
      query.maxAge
    }&minAge=${query.minAge}&talentSkill=${query.talentSkill}&projectType=${
      query.projectType
    }&projectName=${query.projectName}&pageNumber=${
      query.pageNumber || 0
    }&pageSize=${10}&sortDirection=${query.sortDirection}`,
    HEADERS
  );

  return response.data;
};

export default handleGetFindRole;
