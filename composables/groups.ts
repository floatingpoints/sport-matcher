export function useGroups() {
    return useState<Group[]>("groups", () => [
        { id: 7, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png", area: "Helsinki", description: "Some description", sport: "Badminton" },
        { id: 1, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png", area: "Helsinki", description: "Some description", sport: "Football" },
        { id: 2, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png", area: "Helsinki", description: "Some description", sport: "Basketball" },
        { id: 3, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png", area: "Helsinki", description: "Some description", sport: "Volleyball" },
        { id: 4, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png", area: "Helsinki", description: "Some description", sport: "Badminton" },
        { id: 5, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png", area: "Helsinki", description: "Some description", sport: "Badminton" },
        { id: 6, name: "Smash Sulkis", image: "https://freesvg.org/img/logo_bad_lion_2.png", area: "Helsinki", description: "Some description", sport: "Badminton" },
    ])
}