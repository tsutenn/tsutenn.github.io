<!-- views/Projects.vue -->
<template>
    <v-container>
        <v-card outlined>
            <v-card-title>Projects</v-card-title>
            <v-list>
                <v-list-item v-for="(project, index) in projects" :key="index">
                    <v-list-item-content>
                        <v-list-item-title>{{ project.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ project.date }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "ProjectsPage",

    data() {
        return {
            projects: [
                { title: "MapCraft: Geographic Information Graphics Web Editor", date: "Mar. 2024 - May 2024" },
                { title: "Grasp Selection for Point Cloud in Immersive Environment", date: "Sep. 2023 - Dec. 2023" },
                { title: "Data Cubes in Hand: Multiple Cube Tracking and Data Transmission", date: "May 2023 - Sep. 2023" }
            ]
        }
    }
}
</script>