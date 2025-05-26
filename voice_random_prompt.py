import random

voice_qualities_filename = "voiceStyles1.txt"
roles_filename = "roles1.txt"
categories_filename = "categoriesExpanded.txt"
moods_filename = "moodsList.txt"
# print(f"content suggestions: NYI")
# print(f"vocal qualities: NYI")

# vocal quality arrs:
breathy_projection = ["breathy voice",
"neutral projection",
"diaphragm projected voice"]

nasal_throaty = ["nasally",
"neutral nasal balance",
"throaty"]

pacing_length = ["clipped words (aprupt/fast paced)",
"neutral word length/pacing",
"lingering words (slow paced)"]

pitch_depth = ["higher pitched / head voice",
"neutral pitch",
"low-pitched / gutteral"]

pitch_variation = ["floating (pitch variation)",
"poetic meter pacing (sing-songy)",
"neutral pitch variation",
"more monotone (less pitch variation)"]

smooth_gravel = ["smoother",
"neutral gravel/smoothness",
"gravel"]

intensity_relaxation = ["intense",
"neutral intensity",
"relaxed delivery"]

articulation_clarity = ["clear articulation",
"neutral articulation/no mumble",
"more mumbling-like"]

all_vocal_quality_arrs = [breathy_projection,
	nasal_throaty,
	pacing_length,
	pitch_depth,
	pitch_variation,
	smooth_gravel,
	intensity_relaxation,
	articulation_clarity
]

def select_vocal_qualities():
    dummy_arr = []
    for current_arr in all_vocal_quality_arrs:
        selected_item = random.choice(current_arr)
        dummy_arr.append(selected_item)
    return dummy_arr

def load_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return [line.strip() for line in f if line.strip()]

def format_items(items):
    return ' OR '.join(items)

def main():
    voice_qualities = load_file(voice_qualities_filename)
    roles = load_file(roles_filename)
    categories = load_file(categories_filename)
    moods = load_file(moods_filename)

    used_voices = set()
    used_roles = set()
    used_categories = set()
    used_moods = set()

    while True:
        available_voice_styles = [v for v in voice_qualities if v not in used_voices]
        available_roles = [r for r in roles if r not in used_roles]
        available_categories = [c for c in categories if c not in used_categories]
        available_moods = [m for m in moods if m not in used_moods]

        if len(available_voice_styles) < 3 or len(available_roles) < 3:
            print("Not enough unused items left to continue.")
            break

        selected_voice_styles = random.sample(available_voice_styles, 2)
        selected_roles = random.sample(available_roles, 1)
        selected_category = random.choice(available_categories)
        selected_mood = random.choice(available_moods)
        selected_vocal_quality_arr = select_vocal_qualities()

        used_voices.update(selected_voice_styles)
        used_roles.update(selected_roles)
        used_categories.update(selected_category)
        used_moods.update(selected_mood)
        print('-' * 10 + " Improv Prompt: " + '-' * 10 )
        print(f"Category: {selected_category}")
        print(f"Mood: {selected_mood} \n Style: {format_items(selected_voice_styles)}")

        print('-' * 10 + " Vocal qualities: " + '-' * 10 )
        for x in selected_vocal_quality_arr:
            print(x)

        print('-' * 40)
        print(f"Roles: {format_items(selected_roles)} " )
        print('-' * 40)
        cont = input("Press Enter to continue or type 'q' to quit: ").strip().lower()
        if cont == 'q':
            break

if __name__ == "__main__":
    main()




# * List of delivery moods
# * list of accents you can do (e.g. southern / colloquial)