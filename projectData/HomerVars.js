/**
* javascript variables for the Homer project:
* Thoughts at the park
* Homer - The Story Flow Editor.
* Copyright (c)2021-2024. Open Lab s.r.l - Florence, Italy
* Developer: Pupunzi (Matteo Bicocchi)
*
**/

class HomerVars {

      static smoker = 0;
      static emilySees = 0;
      static scooterGirl = 0;
      static test = false;
      static XAX = 0;
      static X = 0;
      static ACTOR_SELF_EXTEEM = 0;
      static CMD = "text";
      static SCENE_TYPE = "text";
      static QUEST_TASK = 0;
      static DIALOGUE_NAME = "text";
      static CUT_SCENE_NAME = "text";
      static EXPRESSION = {"IDLE":"IDLE"," ANGRY":" ANGRY"," HAPPY":" HAPPY"};

};

class HomerActors {

      static TEENAGE_GIRL = "Teenage Girl";
      static SMOKER = "Smoker";
      static NARRATOR = "Narrator";
      static EMILY = "Emily";
      static YOU = "You";
      static IO = "io";
      static JADON_PRUITT = "Jadon Pruitt";
      static ACHILLES = "Achilles";
      static TRIOPAS = "Triopas";
      static AGAMENNON = "Agamennon";
      static PLAYER = "Player";
      static PARIS = "Paris";
      static TROJANS = "Trojans";
      static GREEKS = "Greeks";
      static HOMER = "Homer";
      static ZEUS = "Zeus";

}

class HomerMeta {
      static Mood = {
          NEUTRAL : 'NEUTRAL',
          HAPPY : 'HAPPY',
          VERY_HAPPY : 'VERY_HAPPY',
          SAD : 'SAD',
          ANGRY : 'ANGRY',
          AMAZED : 'AMAZED',
      };
      static Expression = {
          RELAXED : 'RELAXED',
          GRINNING : 'GRINNING',
          PENSIVE : 'PENSIVE',
          FROWNING : 'FROWNING',
          CRYING : 'CRYING',
          ENRAGED : 'ENRAGED',
      };
      static Balloon_Type = {
          SPEECH : 'SPEECH',
          WHISPER : 'WHISPER',
          THOUGHT : 'THOUGHT',
          SCREAM : 'SCREAM',
          SLEEP : 'SLEEP',
          SING_SONG : 'SING_SONG',
      };
      static Location = {
          HOME : 'HOME',
          OUTSIDE : 'OUTSIDE',
          OFFICE : 'OFFICE',
          PARK : 'PARK',
          SEA : 'SEA',
          MOUNTAIN : 'MOUNTAIN',
      };
      static Camera_direction = {
          CLOSE_UP : 'CLOSE_UP',
          ANGLE_ON : 'ANGLE_ON',
          OFF_SCREEN : 'OFF_SCREEN',
          FADE_OUT : 'FADE_OUT',
          FADE_IN : 'FADE_IN',
          VOICE_OVER : 'VOICE_OVER',
      };
      static Lightining = {
          KEY : 'KEY',
          BACK : 'BACK',
          PRACTICAL : 'PRACTICAL',
          HARD : 'HARD',
          SOFT : 'SOFT',
          CHIAROSCURO : 'CHIAROSCURO',
      };
      static FLOW_STATE = {
          IDEA : 'IDEA',
          NOTES : 'NOTES',
          DRAFT : 'DRAFT',
          EDITOR : 'EDITOR',
          FINAL : 'FINAL',
      };

}

class HomerLabels {

      static NEW_LABEL_KEY = "NEW_LABEL_KEY";
      static GENERAL = "GENERAL";

}


class HomerFlowSlugs {
      static STORY = "Story";
 }

