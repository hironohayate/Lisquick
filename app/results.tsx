import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function ResultsScreen() {
  const router = useRouter();

  // ダミーデータ
  const streakDays = 7;
  const todayStats = {
    total: 3,
    correct: 3,
    accuracy: 100,
  };
  const breakdown = [
    { topic: '日常会話', difficulty: '初級', correct: 2, total: 2 },
    { topic: 'ビジネス', difficulty: '中級', correct: 1, total: 1 },
  ];

  const handleBackToHome = () => {
    router.push('/home');
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
            {/* 連続学習日数エリア */}
            <View style={styles.streakSection}>
              <Text style={styles.streakLabel}>連続学習日数</Text>
              <View style={styles.streakNumberContainer}>
                <Text style={styles.streakNumber}>{streakDays}</Text>
                <Text style={styles.streakDaysText}>日</Text>
              </View>
            </View>

            {/* 区切り線 */}
            <View style={styles.divider} />

            {/* 今日の成績エリア */}
            <View style={styles.todaySection}>
              <Text style={styles.sectionTitle}>今日の成績</Text>
              <View style={styles.statsBar}>
                <View style={styles.statBadge}>
                  <Text style={styles.statLabel}>出題数</Text>
                  <Text style={styles.statValue}>{todayStats.total}問</Text>
                </View>
                <View style={styles.statBadge}>
                  <Text style={styles.statLabel}>正解数</Text>
                  <Text style={styles.statValue}>{todayStats.correct}問</Text>
                </View>
                <View style={styles.statBadge}>
                  <Text style={styles.statLabel}>正解率</Text>
                  <Text style={styles.statValue}>{todayStats.accuracy}%</Text>
                </View>
              </View>
            </View>

            {/* 区切り線 */}
            <View style={styles.divider} />

            {/* ジャンル・難易度別内訳 */}
            <View style={styles.breakdownSection}>
              <Text style={styles.sectionTitle}>詳細</Text>
              <View style={styles.breakdownList}>
                {breakdown.map((item, index) => (
                  <View key={index} style={styles.breakdownItem}>
                    <Text style={styles.breakdownTopic}>
                      {item.topic}（{item.difficulty}）
                    </Text>
                    <Text style={styles.breakdownScore}>
                      {item.correct}/{item.total}問正解
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* ホームに戻るボタン */}
            <TouchableOpacity
              style={styles.homeButton}
              activeOpacity={0.85}
              onPress={handleBackToHome}
            >
              <Text style={styles.homeButtonText}>ホームに戻る</Text>
            </TouchableOpacity>
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
    elevation: 12,
  },
  // 連続学習日数エリア
  streakSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  streakLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#666666',
    marginBottom: 12,
  },
  streakNumberContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  streakNumber: {
    fontSize: 72,
    fontWeight: '800',
    color: '#2196F3',
    textShadowColor: 'rgba(33, 150, 243, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  streakDaysText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2196F3',
  },
  // 区切り線
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 24,
  },
  // 今日の成績エリア
  todaySection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 16,
  },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  statBadge: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E3F2FD',
  },
  statLabel: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2196F3',
  },
  // ジャンル・難易度別内訳
  breakdownSection: {
    marginBottom: 28,
  },
  breakdownList: {
    gap: 12,
  },
  breakdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E3F2FD',
  },
  breakdownTopic: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
  },
  breakdownScore: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2196F3',
  },
  // ホームに戻るボタン
  homeButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 20,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1E88E5',
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.45,
    shadowRadius: 16,
    elevation: 10,
  },
  homeButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
