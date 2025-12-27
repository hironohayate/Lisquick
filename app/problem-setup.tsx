import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Difficulty = 'beginner' | 'intermediate' | 'advanced' | null;
type Topic = 'random' | 'daily' | 'business' | 'travel' | null;

export default function ProblemSetupScreen() {
  const router = useRouter();
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic>(null);

  const isStartEnabled = selectedDifficulty !== null && selectedTopic !== null;

  const handleStart = () => {
    if (isStartEnabled) {
      // Navigate to quiz screen (replace to prevent going back)
      router.replace('/quiz');
    }
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
            <Pressable style={styles.backButton} onPress={() => router.push('/home')}>
              <Ionicons name="arrow-back" size={24} color="#666" />
            </Pressable>

            {/* 難易度選択セクション */}
            <View style={[styles.section, { marginTop: 40 }]}>
              <Text style={styles.sectionTitle}>難易度を選択</Text>
              <View style={styles.difficultyButtonContainer}>
                <TouchableOpacity
                  style={[
                    styles.difficultyButton,
                    selectedDifficulty === 'beginner' && styles.selectedButton
                  ]}
                  onPress={() => setSelectedDifficulty('beginner')}
                  activeOpacity={0.85}
                >
                  <Text style={[
                    styles.difficultyButtonText,
                    selectedDifficulty === 'beginner' && styles.selectedButtonText
                  ]}>
                    初級
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.difficultyButton,
                    selectedDifficulty === 'intermediate' && styles.selectedButton
                  ]}
                  onPress={() => setSelectedDifficulty('intermediate')}
                  activeOpacity={0.85}
                >
                  <Text style={[
                    styles.difficultyButtonText,
                    selectedDifficulty === 'intermediate' && styles.selectedButtonText
                  ]}>
                    中級
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.difficultyButton,
                    selectedDifficulty === 'advanced' && styles.selectedButton
                  ]}
                  onPress={() => setSelectedDifficulty('advanced')}
                  activeOpacity={0.85}
                >
                  <Text style={[
                    styles.difficultyButtonText,
                    selectedDifficulty === 'advanced' && styles.selectedButtonText
                  ]}>
                    上級
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* トピック選択セクション */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>トピックを選択</Text>
              <View style={styles.topicButtonContainer}>
                <View style={styles.topicRow}>
                  <TouchableOpacity
                    style={[
                      styles.topicButton,
                      selectedTopic === 'random' && styles.selectedButton
                    ]}
                    onPress={() => setSelectedTopic('random')}
                    activeOpacity={0.85}
                  >
                    <Text style={[
                      styles.topicButtonText,
                      selectedTopic === 'random' && styles.selectedButtonText
                    ]}>
                      ランダム
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.topicButton,
                      selectedTopic === 'daily' && styles.selectedButton
                    ]}
                    onPress={() => setSelectedTopic('daily')}
                    activeOpacity={0.85}
                  >
                    <Text style={[
                      styles.topicButtonText,
                      selectedTopic === 'daily' && styles.selectedButtonText
                    ]}>
                      日常会話
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.topicRow}>
                  <TouchableOpacity
                    style={[
                      styles.topicButton,
                      selectedTopic === 'business' && styles.selectedButton
                    ]}
                    onPress={() => setSelectedTopic('business')}
                    activeOpacity={0.85}
                  >
                    <Text style={[
                      styles.topicButtonText,
                      selectedTopic === 'business' && styles.selectedButtonText
                    ]}>
                      ビジネス
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.topicButton,
                      selectedTopic === 'travel' && styles.selectedButton
                    ]}
                    onPress={() => setSelectedTopic('travel')}
                    activeOpacity={0.85}
                  >
                    <Text style={[
                      styles.topicButtonText,
                      selectedTopic === 'travel' && styles.selectedButtonText
                    ]}>
                      旅行
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* 開始ボタン */}
            <TouchableOpacity
              style={[
                styles.startButton,
                !isStartEnabled && styles.startButtonDisabled
              ]}
              onPress={handleStart}
              disabled={!isStartEnabled}
              activeOpacity={0.85}
            >
              <Text style={styles.startButtonText}>開始</Text>
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
  section: {
    marginBottom: 36,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 16,
  },
  difficultyButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  difficultyButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#2196F3',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#2196F3',
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
  difficultyButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2196F3',
  },
  selectedButtonText: {
    color: '#FFFFFF',
  },
  topicButtonContainer: {
    gap: 12,
  },
  topicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  topicButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderColor: '#2196F3',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2196F3',
  },
  startButton: {
    backgroundColor: '#2196F3',
    borderRadius: 18,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  startButtonDisabled: {
    backgroundColor: '#CCCCCC',
    shadowColor: '#000',
    shadowOpacity: 0.15,
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
  },
});
