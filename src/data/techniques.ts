import { Eye, Brain, Zap, Waves, type LucideIcon } from 'lucide-react';

export interface Pattern {
    cue: string;
    means: string;
    use: string;
    context: string;
}

export interface Section {
    id: string;
    title: string;
    principle: string;
    patterns: Pattern[];
    backfire?: string;
    practice?: string;
}

export interface Module {
    id: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
    color: 'scanner' | 'connector' | 'intervention' | 'deepwork';
    ethicsGated?: boolean;
    sections: Section[];
}

export const modules: Module[] = [
    {
        id: 'scanner',
        title: 'The Scanner',
        subtitle: 'Always Running - Your Radar System',
        icon: Eye,
        color: 'scanner',
        sections: [
            {
                id: 'eye-patterns',
                title: 'Eye Accessing Cues',
                principle: 'Eyes move in predictable patterns when accessing different types of information. This reveals whether someone is remembering, constructing, or feeling something.',
                patterns: [
                    {
                        cue: 'Up-Left: Visual Remembered',
                        means: 'They are seeing a real memory, an actual picture from their past',
                        use: 'When you ask "What did your office look like?" - if eyes go up-left, they are genuinely remembering. If up-right, they might be making it up.',
                        context: 'Interview: "Tell me about your last project" - watch if they remember or construct'
                    },
                    {
                        cue: 'Up-Right: Visual Constructed',
                        means: 'They are creating new images, imagining something they have not seen',
                        use: 'If you ask about past events and eyes go up-right repeatedly, calibrate for possible fabrication',
                        context: 'Student excuse: "My dog ate my homework" with up-right eyes = creative storytelling'
                    },
                    {
                        cue: 'Lateral-Left: Auditory Remembered',
                        means: 'Recalling sounds, voices, or conversations they actually heard',
                        use: 'Verifying if they actually heard the instructions you gave',
                        context: 'Corporate: "What did the client say exactly?" - lateral-left confirms they heard it'
                    },
                    {
                        cue: 'Lateral-Right: Auditory Constructed',
                        means: 'Creating sounds or dialogue they have not heard before',
                        use: 'Planning what to say, or potentially fabricating a conversation',
                        context: 'Negotiation: Watch for this when they claim "My boss said..." - are they quoting or inventing?'
                    },
                    {
                        cue: 'Down-Left: Internal Dialogue',
                        means: 'Talking to themselves, processing analytically',
                        use: 'They are in decision-making mode, weighing options internally',
                        context: 'Sales: This is your window - they are convincing themselves. Stay quiet and let them process.'
                    },
                    {
                        cue: 'Down-Right: Kinesthetic (Feelings)',
                        means: 'Accessing emotions, physical sensations, or gut feelings',
                        use: 'They are feeling something deeply - this is where decisions get made',
                        context: 'Therapy: "How does that make you feel?" - down-right means they are actually accessing the emotion'
                    }
                ],
                backfire: 'About 15% of people are reversed (often left-handed). Always calibrate first by asking questions where you know the answer. Some cultures train people not to make eye contact. When someone is trained in NLP, they might control eye movements consciously.',
                practice: 'Ask yourself "What did you eat for breakfast?" and notice where your eyes go. Then ask "What would a purple elephant sound like?" Notice the difference between remembered and constructed.'
            },
            {
                id: 'rep-systems',
                title: 'Representational Systems',
                principle: 'Everyone processes reality through preferred sensory channels. Matching their channel creates unconscious rapport because you are literally speaking the language their brain understands best.',
                patterns: [
                    {
                        cue: 'Visual Person',
                        means: 'They think in pictures and images. Fast talkers, breathe high in chest, use image-based language',
                        use: 'Use visual words: see, picture, look, clear, focus, perspective, imagine, envision',
                        context: 'Classroom: "Can you SEE how this connects? Let me SHOW you a CLEAR PICTURE of the concept."'
                    },
                    {
                        cue: 'Auditory Person',
                        means: 'They think in sounds and words. Medium pace, breathe mid-chest, very articulate',
                        use: 'Use sound words: hear, sounds, listen, tell, say, rings true, harmonize, tune in',
                        context: 'Meeting: "Does this SOUND right? Let me TELL you how this RESONATES with our goals."'
                    },
                    {
                        cue: 'Kinesthetic Person',
                        means: 'They think in feelings and physical sensations. Slow talkers, breathe deep/low, touch things',
                        use: 'Use feeling words: feel, grasp, touch, solid, concrete, get a handle on, gut sense',
                        context: 'Coaching: "How does this FEEL? Let us get a GRASP on what MOVES you."'
                    }
                ],
                backfire: 'When you mismatch someone\'s primary system, they experience you as "not getting it" even if your content is perfect. However, if you match TOO perfectly, trained people might notice. Use mixed predicates with a bias toward their system - about 70% their language.',
                practice: 'Listen to three conversations today and identify each person\'s primary system. Then practice responding in their language. Notice how much easier the conversation flows when you match.'
            },
            {
                id: 'calibration',
                title: 'State Calibration',
                principle: 'Every emotional or mental state has physiological markers. You can literally see someone\'s internal state by reading their external signals. This is the foundation of all influence.',
                patterns: [
                    {
                        cue: 'Breathing Pattern',
                        means: 'High/fast = stress or excitement. Low/slow = relaxed or sad. Most reliable state indicator.',
                        use: 'Match their breathing rhythm to build unconscious rapport, then gradually slow yours to lead them to calm',
                        context: 'Conflict: Someone is breathing fast and high - they are in fight-or-flight. First pace their state, then gradually bring it down.'
                    },
                    {
                        cue: 'Skin Color Changes',
                        means: 'Flushing = embarrassment, anger, or arousal. Paling = fear, shock',
                        use: 'Instant feedback on whether your words are landing well or triggering defense',
                        context: 'Interview: You ask a question and they pale slightly - you hit something uncomfortable.'
                    },
                    {
                        cue: 'Muscle Tension',
                        means: 'Jaw clenching, shoulder raising = resistance, stress, or withheld emotion',
                        use: 'Shows you where their resistance lives and when they are not saying what they are really thinking',
                        context: 'Negotiation: They say "That sounds fine" but shoulders are up and jaw tight - they are not fine.'
                    },
                    {
                        cue: 'Pupil Dilation',
                        means: 'Dilated = interest, attraction, or cognitive load. Constricted = dislike, discomfort',
                        use: 'Real-time interest gauge. When pupils dilate, you have their genuine attention',
                        context: 'Teaching: Pupils dilate across the room - they are genuinely interested. Pupils constrict - change approach.'
                    }
                ],
                backfire: 'Lighting affects pupils massively. Caffeine, medications, and drugs all affect these markers. Some people are physiologically flat. Your own arousal or stress will contaminate your reading - calibrate yourself first.',
                practice: 'Watch a movie scene with the sound off. Try to identify the emotional state of each character based purely on physiology. Then watch with sound to check your accuracy.'
            }
        ]
    },
    {
        id: 'connector',
        title: 'The Connector',
        subtitle: 'Building Rapport & Reading Deeper',
        icon: Brain,
        color: 'connector',
        sections: [
            {
                id: 'rapport',
                title: 'Rapport Mastery',
                principle: 'Rapport is unconscious trust. When done right, people feel like they have known you forever and cannot explain why. This happens through matching and mirroring at multiple levels simultaneously.',
                patterns: [
                    {
                        cue: 'Physical Matching',
                        means: 'Mirror posture, gestures, weight shifts subtly - like a dance partner',
                        use: 'Creates unconscious sense of similarity and safety',
                        context: 'Job Interview: Interviewer leans back - you lean back after 3 seconds. They cross arms - you cross legs (cross-match to be subtle).'
                    },
                    {
                        cue: 'Voice Matching',
                        means: 'Match tempo, volume, pitch, and rhythm of speech. More powerful than physical matching.',
                        use: 'Fast talker feels you are "keeping up." Slow talker feels you are "thoughtful and present"',
                        context: 'Customer Service: Angry customer is loud and fast - match their intensity first, then gradually slow down.'
                    },
                    {
                        cue: 'Breathing Synchronization',
                        means: 'Match the rhythm of their breathing - the most unconscious and most powerful rapport builder',
                        use: 'Creates a physiological bond. People in deep rapport naturally sync breathing.',
                        context: 'Counseling: Match client breathing for 5 minutes. You will notice they become more open and trusting.'
                    },
                    {
                        cue: 'Language Pattern Matching',
                        means: 'Use their exact words and phrases back to them, especially for key concepts',
                        use: 'They feel deeply understood because you are speaking their internal language',
                        context: 'Sales: Client says "I need something reliable" - you say "This system is incredibly RELIABLE" (use their exact word).'
                    }
                ],
                backfire: 'If caught overtly mirroring, it destroys rapport instantly. Wait 3-7 seconds before matching, and match only 70% of the time. Never mirror negative states too deeply.',
                practice: 'Practice matching breathing with people you are already comfortable with. Once you can do it automatically, the rest of rapport becomes easy.'
            },
            {
                id: 'metaprograms',
                title: 'Meta-Programs',
                principle: 'People have consistent unconscious filters for how they process information and make decisions. Once you identify someone\'s meta-programs, you can predict their decisions and frame your communication to bypass resistance.',
                patterns: [
                    {
                        cue: 'Toward vs Away-From',
                        means: 'Toward people are motivated by goals. Away-From people are motivated by avoiding problems.',
                        use: 'Toward: "Here is what you will gain." Away: "Here is what you will avoid."',
                        context: 'Sales: Toward buyer - "This car will give you freedom." Away buyer - "This car prevents breakdowns."'
                    },
                    {
                        cue: 'Internal vs External Reference',
                        means: 'Internal people decide based on their own judgment. External need others\' opinions.',
                        use: 'Internal: "What do YOU think?" External: "Experts recommend this."',
                        context: 'Hiring: Internal candidate - "Tell me why YOU think you are a good fit." External - "Your references spoke highly of you."'
                    },
                    {
                        cue: 'Options vs Procedures',
                        means: 'Options people want possibilities. Procedures people want step-by-step.',
                        use: 'Options: "There are multiple ways to approach this." Procedures: "Here is the tested process, step one, step two."',
                        context: 'Teaching: Options student gets projects with creative freedom. Procedures student gets clear rubrics.'
                    },
                    {
                        cue: 'Sameness vs Difference',
                        means: 'Sameness people want stability. Difference people want novelty.',
                        use: 'Sameness: "This is similar to what you know." Difference: "This is completely new."',
                        context: 'Change Management: Sameness employee - "evolution of what we have been doing." Difference employee - "bold new direction."'
                    }
                ],
                backfire: 'People can have different meta-programs in different contexts. Do not assume one context applies everywhere. The biggest mistake is using your OWN meta-programs to communicate with someone who has opposite patterns.',
                practice: 'For the next three conversations, identify just one meta-program in each person - are they toward or away-from motivated? Then consciously frame one statement in their language.'
            },
            {
                id: 'linguistic-patterns',
                title: 'The Milton Model',
                principle: 'Hypnotic language works by being artfully vague in ways that force the listener to fill in details from their own experience, creating the feeling that you understand them perfectly.',
                patterns: [
                    {
                        cue: 'Mind Reading',
                        means: 'Claiming to know someone\'s internal experience: "I know you are wondering..."',
                        use: 'Creates intimacy and the illusion of deep understanding',
                        context: 'Presentation: "I know some of you are wondering how this applies to your specific situation..."'
                    },
                    {
                        cue: 'Lost Performative',
                        means: 'Stating opinions as universal truths: "It\'s important to..." "Clearly..."',
                        use: 'Bypasses resistance by framing your opinion as consensus reality',
                        context: 'Negotiation: "It\'s important that we reach an agreement that benefits everyone"'
                    },
                    {
                        cue: 'Cause-Effect',
                        means: 'Linking two things as if one causes the other: "Reading this will help you understand..."',
                        use: 'Creates inevitability and directs their experience',
                        context: 'Teaching: "As you practice these techniques, you will naturally become more confident"'
                    },
                    {
                        cue: 'Presuppositions',
                        means: 'Embedding assumptions in questions: "When you implement this..." vs "If you implement..."',
                        use: 'Gets agreement to the presupposition while they focus on the question',
                        context: 'Sales: "Would you prefer the red or blue model?" (presupposes they are buying)'
                    }
                ],
                backfire: 'Overuse makes you sound like a sleazy hypnotist. Use these patterns sprinkled into normal conversation. Highly analytical people often catch vague language - with them, be more specific.',
                practice: 'Rewrite three normal sentences using presuppositions. Change "If you try this" to "When you use this technique."'
            }
        ]
    },
    {
        id: 'intervention',
        title: 'The Intervention',
        subtitle: 'Strategic Change Work',
        icon: Zap,
        color: 'intervention',
        sections: [
            {
                id: 'reframing',
                title: 'Reframing',
                principle: 'Nothing has inherent meaning - all meaning is context-dependent. Reframing is giving the same situation a different meaning, which instantly changes the emotional response.',
                patterns: [
                    {
                        cue: 'Context Reframe',
                        means: 'Same behavior, different context where it is valuable: "Being stubborn" becomes "being persistent"',
                        use: 'Helps people see their perceived weakness as a strength in the right situation',
                        context: 'Coaching: "I am too sensitive" → "Your sensitivity means you are deeply empathetic - a superpower in counseling fields."'
                    },
                    {
                        cue: 'Content Reframe',
                        means: 'Same situation, focusing on different aspect: "This problem is an opportunity to learn"',
                        use: 'Shifts focus from what is wrong to what is useful',
                        context: 'Student failing: "You have discovered which study methods do not work - you are closer to finding what does work."'
                    },
                    {
                        cue: 'Meaning Reframe',
                        means: 'Challenge the meaning someone assigns: "Does rejection really mean you are not good enough?"',
                        use: 'Breaks limiting beliefs by offering alternative interpretations',
                        context: 'Job rejection: "They did not hire me" → "A better opportunity is still available for me."'
                    }
                ],
                backfire: 'Reframing too quickly can feel invalidating. Always acknowledge their current frame first - "I understand why you would see it that way" - THEN offer the reframe. Never reframe trauma as "a blessing in disguise."',
                practice: 'Take one thing you see as negative about yourself and generate three context reframes - three situations where that same trait would be valuable.'
            },
            {
                id: 'anchoring',
                title: 'Anchoring',
                principle: 'Any stimulus consistently paired with an emotional state becomes a trigger for that state. This is classical conditioning you can use deliberately to create on-demand access to resourceful states.',
                patterns: [
                    {
                        cue: 'Basic Anchor Installation',
                        means: 'Elicit a desired state, amplify it to peak intensity, then apply a unique stimulus at the peak. Repeat 3-5 times.',
                        use: 'Creates an on-demand trigger for resourceful states',
                        context: 'Performance Anxiety: Recall confidence → at peak, press shoulder + specific word. Repeat with different confident memories. Now that combo triggers confidence.'
                    },
                    {
                        cue: 'Stacking Anchors',
                        means: 'Install multiple positive states onto the same anchor',
                        use: 'One trigger accesses a blend of useful states',
                        context: 'Before job interview: Stack confidence, curiosity, playfulness onto pressing thumb and finger together.'
                    },
                    {
                        cue: 'Collapsing Anchors',
                        means: 'Fire a positive anchor and negative anchor simultaneously to neutralize the negative pattern',
                        use: 'Breaks phobias, unwanted emotional responses, and limiting reactions',
                        context: 'Fear of public speaking: Install powerful positive anchor. Fire both anchors together - positive overwhelms and neutralizes anxiety.'
                    },
                    {
                        cue: 'Future Pacing',
                        means: 'After installing an anchor, imagine future situations where you will need it and practice firing the anchor',
                        use: 'Ensures the anchor works in real-world contexts',
                        context: 'After creating calm anchor: Imagine next exam, feel old anxiety rise... fire anchor. Notice calm spreading. Mental rehearsal makes it work automatically.'
                    }
                ],
                backfire: 'Anchors must be unique and intense. Do not use handshakes or common words. The state must be at genuine peak intensity. Always test anchors before the session ends. About 20% need 5-7 repetitions.',
                practice: 'Create a personal calm anchor now. Recall deep peace, press thumb + middle finger + breathe + think "calm" at peak. Repeat 5 times. Test tomorrow when slightly stressed.'
            },
            {
                id: 'submodalities',
                title: 'Submodalities',
                principle: 'Every memory has specific qualities - brightness, size, distance, clarity. These qualities determine the emotional intensity. By changing the submodalities, you change how someone feels without changing the content.',
                patterns: [
                    {
                        cue: 'Mapping Submodalities',
                        means: 'Ask how they represent an experience: "Is it a movie or still image? Color or black and white? How far away?"',
                        use: 'Reveals the structure of their subjective experience so you know what to change',
                        context: 'Phobia: "When you think of spiders, how big is the image? How close?" → Make it smaller, push it farther away, make it fuzzy.'
                    },
                    {
                        cue: 'Swish Pattern',
                        means: 'Replace an unwanted automatic response by manipulating visual submodalities rapidly',
                        use: 'Breaks compulsive habits and unwanted reactions in minutes',
                        context: 'Nail biting: See trigger image big/bright. See desired outcome small/dark in corner. SWISH - shrink problem, explode desired. Repeat 10 times fast.'
                    },
                    {
                        cue: 'Making Positives Bigger',
                        means: 'Enhance a good memory - brighter, closer, bigger, more colorful, add empowering music',
                        use: 'Amplifies motivation, confidence, and positive emotions',
                        context: 'Goal motivation: Make the image twice as big, bring it closer, make colors more vivid. Notice increased drive.'
                    },
                    {
                        cue: 'Making Negatives Smaller',
                        means: 'Diminish a bad memory - dimmer, farther, smaller, black and white, drain sound',
                        use: 'Reduces emotional charge without requiring therapy',
                        context: 'Past embarrassment: Drain all color, push into distance until tiny, make it a still photo, add circus music. Same memory, different impact.'
                    }
                ],
                backfire: 'Some memories are structurally locked (trauma) - do not force it, refer to therapy. About 10% of people are not visual - use auditory or kinesthetic submodalities instead. Always test your changes.',
                practice: 'Think of a mildly annoying memory. Notice where it is, how far, what size. Now push it farther, drain color, shrink it. Notice the feeling change.'
            },
            {
                id: 'timeline',
                title: 'Timeline Therapy',
                principle: 'Your brain stores memories in a spatial and temporal structure. By accessing and reorganizing this structure, you can release limiting emotions and install new possibilities.',
                patterns: [
                    {
                        cue: 'Eliciting the Timeline',
                        means: 'Have them imagine past behind and future in front, then float above to see the structure',
                        use: 'Gives conscious access to unconscious temporal organization',
                        context: 'Discovery: "Point to where your past is. Point to your future. Imagine floating above your timeline." Some see past on left, others behind.'
                    },
                    {
                        cue: 'Releasing Limiting Decisions',
                        means: 'Identify when they first decided something limiting, go back before that event, install new resources',
                        use: 'Breaks patterns that have been running for decades',
                        context: 'Confidence issues: Float back to childhood when they first decided "I am not good enough." Install adult perspective before that moment. Watch history reorganize.'
                    },
                    {
                        cue: 'Releasing Negative Emotions',
                        means: 'Float above timeline, identify the root cause event, release it from that point forward',
                        use: 'Clears recurring emotional patterns at the root',
                        context: 'Chronic anxiety: "Float above your timeline to the very first event that created this pattern. What age? Give that younger you what they needed. Release the anxiety forward to now."'
                    },
                    {
                        cue: 'Creating the Future',
                        means: 'Go into the future timeline and install desired outcomes as if already accomplished',
                        use: 'Programs unconscious mind toward specific goals',
                        context: 'Career goals: "Float to one year from now. See yourself having accomplished this. Step into that moment fully." More powerful than conscious goal-setting.'
                    }
                ],
                backfire: 'Timeline work can bring up intense emotions. Always establish safety first. Never do timeline work casually or when you do not have time to complete. Some people have fragmented timelines due to trauma - refer to specialist.',
                practice: 'Elicit your own timeline first. Float above it and notice how your unconscious has organized time. This gives you the felt sense of what you are asking others to do.'
            },
            {
                id: 'six-step',
                title: 'Six-Step Reframe',
                principle: 'Every behavior, even unwanted ones, serves a positive intention at the unconscious level. Six-step reframe creates new behavioral choices that satisfy the positive intention without the negative consequences.',
                patterns: [
                    {
                        cue: 'Step 1: Identify the Pattern',
                        means: 'Name the specific unwanted behavior you want to change',
                        use: 'Gets clear on exactly what needs addressing',
                        context: 'Procrastination: "I want to stop procrastinating on important projects"'
                    },
                    {
                        cue: 'Step 2: Communicate With the Part',
                        means: 'Ask internally "Will the part of me responsible for this behavior communicate with me?" Wait for a signal.',
                        use: 'Establishes dialogue with the unconscious part running the pattern',
                        context: 'Close eyes: "Is there a part that makes me procrastinate? Will it communicate with me?" You might feel tension or sense a yes.'
                    },
                    {
                        cue: 'Step 3: Separate Behavior From Intention',
                        means: 'Ask the part "What are you trying to do for me that is positive?" Keep asking until you get to the core intention.',
                        use: 'Reveals the hidden purpose of the unwanted behavior',
                        context: 'Procrastination part might say "I am trying to protect you from failure." Once you know this, you stop fighting yourself.'
                    },
                    {
                        cue: 'Steps 4-6: Create Alternatives, Get Agreement, Ecology Check',
                        means: 'Generate new ways to accomplish the intention, secure commitment, check for objections from other parts',
                        use: 'Gives the unconscious better options and aligns all parts of your system',
                        context: 'If intention is protection: alternatives might be careful planning, building skills first, or reframing failure as learning. Get part to agree to try these for 3 weeks.'
                    }
                ],
                backfire: 'Some people struggle with "talking to parts" - reframe as "accessing different aspects of unconscious processing." If a part refuses to cooperate, you have not found the real positive intention yet.',
                practice: 'Do a six-step reframe on a mild unwanted habit - maybe checking your phone compulsively. Work through all six steps and notice what happens over the following week.'
            }
        ]
    },
    {
        id: 'deep-work',
        title: 'Deep Trance Work',
        subtitle: 'The Foundation - Hypnotic Phenomena',
        icon: Waves,
        color: 'deepwork',
        ethicsGated: true,
        sections: [
            {
                id: 'trance-induction',
                title: 'Trance Induction',
                principle: 'Trance is a naturally occurring state of focused attention where the critical factor is bypassed and suggestions reach the unconscious directly. Every intervention in Layer 3 becomes 10x more powerful in trance.',
                patterns: [
                    {
                        cue: 'Progressive Relaxation Induction',
                        means: 'Guide systematic relaxation from head to toe while suggesting deepening trance',
                        use: 'Most reliable basic induction, works on almost everyone',
                        context: 'Therapy: "Close your eyes and take a deep breath. As you exhale, feel the muscles around your eyes relaxing... now your jaw loosens..." Slow and gentle.'
                    },
                    {
                        cue: 'Confusion Induction',
                        means: 'Overload conscious processing with complex, contradictory instructions until trance opens to escape confusion',
                        use: 'Fast induction for people who resist direct suggestions',
                        context: 'Resistant client: Complex, contradictory instructions cause conscious mind to drop away. Milton Erickson was masterful at this.'
                    },
                    {
                        cue: 'Shock Induction',
                        means: 'Interrupt an expected pattern suddenly to create momentary confusion, then immediately guide into trance',
                        use: 'Instant induction for rapid work or demonstrations',
                        context: 'Handshake interrupt: Pattern interrupt creates a blank moment. Fill that blank with trance suggestion. Requires skill - do NOT use casually.'
                    },
                    {
                        cue: 'Conversational Induction (Ericksonian)',
                        means: 'Layer hypnotic language patterns into normal conversation until trance develops naturally',
                        use: 'Most elegant - people do not realize they are in trance',
                        context: 'Any conversation: Match breathing, use embedded commands, stack presuppositions. After 5-10 minutes, eyes glaze, breathing deepens - light trance. This separates masters from amateurs.'
                    }
                ],
                backfire: 'About 10% of people are highly resistant - use "focused attention" instead of "hypnosis." Never use shock induction on someone with heart conditions, PTSD, or without clear consent. If someone does not respond, switch processing style.',
                practice: 'Practice progressive relaxation on yourself daily for a week. Learn what trance feels like from the inside. You cannot guide others somewhere you have not been yourself.'
            },
            {
                id: 'deepening',
                title: 'Trance Deepening',
                principle: 'Light trance is useful, but profound work requires deep trance. The deeper the trance, the more direct your access to unconscious programming.',
                patterns: [
                    {
                        cue: 'Fractionation',
                        means: 'Bring them out of trance and back in repeatedly, going deeper each time',
                        use: 'Each time they re-enter trance, they go deeper automatically',
                        context: 'After induction: "Open your eyes... now close them and go back down, twice as deep." Repeat 3-5 times. Each cycle deepens exponentially.'
                    },
                    {
                        cue: 'Countdown Deepening',
                        means: 'Count backwards from ten to one, suggesting deeper trance with each number',
                        use: 'Simple, effective, gives structure to the process',
                        context: 'In trance: "I am going to count from ten down to one, and with each number you go ten times deeper..." By one, they are in deep trance.'
                    },
                    {
                        cue: 'Imagery Deepening',
                        means: 'Guide them through imagery of descending - staircase, elevator, sinking in water',
                        use: 'Utilizes natural metaphors for depth',
                        context: 'In trance: "Imagine standing at the top of a beautiful staircase with ten steps... With each step down, you go deeper..."'
                    }
                ],
                backfire: 'Some people fear going too deep - always assure them they can emerge instantly and are in control. Never assume depth based on external signs alone - always test with ideomotor signals before deep work.',
                practice: 'Deepen your own self-hypnosis using countdown method. Go from ten to one, really allowing yourself to let go. Notice what happens as you descend.'
            },
            {
                id: 'hypnotic-phenomena',
                title: 'Hypnotic Phenomena',
                principle: 'In deep trance, the unconscious mind can create extraordinary experiences - from pain elimination to time distortion. These are demonstrations of how powerful unconscious processing is.',
                patterns: [
                    {
                        cue: 'Catalepsy (Muscle Rigidity)',
                        means: 'Make a limb rigid and immovable through suggestion',
                        use: 'Demonstrates depth and unconscious control, builds confidence in trance',
                        context: 'Deep trance: "Your right arm is becoming stiff and rigid, like a steel bar... Try to bend it. You cannot." Always release: "Relax now, arm becoming normal."'
                    },
                    {
                        cue: 'Analgesia (Pain Control)',
                        means: 'Create numbness or complete lack of pain in body parts',
                        use: 'Medical procedures, chronic pain management, dental work',
                        context: 'Deep trance: "Imagine your hand in a bucket of ice and numbing solution... That hand is completely numb now." Test by pinching - no reaction. Used successfully for surgery.'
                    },
                    {
                        cue: 'Age Regression',
                        means: 'Take someone back to earlier ages with full sensory recall',
                        use: 'Accessing resources, healing past experiences',
                        context: 'Deep trance: "Go back now to age seven. What are you wearing? Who else is there?" Watch their face and voice shift - they actually re-experience it. Always age-progress back before emerging.'
                    },
                    {
                        cue: 'Time Distortion',
                        means: 'Make minutes feel like hours or hours feel like minutes',
                        use: 'Packing processing into brief time, or making difficult experiences pass quickly',
                        context: 'Deep trance: "In the next sixty seconds, your unconscious will have all the time it needs - hours - to integrate everything." Time is subjective in trance.'
                    }
                ],
                backfire: 'Deep phenomena require genuine deep trance - do not force them if depth is insufficient. Always emerge people properly - count them up gradually, ensure full alertness before they drive.',
                practice: 'Master basic phenomena (catalepsy, analgesia) before attempting advanced ones. Work with willing, trusting subjects. Study the masters - Erickson, Bandler. Practice self-hypnosis phenomena first.'
            }
        ]
    }
];
