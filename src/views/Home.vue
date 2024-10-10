<template>
    <v-container style="max-width: 1280px; min-width: 640px;">
        <!-- 基础信息卡片 -->
        <v-card class="mb-4" outlined style="padding: 8px; background-color: #5c6bc0; color: white;">

            <v-col>
                <v-row>
                    <v-avatar size="100" style="margin: 16px auto;">
                        <v-img :src="avatar" alt="Avatar"></v-img>
                    </v-avatar>

                </v-row>

                <v-row>
                    <v-card-title style="font-size: 32pt; margin: 8px auto 0 auto;">{{ fullname }}</v-card-title>
                </v-row>

                <v-row>
                    <v-col style="padding: 0;">
                        <v-card-subtitle style="text-align: center;">{{ position }}</v-card-subtitle>
                        <v-card-subtitle style="text-align: center;">{{ organization }}</v-card-subtitle>
                    </v-col>
                </v-row>

            </v-col>
        </v-card>

        <!-- <v-spacer style="height: 12px;"></v-spacer> -->

        <v-container fluid ma-0 pa-0 fill-height>
            <v-row>
                <h1>ABOUT ME</h1>
            </v-row>

            <v-row cols="12">
                <v-col cols="8">
                    <v-row style="padding-top: 16px; padding-right: 8px;">
                        <p v-html="about"></p>
                    </v-row>

                    <v-row>
                        <h2 v-if="education.length > 0">
                            Education
                        </h2>
                        <v-list width="100%">
                            <v-list-item v-for="(item, index) in education" :key="index">
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.degree }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ item.university }}</v-list-item-subtitle>
                                    <v-list-item-subtitle>{{ formattedDate(item.start_date) }} - {{
                                        formattedDate(item.end_date) }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-row>

                    <v-row>
                        <h2 v-if="employment.length > 0">
                            Work Experience
                        </h2>
                        <v-list width="100%">
                            <v-list-item v-for="(item, index) in employment" :key="index">
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.position }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ item.company }}</v-list-item-subtitle>
                                    <v-list-item-subtitle>{{ formattedDate(item.start_date) }} - {{
                                        formattedDate(item.end_date) }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-row>

                    <v-row>
                        <h2 v-if="academic.length > 0">
                            Teaching Experience
                        </h2>
                        <v-list width="100%">
                            <v-list-item v-for="(item, index) in academic" :key="index">
                                <v-list-item-content>
                                    <v-list-item-title>{{ item.position }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ item.name }}, {{ item.department }}</v-list-item-subtitle>
                                    <v-list-item-subtitle>{{ formattedDate(item.start_date) }} - {{
                                        formattedDate(item.end_date) }}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-row>
                </v-col>

                <v-divider vertical></v-divider>

                <v-col cols="4" style="padding-left: 26px;">

                    <v-row v-if="email.length > 0">
                        <h2>Contact</h2>
                        <v-list width="100%">
                            <v-list-item v-for="(item, index) in email" :key="index">
                                <a :href="'mailto:' + item" target="_blank"
                                    style="color: inherit; text-decoration: none;">
                                    <v-list-item-content>
                                        <v-list-item-title><v-icon>mdi:mdi-email</v-icon> {{ item }}</v-list-item-title>
                                    </v-list-item-content>
                                </a>
                            </v-list-item>
                        </v-list>
                    </v-row>

                    <v-row v-if="social_media.length > 0">
                        <h2>Follow Me</h2>
                        <v-list width="100%">
                            <v-list-item v-for="(item, index) in social_media" :key="index">
                                <a :href="item.url" target="_blank" style="color: inherit; text-decoration: none;">
                                    <v-list-item-content>
                                        <v-list-item-title><v-icon>{{ item.icon }}</v-icon> {{ item.nickname
                                            }}</v-list-item-title>
                                    </v-list-item-content>
                                </a>
                            </v-list-item>
                        </v-list>
                    </v-row>


                    <!-- <v-row justify="end">
                        <v-btn @click="$router.push('/experience')" variant="plain">View More</v-btn>
                    </v-row> -->
                </v-col>
            </v-row>

            <v-row>
                <h1>SELECTED PROJECTS</h1>

            </v-row>

            <v-row>
                <v-container class=" text-center" fluid ma-0 pa-0 fill-height>
                    <v-row align="center" class="fill-height" justify="center">
                        <template v-for="(item, i) in projects" :key="i">
                            <v-col cols="12" md="4">
                                <v-hover v-slot="{ isHovering, props }">
                                    <v-card :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 12 : 2"
                                        v-bind="props">
                                        <v-img :src="item.images[0]" height="225px" cover>
                                            <v-expand-transition>
                                                <div v-if="!isHovering"
                                                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                                                    style="height: 60px; background-color: #5c6bc0; color: white;">
                                                    <v-col>
                                                        <v-card-title class="text-h6 d-flex flex-column"
                                                            style="justify-content: center;">
                                                            <p class="mt-4">
                                                                {{ item.title }}
                                                            </p>
                                                        </v-card-title>
                                                    </v-col>
                                                </div>

                                                <div v-if="isHovering"
                                                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                                                    style="height: 100%; background-color: #5c6bc0; color: white;">
                                                    <v-col>
                                                        <v-card-title class="text-h6 d-flex flex-column"
                                                            style="height: 100px; justify-content: center;">
                                                            <p class="mt-4">
                                                                {{ item.title }}
                                                            </p>
                                                        </v-card-title>

                                                        <v-card-text style="height: 80px; justify-content: center;">
                                                            <p class="text-caption font-weight-medium">
                                                                {{ item.subtitle }}
                                                            </p>
                                                        </v-card-text>

                                                        <div style="height: 45px; justify-content: center;">
                                                            <v-row>
                                                                <v-col v-for="(link, index) in item.link"
                                                                    v-bind:key="index">
                                                                    <a v-bind:href="link.url" style="color: white;" target="_blank">
                                                                        <v-icon>{{ link.icon }}</v-icon> {{ link.name }}
                                                                    </a>
                                                                </v-col>

                                                            </v-row>
                                                        </div>
                                                    </v-col>
                                                </div>
                                            </v-expand-transition>
                                        </v-img>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </template>
                    </v-row>
                </v-container>
                <!-- <v-btn v-if="projects.length > 3" @click="$router.push('/projects')">View More</v-btn> -->
            </v-row>

            <v-row v-if="publications.length > 0">
                <h1>PUBLICATIONS</h1>
            </v-row>

            <v-row v-if="publications.length > 0">
                <v-list>
                    <v-list-item v-for="(publication, index) in limitedPublications" :key="index">
                        <v-list-item-content>
                            <v-list-item-title>{{ publication.title }}</v-list-item-title>
                            <v-list-item-subtitle
                                v-html="formatAuthors(publication.authors, publication.your_position)"></v-list-item-subtitle>
                            <v-list-item-subtitle>{{ publication.journal }}{{ publication.pages ? ", " +
                                publication.pages
                                : "" }}{{ publication.year ? ". (" + publication.year + ")" : "."
                                }}</v-list-item-subtitle>
                            <!-- <v-list-item-subtitle v-if="publication.doi">DOI: {{ publication.doi }}</v-list-item-subtitle> -->
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <!-- <v-btn v-if="publications.length > 3" @click="$router.push('/publications')">View More</v-btn> -->
            </v-row>

            <v-row v-if="patents.length > 0">
                <h1>PATENTS</h1>
            </v-row>

            <v-row v-if="patents.length > 0">
                <v-list>
                    <v-list-item v-for="(patent, index) in patents" :key="index">
                        <v-list-item-content>
                            <v-list-item-title>[{{ patent.type }}] {{ patent.title }}</v-list-item-title>
                            <v-list-item-subtitle
                                v-html="formatAuthors(patent.authors, patent.your_position)"></v-list-item-subtitle>
                            <v-list-item-subtitle>{{ patent.year }}. Application NO.: {{ patent.application_no ? patent.application_no : "NaN" }},
                                Issue NO.: {{ patent.issue_no ? patent.issue_no : "NaN" }}.
                                {{ patent.remark ? "(" + patent.remark + ")" : "" }}</v-list-item-subtitle>
                            <!-- <v-list-item-subtitle v-if="publication.doi">DOI: {{ publication.doi }}</v-list-item-subtitle> -->
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <!-- <v-btn v-if="publications.length > 3" @click="$router.push('/publications')">View More</v-btn> -->
            </v-row>

            <v-row v-if="awards.length > 0">
                <h1>AWARDS</h1>
            </v-row>

            <v-row v-if="awards.length > 0">
                <v-list>
                    <v-list-item v-for="(award, index) in awards" :key="index">
                        <v-list-item-content>
                            <v-list-item-title>[{{ award.position }}] {{ award.award }}</v-list-item-title>
                            <v-list-item-subtitle>{{ award.name }} ({{ award.time }})</v-list-item-subtitle>
                            <!-- <v-list-item-subtitle v-if="publication.doi">DOI: {{ publication.doi }}</v-list-item-subtitle> -->
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <!-- <v-btn v-if="publications.length > 3" @click="$router.push('/publications')">View More</v-btn> -->
            </v-row>

        </v-container>

    </v-container>
