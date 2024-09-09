<template>
    <v-container>
        <v-card outlined>
            <v-card-title>Experience</v-card-title>
            <v-list>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>M.Sc. in Human-Computer Interaction</v-list-item-title>
                        <v-list-item-subtitle>Xi’an Jiaotong-Liverpool University, Sep. 2022 — Apr.
                            2024</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>Front-End Engineer (Internship)</v-list-item-title>
                        <v-list-item-subtitle>China Communications Services Corp. Ltd., Jun. 2024 — Sep.
                            2024</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "ExperiencePage",

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