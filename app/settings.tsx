import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  const userEmail = 'user@example.com'; // サンプルメールアドレス
  const userPlan = '無料プラン'; // サンプルプラン（'無料プラン' or 'プレミアムプラン'）
  const appVersion = '1.0.0'; // サンプルバージョン

  const handlePlanManagement = () => {
    // プレミアム画面に遷移
    router.push('/premium');
  };

  const handleTermsOfService = () => {
    // TODO: LPへのリンクを開く
    Alert.alert('利用規約', 'Webページへ遷移します（実装予定）');
  };

  const handleContact = () => {
    // TODO: お問い合わせページへのリンクを開く
    Alert.alert('お問い合わせ', 'Webページへ遷移します（実装予定）');
  };

  const handleLogout = () => {
    Alert.alert(
      'ログアウト',
      '本当にログアウトしますか？',
      [
        { text: 'キャンセル', style: 'cancel' },
        {
          text: 'ログアウト',
          style: 'destructive',
          onPress: () => {
            // TODO: Implement logout logic
            console.log('Logout');
          },
        },
      ]
    );
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'アカウント削除',
      'アカウントを削除すると、すべてのデータが失われます。本当に削除しますか？',
      [
        { text: 'キャンセル', style: 'cancel' },
        {
          text: '削除する',
          style: 'destructive',
          onPress: () => {
            // TODO: Implement account deletion logic
            console.log('Delete account');
          },
        },
      ]
    );
  };

  return (
    <ImageBackground
      source={require('../assets/Lisquick背景画像.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.mainCard}>
            {/* 戻るボタン（カード内左上） */}
            <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.85}
              onPress={() => router.push('/home')}
            >
              <Ionicons name="arrow-back" size={24} color="#666" />
            </TouchableOpacity>

            {/* アカウントセクション */}
            <View style={[styles.section, { marginTop: 40 }]}>
              <Text style={styles.sectionHeader}>アカウント</Text>

              {/* メールアドレス表示 */}
              <View style={styles.infoItem}>
                <View style={styles.infoTextContainer}>
                  <Text style={styles.infoLabel}>メールアドレス</Text>
                  <Text style={styles.infoValue}>{userEmail}</Text>
                </View>
              </View>

              {/* プラン管理 */}
              <TouchableOpacity
                style={styles.listItem}
                activeOpacity={0.85}
                onPress={handlePlanManagement}
              >
                <View style={styles.listTextContainer}>
                  <Text style={styles.listItemLabel}>プラン管理</Text>
                  <Text style={styles.listItemValue}>{userPlan}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#999999" />
              </TouchableOpacity>
            </View>

            {/* 区切り線 */}
            <View style={styles.divider} />

            {/* 一般セクション */}
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>一般</Text>

              {/* 利用規約 */}
              <TouchableOpacity
                style={styles.listItem}
                activeOpacity={0.85}
                onPress={handleTermsOfService}
              >
                <Text style={styles.listItemText}>利用規約</Text>
                <Ionicons name="chevron-forward" size={20} color="#999999" />
              </TouchableOpacity>

              {/* お問い合わせ */}
              <TouchableOpacity
                style={styles.listItem}
                activeOpacity={0.85}
                onPress={handleContact}
              >
                <Text style={styles.listItemText}>お問い合わせ</Text>
                <Ionicons name="chevron-forward" size={20} color="#999999" />
              </TouchableOpacity>
            </View>

            {/* 区切り線 */}
            <View style={styles.divider} />

            {/* アカウント操作セクション */}
            <View style={styles.section}>
              <Text style={styles.sectionHeader}>アカウント操作</Text>

              {/* ログアウトボタン */}
              <TouchableOpacity
                style={styles.logoutButton}
                activeOpacity={0.85}
                onPress={handleLogout}
              >
                <Text style={styles.logoutButtonText}>ログアウト</Text>
              </TouchableOpacity>

              {/* アカウント削除ボタン */}
              <TouchableOpacity
                style={styles.deleteButton}
                activeOpacity={0.85}
                onPress={handleDeleteAccount}
              >
                <Text style={styles.deleteButtonText}>アカウント削除</Text>
              </TouchableOpacity>
            </View>

            {/* バージョン情報 */}
            <Text style={styles.versionText}>Version {appVersion}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 16,
  },
  section: {
    marginBottom: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 16,
  },
  infoItem: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E3F2FD',
    marginBottom: 12,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 13,
    color: '#999999',
    fontWeight: '500',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '600',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E3F2FD',
    marginBottom: 12,
  },
  listTextContainer: {
    flex: 1,
  },
  listItemLabel: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '600',
    marginBottom: 2,
  },
  listItemValue: {
    fontSize: 13,
    color: '#999999',
    fontWeight: '500',
  },
  listItemText: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 24,
  },
  logoutButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#2196F3',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  logoutButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2196F3',
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#F44336',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  deleteButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#F44336',
  },
  versionText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
  },
});
