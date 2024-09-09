<!-- views/Publications.vue -->
<template>
    <v-container>
        <v-card outlined>
            <v-card-title>Publications</v-card-title>
            <v-list>
                <v-list-item v-for="(publication, index) in publications" :key="index">
                    <v-list-item-content>
                        <v-list-item-title>{{ publication.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ publication.journal }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "PublicationsPage",

    data() {
        return {
            publications: [
                { title: "MapCraft: Dissecting and Designing Custom Geo-Infographics", journal: "Journal of Visualization (SCI Q3)" },
                { title: "3DStoryline: Immersive Visual Storytelling", journal: "Journal of Visualization (SCI Q3)" },
                { title: "Data Cubes in Hand: A Design Space of Tangible Cubes for Visualizing 3D Spatio-Temporal Data", journal: "CHI Conference on Human Factors in Computing Systems" }
            ]
        }
    }
}
</script>