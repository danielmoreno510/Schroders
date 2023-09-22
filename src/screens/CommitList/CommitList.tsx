import React from 'react';
import {View, FlatList} from 'react-native';

import Commit from '../../components/common/Commit';
import styles from './styles';

const RepositoryList: React.FC<ICommitListProps> = ({
  commitList,
  setCurrentCommit,
  navigation,
}) => {
  const showCommit = (commit: ICommit) => {
    navigation.navigate('Details');
    setCurrentCommit(commit);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={commitList}
        renderItem={({item}) => (
          <Commit commit={item} showCommit={showCommit} />
        )}
        keyExtractor={item => item.node_id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RepositoryList;
