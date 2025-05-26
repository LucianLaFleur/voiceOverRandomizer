1 - voiceStyles.txt refers to all voice styles on voices.com
2 - roles1.txt has all roles listed from voices.com
3 - moodsList.txt is a list of generic moods that could be used for a variety of deliveries
4 - categoriesExpanded.txt is a mix of voice acting categories from voices.com and Edge Studio's script list

5 - voice_random_prompt.py is a CLI program using the above text files.
It churns out a set of randomized keywords for inspiring an improv performance.
Many features will intuitively not go together, like a "comforting pirate" is kind of weird.
As I have no such checks, the combinations of roles, moods, and vocal styles are all truly random.

*unlisted vocal data -
Within voice_random_prompt.py is a collection of arrays about physical vocal characteristics, used to make the related section on the output for the vocal performance direction like nasally, resonant, or gravelly qualities. These are separate from mood or character.

NYI - a list of possible "content" could be added, but I'm not sure how to manage that among the suggestions. Branching off the categories seems like a massive amount of sub-arrays I'd have to make.
