import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Posts: {},
};

const pluralNames = { Posts: 'Posts' };

export const entityConfig = {
  entityMetadata,
  pluralNames,
};
