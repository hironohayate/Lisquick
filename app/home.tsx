import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const remainingQuestions = 3; // ダミーデータ

  return (
    <ImageBackground
      source={require('../assets/Lisquick背景画像.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        {/* メインカード */}
        <View style={styles.mainCard}>
          {/* 設定ボタン（カード内右上） */}
          <Pressable
            style={styles.settingsButton}
            onPress={() => router.push('/settings')}
          >
            <Ionicons name="settings" size={24} color="#666" />
          </Pressable>

          {/* ロゴ */}
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Lisquick</Text>
          </View>

          {/* 残り問題数 */}
          <View style={styles.remainingContainer}>
            <Text style={styles.remainingText}>今日の残り問題</Text>
            <Text style={styles.remainingNumber}>{remainingQuestions}問</Text>
          </View>

          {/* 問題を始めるボタン */}
          <TouchableOpacity
            style={styles.primaryButton}
            activeOpacity={0.85}
            onPress={() => router.push('/problem-setup')}
          >
            <Text style={styles.primaryButtonText}>問題を始める</Text>
          </TouchableOpacity>

          {/* 成績を見るボタン */}
          <TouchableOpacity
            style={styles.secondaryButton}
            activeOpacity={0.85}
            onPress={() => router.push('/results')}
          >
            <Text style={styles.secondaryButtonText}>成績を見る</Text>
          </TouchableOpacity>

          {/* 区切り線 */}
          <View style={styles.divider} />

          {/* プレミアムセクション（カード内統合） */}
          <View style={styles.premiumSection}>
            <View style={styles.premiumBadge}>
              <Text style={styles.premiumBadgeText}>PREMIUM</Text>
            </View>
            <Text style={styles.premiumTitle}>もっと学習したい方へ</Text>
            <Text style={styles.premiumDescription}>
              プレミアムプランで1日10問まで挑戦できます
            </Text>
            <TouchableOpacity
              style={styles.premiumButton}
              activeOpacity={0.85}
              onPress={() => router.push('/premium')}
            >
              <Text style={styles.premiumButtonText}>詳しく見る</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  mainCard: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 0,
    overflow: 'hidden',
    // より深い影で立体感を強化
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 16,
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  logoText: {
    fontSize: 52,
    fontWeight: '800',
    color: '#2196F3',
    letterSpacing: 2,
    textShadowColor: 'rgba(33, 150, 243, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  remainingContainer: {
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 32,
    paddingVertical: 24,
    paddingHorizontal: 20,
    backgroundColor: '#F8F9FA',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E3F2FD',
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  remainingText: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 8,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  remainingNumber: {
    fontSize: 42,
    fontWeight: '800',
    color: '#2196F3',
    textShadowColor: 'rgba(33, 150, 243, 0.15)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  primaryButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 20,
    borderRadius: 18,
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 16,
    // 強化された青いグロー効果
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#1E88E5',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
  },
  secondaryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    borderRadius: 18,
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 24,
    borderWidth: 3,
    borderColor: '#2196F3',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  secondaryButtonText: {
    color: '#2196F3',
    fontSize: 19,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  premiumSection: {
    backgroundColor: '#FFF9E6',
    marginHorizontal: 24,
    marginBottom: 24,
    padding: 24,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFD54F',
    shadowColor: '#FF9800',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  premiumBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FF9800',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#FF9800',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  premiumBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  premiumTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F57C00',
    marginBottom: 8,
  },
  premiumDescription: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    lineHeight: 20,
  },
  premiumButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#FF9800',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  premiumButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