</template>

<script>
import { marked } from 'marked';

export default {
    name: "HomePage",

    data() {
        return {
            profile: undefined,
            publications: [],
            projects: [],
            patents: [],
            awards: [],

            about: ""
        }
    },

    computed: {
        avatar() {
            return this.profile && this.profile.avatar ? this.profile.avatar : "/favicon.ico"
        },

        fullname() {
            return this.profile && this.profile.name ? this.profile.name : "YOUR NAME"
        },

        position() {
            return this.profile && this.profile.position ? this.profile.position : ""
        },

        organization() {
            return this.profile && this.profile.organization ? this.profile.organization : ""
        },

        education() {
            return this.profile && this.profile.education ? this.profile.education : []
        },

        employment() {
            return this.profile && this.profile.employment ? this.profile.employment : []
        },

        academic(){
            return this.profile && this.profile.academic ? this.profile.academic : []
        },

        social_media() {
            return this.profile && this.profile.social_media ? this.profile.social_media : []
        },

        email() {
            return this.profile && this.profile.email ? this.profile.email : []
        },

        limitedPublications() {
            return this.publications.slice(0, 3);
        },
        limitedProjects() {
            return this.projects.slice(0, 3);
        }
    },

    methods: {
        formattedDate(date) {
            try{
                const dateObj = new Date(date);
                return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(dateObj);
            }
            catch(e) {
                return "Present"
            }
        },

        formatAuthors(authors, yourPosition) {
            const authers_cp = [...authors]
            authers_cp[yourPosition - 1] = `<strong>${authers_cp[yourPosition - 1]}</strong>`;
            return marked(authers_cp.join(', '));
        }
    },

    async created() {
        try {
            const response = await fetch('/profile.json');
            this.profile = await response.json();
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }

        try {
            const response = await fetch('/projects.json');
            this.projects = await response.json();
        } catch (error) {
            console.error('Error fetching projects data:', error);
        }

        try {
            const response = await fetch('/publications.json');
            this.publications = await response.json();
        } catch (error) {
            console.error('Error fetching publications data:', error);
        }

        try {
            const response = await fetch('/patents.json');
            this.patents = await response.json();
        } catch (error) {
            console.error('Error fetching patents data:', error);
        }
        
        try {
            const response = await fetch('/awards.json');
            this.awards = await response.json();
        } catch (error) {
            console.error('Error fetching awards data:', error);
        }

        if (this.profile && this.profile.about) {
            try {
                const response = await fetch(this.profile.about); // Adjust the file path
                const text = await response.text();
                this.about = marked(text)
            } catch (error) {
                console.error('Error fetching file:', error);
                // Handle the error appropriately (e.g., display an error message)
            }
        }
    }
}
</script>

<style scoped>
h1 {
    font-size: 28px;
    margin-top: 48px;
}

h2 {
    font-size: 18px;
    margin-top: 18px;

    font-weight: bold;
}

.v-card-subtitle {
    margin: 4px auto 16px auto;
    width: fit-content;

    white-space: unset;
    text-overflow: unset;
    overflow: unset;
}

.v-list-item-title,
.v-list-item-subtitle {
    -webkit-line-clamp: unset !important;

    white-space: unset;
    text-overflow: unset;
    overflow: unset;
}

.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
}
</style>