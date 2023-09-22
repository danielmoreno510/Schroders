import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import {formatDate} from '../../../utils/formUtils';

const Commit: React.FC<CommitProps> = ({commit, showCommit}) => (
  <View style={styles.commit}>
    <Text style={styles.text}>Author: {commit.user.login}</Text>
    <Text style={styles.text}>Date: {formatDate(commit.created_at)}</Text>
    <TouchableOpacity
      testID="showCommit"
      onPress={() => showCommit(commit)}
      style={styles.button}>
      <Text style={styles.textButton}>Go To Details</Text>
    </TouchableOpacity>
  </View>
);

export default Commit;
