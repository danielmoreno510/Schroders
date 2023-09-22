import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';
import {formatDate} from '../../utils/formUtils';

const RepositoryDetails: React.FC<{commit: ICommit}> = ({commit}) => (
  <View style={styles.container}>
    <Text style={styles.text}>Title: {commit.title}</Text>
    <Text style={styles.text}>body: {commit.body}</Text>
    <Text style={styles.text}>Author: {commit.user.login}</Text>
    <Text style={styles.text}>Date: {formatDate(commit.created_at)}</Text>
  </View>
);

export default RepositoryDetails;
