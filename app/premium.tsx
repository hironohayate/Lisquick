import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PremiumScreen() {
  const router = useRouter();

  const handlePurchase = () => {
    // TODO: Implement purchase logic
    console.log('Purchase premium plan');
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

            {/* メインタイトル */}
            <Text style={styles.mainTitle}>プレミアムプランで</Text>
            <Text style={styles.mainTitle}>さらに学習を深めよう</Text>

            {/* 特典セクション */}
            <View style={styles.benefitsContainer}>
              <Text style={styles.benefitsTitle}>プレミアム特典</Text>

              {/* 特典1 */}
              <View style={styles.benefitItem}>
                <View style={styles.benefitIconContainer}>
                  <Ionicons name="checkmark-circle" size={28} color="#FF9800" />
                </View>
                <View style={styles.benefitTextContainer}>
                  <Text style={styles.benefitTitle}>1日に10問まで挑戦</Text>
                  <Text style={styles.benefitDescription}>無料プランは3問まで</Text>
                </View>
              </View>

              {/* 特典2 */}
              <View style={styles.benefitItem}>
                <View style={styles.benefitIconContainer}>
                  <Ionicons name="checkmark-circle" size={28} color="#FF9800" />
                </View>
                <View style={styles.benefitTextContainer}>
                  <Text style={styles.benefitTitle}>中級・上級の難易度解放</Text>
                  <Text style={styles.benefitDescription}>無料プランは初級のみ</Text>
                </View>
              </View>
            </View>

            {/* 価格表示 */}
            <View style={styles.priceContainer}>
              <View style={styles.priceCard}>
                <Text style={styles.priceLabel}>月額料金</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.priceSymbol}>¥</Text>
                  <Text style={styles.priceAmount}>500</Text>
                  <Text style={styles.priceUnit}>/月</Text>
                </View>
                <Text style={styles.priceNote}>いつでもキャンセル可能</Text>
              </View>
            </View>

            {/* 購入ボタン */}
            <TouchableOpacity
              style={styles.purchaseButton}
              activeOpacity={0.85}
              onPress={handlePurchase}
            >
              <Text style={styles.purchaseButtonText}>プレミアムに登録する</Text>
            </TouchableOpacity>

            {/* 補足説明 */}
            <Text style={styles.footnote}>
              登録すると利用規約とプライバシーポリシーに同意したことになります
            </Text>
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
  premiumBadgeContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF9800',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    shadowColor: '#FF9800',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  crownIcon: {
    marginRight: 6,
  },
  premiumBadgeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 2,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#F57C00',
    textAlign: 'center',
    lineHeight: 36,
  },
  benefitsContainer: {
    backgroundColor: '#FFF9E6',
    borderWidth: 2,
    borderColor: '#FFD54F',
    borderRadius: 20,
    padding: 24,
    marginTop: 32,
    marginBottom: 24,
  },
  benefitsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F57C00',
    marginBottom: 20,
    textAlign: 'center',
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  benefitIconContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  benefitTextContainer: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
  priceContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  priceCard: {
    backgroundColor: '#FFF9E6',
    borderWidth: 3,
    borderColor: '#FF9800',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#FF9800',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  priceLabel: {
    fontSize: 15,
    color: '#666666',
    fontWeight: '600',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  priceSymbol: {
    fontSize: 32,
    fontWeight: '800',
    color: '#F57C00',
    marginTop: 8,
    marginRight: 4,
  },
  priceAmount: {
    fontSize: 64,
    fontWeight: '900',
    color: '#F57C00',
    lineHeight: 64,
    textShadowColor: 'rgba(245, 124, 0, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  priceUnit: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F57C00',
    marginTop: 24,
    marginLeft: 4,
  },
  priceNote: {
    fontSize: 13,
    color: '#999999',
    fontWeight: '500',
    marginTop: 4,
  },
  purchaseButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 20,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#FF9800',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#F57C00',
  },
  purchaseButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1,
  },
  footnote: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 12,
  },
});
