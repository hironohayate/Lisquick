import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type Speed = '0.7x' | '0.85x' | '1.0x' | '1.15x';

export default function QuizScreen() {
  const router = useRouter();
  const [selectedSpeed, setSelectedSpeed] = useState<Speed>('1.0x');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [isScriptExpanded, setIsScriptExpanded] = useState(false);

  // ダミーデータ
  const topic = '日常会話';
  const difficulty = '中級';
  const remaining = 3;
  const correctAnswer = 1; // インデックス1が正解
  const answers = [
    'She ordered a coffee.',
    'She ordered a tea.',
    'She ordered a juice.',
    'She ordered a water.',
  ];

  // 会話スクリプトのダミーデータ
  const scriptData = {
    english: [
      { speaker: 'A', text: 'Good morning! What would you like to order?' },
      { speaker: 'B', text: "I'd like a cup of tea, please." },
      { speaker: 'A', text: 'Would you like anything else with that?' },
      { speaker: 'B', text: 'No, thank you. Just the tea.' },
    ],
    japanese: [
      { speaker: 'A', text: 'おはようございます！何をご注文されますか？' },
      { speaker: 'B', text: '紅茶を一杯お願いします。' },
      { speaker: 'A', text: '他に何かご一緒にいかがですか？' },
      { speaker: 'B', text: 'いいえ、結構です。紅茶だけで。' },
    ],
  };

  const handlePlayAudio = () => {
    // TODO: Implement audio playback
    console.log('Playing audio at speed:', selectedSpeed);
  };

  const handleAnswerPress = (index: number) => {
    if (isAnswered) return; // 既に回答済みの場合は何もしない

    setSelectedAnswer(index);
    setIsAnswered(true);
    setShowResultPopup(true);

    // 1.5秒後にポップアップを非表示
    setTimeout(() => {
      setShowResultPopup(false);
    }, 1500);
  };

  const handleContinue = () => {
    // 画面の状態をリセット
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowResultPopup(false);
    setShowTranslation(false);
    setIsScriptExpanded(false);
    // TODO: 将来的には次の問題データを取得
  };

  const handleQuit = () => {
    // 成績画面に遷移
    router.push('/results');
  };

  return (
    <ImageBackground
      source={require('../assets/Lisquick背景画像.jpeg')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* 正解/不正解ポップアップ */}
          {showResultPopup && (
            <View style={styles.resultPopupContainer}>
              <View style={styles.resultPopup}>
                <Text style={styles.resultEmoji}>
                  {selectedAnswer === correctAnswer ? '🎉' : '😢'}
                </Text>
                <Text style={styles.resultText}>
                  {selectedAnswer === correctAnswer ? '正解！' : '不正解'}
                </Text>
              </View>
            </View>
          )}

          <View style={styles.mainCard}>
            {/* 情報バー（3分割バッジ） */}
            <View style={styles.infoBar}>
              <View style={styles.infoBadge}>
                <Text style={styles.infoLabel}>トピック</Text>
                <Text style={styles.infoValue}>{topic}</Text>
              </View>
              <View style={styles.infoBadge}>
                <Text style={styles.infoLabel}>難易度</Text>
                <Text style={styles.infoValue}>{difficulty}</Text>
              </View>
              <View style={styles.infoBadge}>
                <Text style={styles.infoLabel}>残り</Text>
                <Text style={styles.infoValue}>{remaining}問</Text>
              </View>
            </View>

            {/* スクリプト展開エリア（回答後のみ表示） */}
            {isAnswered && (
              <View style={styles.scriptContainer}>
                <TouchableOpacity
                  style={styles.scriptHeader}
                  activeOpacity={0.85}
                  onPress={() => setIsScriptExpanded(!isScriptExpanded)}
                  hitSlop={{ top: 12, bottom: 12, left: 0, right: 0 }}
                >
                  <View style={styles.scriptTitleRow}>
                    <Text style={styles.scriptTitle}>会話内容</Text>
                    <Ionicons
                      name={isScriptExpanded ? 'chevron-up' : 'chevron-down'}
                      size={24}
                      color="#333333"
                    />
                  </View>
                  <View style={[
                    styles.translationToggle,
                    !isScriptExpanded && { opacity: 0 }
                  ]}>
                    <TouchableOpacity
                      activeOpacity={0.85}
                      onPress={(e) => {
                        e.stopPropagation();
                        setShowTranslation(!showTranslation);
                      }}
                      disabled={!isScriptExpanded}
                      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    >
                      <Ionicons
                        name="swap-horizontal"
                        size={20}
                        color="#FFFFFF"
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
                {isScriptExpanded && (
                  <ScrollView
                    style={styles.scriptContent}
                    nestedScrollEnabled={true}
                    showsVerticalScrollIndicator={true}
                  >
                    {(showTranslation ? scriptData.japanese : scriptData.english).map((line, idx) => (
                      <View key={idx} style={styles.scriptLine}>
                        <Text style={styles.scriptSpeaker}>{line.speaker}:</Text>
                        <Text style={styles.scriptText}>{line.text}</Text>
                      </View>
                    ))}
                  </ScrollView>
                )}
              </View>
            )}

            {/* 再生ボタン */}
            <TouchableOpacity
              style={styles.playButton}
              activeOpacity={0.85}
              onPress={handlePlayAudio}
            >
              <Ionicons name="play" size={48} color="#FFFFFF" />
            </TouchableOpacity>

            {/* 速度選択 */}
            <View style={styles.speedContainer}>
              <View style={styles.speedButtonRow}>
                {(['0.7x', '0.85x', '1.0x', '1.15x'] as Speed[]).map((speed) => (
                  <TouchableOpacity
                    key={speed}
                    style={[
                      styles.speedButton,
                      selectedSpeed === speed && styles.speedButtonSelected
                    ]}
                    activeOpacity={0.85}
                    onPress={() => setSelectedSpeed(speed)}
                  >
                    <Text style={[
                      styles.speedButtonText,
                      selectedSpeed === speed && styles.speedButtonTextSelected
                    ]}>
                      {speed}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* 選択肢グリッド（2×2） */}
            <View style={styles.answerContainer}>
              <View style={styles.answerRow}>
                {[0, 1].map((index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.answerButton,
                      isAnswered && index === correctAnswer && styles.answerButtonCorrect,
                      isAnswered && index === selectedAnswer && index !== correctAnswer && styles.answerButtonWrong,
                    ]}
                    activeOpacity={0.85}
                    onPress={() => handleAnswerPress(index)}
                    disabled={isAnswered}
                  >
                    <Text style={styles.answerButtonText}>{answers[index]}</Text>
                    {isAnswered && index === correctAnswer && (
                      <View style={styles.answerMark}>
                        <Text style={styles.answerMarkTextCorrect}>✓</Text>
                      </View>
                    )}
                    {isAnswered && index === selectedAnswer && index !== correctAnswer && (
                      <View style={styles.answerMark}>
                        <Text style={styles.answerMarkTextWrong}>✗</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.answerRow}>
                {[2, 3].map((index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.answerButton,
                      isAnswered && index === correctAnswer && styles.answerButtonCorrect,
                      isAnswered && index === selectedAnswer && index !== correctAnswer && styles.answerButtonWrong,
                    ]}
                    activeOpacity={0.85}
                    onPress={() => handleAnswerPress(index)}
                    disabled={isAnswered}
                  >
                    <Text style={styles.answerButtonText}>{answers[index]}</Text>
                    {isAnswered && index === correctAnswer && (
                      <View style={styles.answerMark}>
                        <Text style={styles.answerMarkTextCorrect}>✓</Text>
                      </View>
                    )}
                    {isAnswered && index === selectedAnswer && index !== correctAnswer && (
                      <View style={styles.answerMark}>
                        <Text style={styles.answerMarkTextWrong}>✗</Text>
                      </View>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* 続ける/やめるボタン（回答後のみ表示） */}
            {isAnswered && (
              <View style={styles.actionButtonContainer}>
                <TouchableOpacity
                  style={[styles.actionButton, styles.continueButton]}
                  activeOpacity={0.85}
                  onPress={handleContinue}
                >
                  <Text style={styles.continueButtonText}>続ける</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.quitButton]}
                  activeOpacity={0.85}
                  onPress={handleQuit}
                >
                  <Text style={styles.quitButtonText}>やめる</Text>
                </TouchableOpacity>
              </View>
            )}
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
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
    height: 850,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
    gap: 10,
  },
  infoBadge: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E3F2FD',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2196F3',
  },
  playButton: {
    backgroundColor: '#2196F3',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 1,
    borderColor: '#1E88E5',
  },
  speedContainer: {
    marginBottom: 28,
  },
  speedButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  speedButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#2196F3',
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  speedButtonSelected: {
    backgroundColor: '#2196F3',
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
  speedButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2196F3',
  },
  speedButtonTextSelected: {
    color: '#FFFFFF',
  },
  answerContainer: {
    gap: 12,
  },
  answerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  answerButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#2196F3',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 80,
  },
  answerButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2196F3',
    textAlign: 'center',
  },
  answerButtonCorrect: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
  },
  answerButtonWrong: {
    borderColor: '#F44336',
    backgroundColor: '#FFEBEE',
  },
  answerMark: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  answerMarkTextCorrect: {
    fontSize: 24,
    color: '#4CAF50',
    fontWeight: '800',
  },
  answerMarkTextWrong: {
    fontSize: 24,
    color: '#F44336',
    fontWeight: '800',
  },
  // 正解/不正解ポップアップ
  resultPopupContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  resultPopup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 20,
    minWidth: 200,
  },
  resultEmoji: {
    fontSize: 80,
    marginBottom: 16,
  },
  resultText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#333333',
  },
  // スクリプトエリア
  scriptContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#E3F2FD',
    overflow: 'hidden',
  },
  scriptHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scriptTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  scriptTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
  },
  translationToggle: {
    backgroundColor: '#2196F3',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  scriptContent: {
    maxHeight: 150,
    marginTop: 14,
    paddingBottom: 4,
  },
  scriptLine: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  scriptSpeaker: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2196F3',
    minWidth: 25,
  },
  scriptText: {
    fontSize: 16,
    color: '#333333',
    flex: 1,
    lineHeight: 24,
  },
  // アクションボタン
  actionButtonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  continueButton: {
    backgroundColor: '#2196F3',
    borderWidth: 1,
    borderColor: '#1E88E5',
  },
  quitButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#CCCCCC',
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  quitButtonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#666666',
  },
});
