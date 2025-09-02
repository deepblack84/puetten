<script>
import Icon from "@iconify/svelte";
</script>

<section id="features" class="container mx-auto px-4 space-y-6  py-8 md:py-12 lg:py-20">

    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

        <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Service</h2>

        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Die wichtigsten Dienste und Serviceleistungen die wir Ihnen bieten als &uuml;bersicht. 
        </p>

    </div>

    <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-jomi p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icon icon="mdi:wrench-cog-outline" width="48" height="48"  style="color: #C6D6D5" />
                <div class="space-y-2">
                    <h3 class="font-bold">Kundendienst</h3>
                    <p class="text-sm text-muted-foreground">Ein tropfender Wasserhahn, eine kalte Heizungsanlage, ein defektes Rohr? </p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icon icon="mdi:toilet" width="48" height="48"  style="color: #C6D6D5" />
                <div class="space-y-2">
                    <h3 class="font-bold">Badsanierungen</h3>
                    <p class="text-sm">Ein neues Bad kann eine Wohlfühloase werden</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icon icon="mdi:electric-water-heater" width="48" height="48"  style="color: #C6D6D5" />
                <div class="space-y-2">
                    <h3 class="font-bold">Heizungssanierungen</h3>
                    <p class="text-sm text-muted-foreground">Die alte Anlage ist ab, es soll Energieeffizenter und moderner werden?</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
                <Icon icon="mdi:car-seat-cooler" width="48" height="48"  style="color: #C6D6D5" />
                <div class="space-y-2">
                    <h3 class="font-bold">K&auml;tetechnik</h3>
                    <p class="text-sm text-muted-foreground">Immer mehr rückt die Kälte- und Klimatechnik in den Vordergrund.</p>
                </div>
            </div>
        </div>

    </div>

</section>