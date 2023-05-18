class PlatformStats {
    buildStatsTable(pages) {
        const platformSet = new Set(["iOS", "Android"]);
        const statusSet = new Set();
        const stats = new Map();

        // Iterate over all pages and update stats accordingly
        for (const page of pages) {
            const match = page.content.match(/- Platforms: (.*)\n/);
            if (!match) {
                continue;
            }

            // Extract platform and status information
            const platforms = match[1].split(", ");
            const status = page.content.match(/- Status: (.*)\n/)[1];
            statusSet.add(status);

            // Update stats for each platform and status
            for (const platform of platforms) {
                if (!platformSet.has(platform)) {
                    continue;
                }
                if (!stats.has(platform)) {
                    stats.set(platform, new Map());
                }
                const platformStats = stats.get(platform);
                if (!platformStats.has(status)) {
                    platformStats.set(status, 0);
                }
                platformStats.set(status, platformStats.get(status) + 1);
            }
        }

        // Create table header
        let table = "| Platform |";
        for (const status of statusSet) {
            table += ` ${status} |`;
        }
        table += " Total |\n|";
        for (let i = 0; i < statusSet.size + 2; i++) {
            table += " :---: |";
        }
        table += "\n";

        // Create table body
        const total = new Map();
        for (const platform of platformSet) {
            table += `| ${platform} |`;
            let platformTotal = 0;
            for (const status of statusSet) {
                const count = stats.has(platform) && stats.get(platform).has(status) ? stats.get(platform).get(status) : 0;
                platformTotal += count;
                total.set(status, (total.get(status) || 0) + count);
                table += ` ${count} |`;
            }
            table += ` **${platformTotal}** |\n`;
        }

        // Create total row
        table += "| Total |";
        let totalTotal = 0;
        for (const status of statusSet) {
            const count = total.get(status) || 0;
            totalTotal += count;
            table += ` **${count}** |`;
        }
        table += ` **${totalTotal}** |\n`;

        return table;
    }
}